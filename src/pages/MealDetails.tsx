import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronUp, Heart, ShoppingBasket, Star, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { meals } from "@/data/meals";
import { useBasket } from "@/context/BasketContext";
import { useToast } from "@/hooks/use-toast";

const MealDetails = () => {
    const { id } = useParams();
    const { addToBasket } = useBasket();
    const { toast } = useToast();
    const meal = meals.find((m) => m.id === id);
    const [activeMicrowave, setActiveMicrowave] = useState<number | null>(0);

    if (!meal) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center p-8">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Meal not found</h1>
                        <Link to="/browse-meals" className="text-primary underline">Back to all meals</Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const handleAdd = () => {
        addToBasket(meal);
        toast({
            title: "Added to basket",
            description: `${meal.title} has been added to your basket.`,
        });
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="max-w-7xl mx-auto px-4 py-4">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-1 text-[10px] md:text-xs text-[#6B6B76] mb-4 uppercase tracking-wider overflow-x-auto whitespace-nowrap">
                    <Link to="/browse-meals" className="hover:text-primary">Browse our meals</Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="hover:text-primary cursor-pointer">{meal.category.replace('-', ' ')}</span>
                    {meal.subCategory && (
                        <>
                            <ChevronRight className="h-3 w-3" />
                            <span className="font-bold text-[#013220]">{meal.subCategory}</span>
                        </>
                    )}
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Left: Product Image */}
                    <div className="relative">
                        <div className="aspect-square bg-muted overflow-hidden rounded-sm">
                            <img
                                src={meal.image}
                                alt={meal.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md text-[#013220] flex items-center gap-2 px-4 py-2 font-bold text-sm">
                            <Heart className="h-5 w-5" />
                            Favourite
                        </button>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-4">
                            <div className="h-2.5 w-2.5 rounded-full bg-[#013220]"></div>
                            <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]"></div>
                            <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]"></div>
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="flex flex-col">
                        <h1 className="text-2xl md:text-3xl font-bold text-[#013220] mb-4 leading-tight">
                            {meal.title}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-[#6B6B76] text-white px-3 py-1 text-xs font-bold tracking-widest">
                                {meal.productCode || meal.id}
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex text-[#FBB016]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`h-4 w-4 ${i < Math.round(meal.rating) ? 'fill-[#FBB016]' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <button className="text-[#013220] font-bold text-sm underline flex items-center gap-1">
                                    {meal.reviewsCount} reviews <ChevronDown className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <p className="text-[#6B6B76] leading-relaxed mb-6">
                            {meal.description}
                        </p>

                        <div className="mb-4">
                            <span className="text-[#6B6B76] text-xl font-medium">{meal.weight}</span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="text-4xl font-bold text-[#013220]">£{meal.price.toFixed(2)}</span>
                            <button
                                onClick={handleAdd}
                                className="w-full bg-[#004225] text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#00321c] transition-colors shadow-lg text-lg"
                            >
                                <div className="bg-[#013220] p-1.5 rounded-full">
                                    <ShoppingBasket className="h-5 w-5" />
                                </div>
                                Add to basket
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Information Sections */}
                <div className="border-t border-[#FBB016]/20 bg-[#FEF9F3]/50 -mx-4 px-4 py-4 mb-8">
                    <h2 className="text-[#6B6B76] text-lg font-medium">Product Information</h2>
                </div>

                <div className="space-y-12 mb-16">
                    {/* Cooking Instructions */}
                    <section>
                        <h2 className="font-serif text-3xl text-[#6B6B76] mb-2">Cooking Instructions</h2>
                        <div className="h-0.5 bg-[#FBB016] w-full mb-6" />

                        {meal.cookingInstructions?.oven && (
                            <div className="mb-8">
                                <h3 className="font-bold text-[#013220] mb-3 text-lg">Oven Instructions</h3>
                                <p className="text-[#6B6B76] leading-relaxed">{meal.cookingInstructions.oven}</p>
                            </div>
                        )}

                        {meal.cookingInstructions?.guidelines && (
                            <div className="mb-8">
                                <h3 className="font-bold text-[#013220] mb-3 text-lg">Cooking Guidelines</h3>
                                <p className="text-[#6B6B76] leading-relaxed">{meal.cookingInstructions.guidelines}</p>
                            </div>
                        )}

                        {meal.cookingInstructions?.microwave && (
                            <div>
                                <h3 className="font-bold text-[#013220] mb-4 text-lg">Microwave Instructions</h3>
                                <div className="border-t border-[#6B6B76]/20">
                                    <h4 className="font-bold text-[#013220] py-4 text-sm tracking-wide uppercase">Power Rating</h4>
                                    <div className="space-y-0">
                                        {meal.cookingInstructions.microwave.map((mw, idx) => (
                                            <div key={idx} className="border-t border-[#6B6B76]/20">
                                                <button
                                                    onClick={() => setActiveMicrowave(activeMicrowave === idx ? null : idx)}
                                                    className="w-full flex items-center justify-between py-4 text-[#6B6B76] font-medium"
                                                >
                                                    <span>{mw.power}</span>
                                                    {activeMicrowave === idx ? <span className="text-xl">−</span> : <span className="text-xl">+</span>}
                                                </button>
                                                {activeMicrowave === idx && (
                                                    <div className="pb-6 pl-4 space-y-2 text-[#6B6B76]">
                                                        {mw.steps.map((step, sIdx) => (
                                                            <p key={sIdx}>{step}</p>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Storage Information */}
                    <section>
                        <h3 className="font-bold text-[#013220] mb-3 text-lg">Storage Instructions</h3>
                        <p className="text-[#6B6B76] leading-relaxed">{meal.storage}</p>
                    </section>

                    {/* Ingredients */}
                    <section>
                        <h2 className="font-serif text-3xl text-[#6B6B76] mb-2">Ingredients</h2>
                        <div className="h-0.5 bg-[#FBB016] w-full mb-6" />
                        <p className="text-[#6B6B76] leading-relaxed mb-6 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: meal.ingredients || '' }} />

                        <div className="mb-8">
                            <p className="font-bold text-[#013220] mb-2">Allergy Advice: <span className="font-normal text-[#6B6B76]">For allergens see ingredients in **bold**.</span></p>
                            <p className="font-bold text-[#013220] mb-2">Product Warnings</p>
                            <p className="text-[#6B6B76]">May contain nuts.</p>
                        </div>

                        <div className="bg-[#6B6B76]/10 p-6 rounded-sm mb-10">
                            <p className="text-sm text-[#6B6B76] leading-relaxed">
                                Please note that recipes or suppliers may change from time to time if we cannot obtain the quality or quantity of ingredients we need, or to improve flavour. While every effort is made to minimise changes, more than one recipe could be available at the same time. We therefore advise that you always refer to the label on your chosen dish as this will show all the ingredients and indicate any allergens used in that specific recipe. If you have any concerns regarding ingredient changes, please contact your local team.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <h3 className="font-bold text-[#013220]">Suitable for</h3>
                            <div className="flex gap-4">
                                {meal.suitableFor?.map((suitable, idx) => (
                                    <div key={idx} className="w-10 h-10 rounded-full border-2 border-[#82C341] flex items-center justify-center text-[#82C341] font-bold text-xs">
                                        {suitable}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Reviews */}
                    <section className="pt-8 border-t border-[#6B6B76]/10">
                        <h2 className="font-serif text-[40px] text-[#013220] mb-8">Reviews</h2>
                        <div className="flex items-center gap-6 mb-12">
                            <div className="flex text-[#82C341]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-8 w-8 fill-[#82C341]`} />
                                ))}
                            </div>
                            <div className="text-3xl font-bold text-[#013220]">
                                4.5 <span className="text-[#6B6B76]/50">/ 5</span>
                                <span className="mx-2 text-[#6B6B76]/50">•</span>
                                <span className="text-[#6B6B76] text-xl font-normal">{meal.reviewsCount} reviews</span>
                            </div>
                            <div className="ml-auto">
                                <span className="flex items-center gap-1 font-bold text-[#82C341]">
                                    <Star className="h-6 w-6 fill-[#82C341]" /> Trustpilot
                                </span>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {meal.reviews?.map((review, idx) => (
                                <div key={idx} className="border-b border-[#6B6B76]/10 pb-8 last:border-0">
                                    <div className="flex text-[#82C341] mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'fill-[#82C341]' : 'text-gray-200 fill-gray-200'}`} />
                                        ))}
                                    </div>
                                    <p className="text-[#013220] font-medium text-lg mb-4">{review.comment}</p>
                                    <div className="flex items-center gap-1 text-[#6B6B76] text-sm mb-4">
                                        <div className="h-4 w-4 rounded-full bg-[#6B6B76]/50 flex items-center justify-center text-[10px] text-white">✓</div>
                                        Verified, collected by Wiltshire Farm Foods
                                    </div>
                                    <p className="text-[#6B6B76] font-bold">{review.user}, <span className="font-normal">{review.date}</span></p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MealDetails;
