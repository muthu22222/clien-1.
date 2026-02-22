import { Link } from "react-router-dom";
import sweetSourImg from "@/assets/meal-sweet-sour.jpg";

const NewMenu = () => {
    return (
        <section className="bg-white py-14 px-4 border-t border-[#FBB016]/10">
            <div className="max-w-3xl mx-auto text-center">
                <div className="relative mb-10 group overflow-hidden rounded-sm shadow-md">
                    <img
                        src={sweetSourImg}
                        alt="Our New Menu - Winter & Spring"
                        className="w-full max-w-lg mx-auto transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white text-left">
                        <p className="font-serif text-2xl font-bold italic">Your Winter & Spring</p>
                        <p className="text-xl font-bold tracking-[0.2em] uppercase">2026 Menu</p>
                    </div>
                </div>

                <h2 className="font-serif text-[28px] md:text-[34px] text-[#6B6B76] mb-4">
                    Our new menu
                </h2>
                <div className="h-[2px] w-24 bg-[#FBB016] mx-auto mb-6" />

                <p className="text-[#6B6B76] leading-relaxed mb-8 max-w-xl mx-auto text-[17px]">
                    We're taking your taste buds on tour this season with exciting
                    creations to discover, from the Asian flavours <Link to="/browse-meals?category=chicken" className="text-[#004225] font-bold underline">Chicken Katsu Curry</Link> and <Link to="/browse-meals?category=beef" className="text-[#004225] font-bold underline">Beef Noodles</Link> to improved roast dinners
                    tastier than ever!
                </p>

                <Link
                    to="/browse-meals?specials=ws"
                    className="inline-block bg-[#004225] text-white font-bold px-10 py-3.5 rounded-sm hover:bg-[#00321c] transition-colors"
                >
                    Shop now
                </Link>
            </div>
        </section>
    );
};

export default NewMenu;
