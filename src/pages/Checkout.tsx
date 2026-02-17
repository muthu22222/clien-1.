import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useBasket } from "@/context/BasketContext";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
    const navigate = useNavigate();
    const { items, total, clearBasket } = useBasket();
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postcode: "",
        email: "",
        paymentMethod: "card"
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (items.length === 0) {
            toast({
                title: "Basket is empty",
                description: "Please add items to your basket before checking out.",
                variant: "destructive"
            });
            return;
        }

        // Simulate order processing
        const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
        clearBasket();
        navigate("/order-confirmation", { state: { orderId, total } });
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="max-w-3xl mx-auto px-4 py-8">
                <h1 className="font-serif text-4xl text-foreground mb-6">Checkout</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Form Section */}
                    <div className="md:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Delivery Address */}
                            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                                <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium mb-1">First Name</label>
                                        <input
                                            required
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border rounded-sm"
                                        />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium mb-1">Last Name</label>
                                        <input
                                            required
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border rounded-sm"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium mb-1">Address</label>
                                        <input
                                            required
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border rounded-sm"
                                        />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium mb-1">City</label>
                                        <input
                                            required
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border rounded-sm"
                                        />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium mb-1">Postcode</label>
                                        <input
                                            required
                                            name="postcode"
                                            value={formData.postcode}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border rounded-sm"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium mb-1">Email</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border rounded-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                id="card"
                                                name="paymentMethod"
                                                value="card"
                                                checked={formData.paymentMethod === "card"}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor="card" className="font-medium">Credit / Debit Card</label>
                                        </div>

                                        {formData.paymentMethod === "card" && (
                                            <div className="ml-6 grid grid-cols-2 gap-4 animate-fade-in p-4 border border-border rounded-sm bg-muted/20">
                                                <div className="col-span-2">
                                                    <label className="block text-sm font-medium mb-1">Card Number</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="cardNumber"
                                                        placeholder="0000 0000 0000 0000"
                                                        className="w-full px-3 py-2 border rounded-sm"
                                                        maxLength={19}
                                                    />
                                                </div>
                                                <div className="col-span-1">
                                                    <label className="block text-sm font-medium mb-1">Expiry Date</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="expiry"
                                                        placeholder="MM/YY"
                                                        className="w-full px-3 py-2 border rounded-sm"
                                                        maxLength={5}
                                                    />
                                                </div>
                                                <div className="col-span-1">
                                                    <label className="block text-sm font-medium mb-1">CVC</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="cvc"
                                                        placeholder="123"
                                                        className="w-full px-3 py-2 border rounded-sm"
                                                        maxLength={3}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                id="paypal"
                                                name="paymentMethod"
                                                value="paypal"
                                                checked={formData.paymentMethod === "paypal"}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor="paypal" className="font-medium">PayPal</label>
                                        </div>
                                        {formData.paymentMethod === "paypal" && (
                                            <div className="ml-6 p-4 text-sm text-muted-foreground bg-muted/20 rounded-sm">
                                                You will be redirected to PayPal to complete your purchase securely.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-sm hover:bg-forest-dark transition-colors text-lg"
                            >
                                Confirm Order
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="md:col-span-1">
                        <div className="bg-card p-6 rounded-lg shadow-sm border border-border sticky top-24">
                            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                            <div className="space-y-2 mb-4">
                                {items.map(item => (
                                    <div key={item.meal.id} className="flex justify-between text-sm">
                                        <span className="truncate flex-1">{item.meal.title} (x{item.quantity})</span>
                                        <span>£{(item.meal.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="h-px bg-border my-4" />
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>£{total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Checkout;
