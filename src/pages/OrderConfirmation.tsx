import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const OrderConfirmation = () => {
    const location = useLocation();
    const orderId = location.state?.orderId || "ORD-000000";

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="max-w-2xl mx-auto px-4 py-16 text-center">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="h-24 w-24 text-green-600" />
                </div>
                <h1 className="font-serif text-4xl text-foreground mb-4">Order Confirmed!</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Thank you for your order. We have received it and will begin processing it immediately.
                </p>

                <div className="bg-card p-8 rounded-lg shadow-sm border border-border mb-8">
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Order Reference</p>
                    <p className="text-3xl font-bold text-primary">{orderId}</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/track-order"
                        className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-sm hover:bg-forest-dark transition-colors"
                    >
                        Track Order
                    </Link>
                    <Link
                        to="/browse-meals"
                        className="border-2 border-foreground text-foreground font-bold px-8 py-3 rounded-sm hover:bg-muted transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default OrderConfirmation;
