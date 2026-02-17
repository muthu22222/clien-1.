import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Package, Truck, CheckCircle } from "lucide-react";

const TrackOrder = () => {
    const [orderId, setOrderId] = useState("");
    const [status, setStatus] = useState<"idle" | "found" | "not-found">("idle");

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        if (orderId.trim().length > 3) {
            setStatus("found"); // Mock finding order
        } else {
            setStatus("not-found");
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="max-w-3xl mx-auto px-4 py-12">
                <h1 className="font-serif text-4xl text-center text-foreground mb-8">Track Your Order</h1>

                <div className="max-w-md mx-auto mb-12">
                    <form onSubmit={handleTrack} className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Enter Order ID (e.g., ORD-123456)"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            className="flex-1 px-4 py-3 border border-input rounded-sm"
                        />
                        <button
                            type="submit"
                            className="bg-primary text-primary-foreground font-bold px-6 py-3 rounded-sm hover:bg-forest-dark transition-colors"
                        >
                            Track
                        </button>
                    </form>
                </div>

                {status === "found" && (
                    <div className="bg-card p-8 rounded-lg shadow-sm border border-border animate-fade-in">
                        <div className="flex justify-between items-center mb-8 border-b pb-4">
                            <div>
                                <p className="text-sm text-muted-foreground">Order Reference</p>
                                <p className="font-bold text-lg">{orderId}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                                <p className="font-bold text-lg text-primary">Tomorrow, 10am - 2pm</p>
                            </div>
                        </div>

                        <div className="relative">
                            {/* Progress Bar Background */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 z-0" />

                            {/* Active Progress */}
                            <div className="absolute top-1/2 left-0 w-2/3 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-1000" />

                            <div className="relative z-10 flex justify-between">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-bold">Placed</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                                        <Package className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-bold">Packing</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center animate-pulse">
                                        <Truck className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-bold text-primary">On Way</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center border-2 border-border">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm text-muted-foreground">Delivered</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-muted/30 p-4 rounded-md">
                            <p className="text-sm text-foreground">
                                <span className="font-bold">Latest Update:</span> Your order has been dispatched from our local depot and is on its way to you.
                            </p>
                        </div>
                    </div>
                )}

                {status === "not-found" && (
                    <div className="text-center text-red-500 font-bold bg-red-50 p-4 rounded-md">
                        Order not found. Please check your Order ID and try again.
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default TrackOrder;
