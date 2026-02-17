import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustpilotBadge from "@/components/TrustpilotBadge";
import { useBasket } from "@/context/BasketContext";
import { Link } from "react-router-dom";

const Basket = () => {
  const { items, updateQuantity, removeFromBasket, clearBasket, total } = useBasket();
  const [discountCode, setDiscountCode] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TrustpilotBadge />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="font-serif text-4xl text-foreground mb-2">Basket</h1>
        <div className="h-0.5 bg-gold mb-6" />

        <Link to="/browse-meals">
          <button className="w-full border-2 border-foreground text-foreground font-bold py-3 rounded-sm mb-8 hover:bg-muted transition-colors">
            Continue Shopping
          </button>
        </Link>

        {items.length === 0 ? (
          <p className="text-foreground mb-8">
            Your basket is empty. To start shopping click the 'Continue Shopping' button above.
          </p>
        ) : (
          <div className="mb-8 space-y-4">
            {items.map((item) => (
              <div key={item.meal.id} className="flex gap-4 border-b border-border pb-4">
                <div className="w-24 h-24 flex-shrink-0">
                  <img src={item.meal.image} alt={item.meal.title} className="w-full h-full object-cover rounded-sm" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-foreground">{item.meal.title}</h3>
                    <p className="font-bold text-foreground">£{(item.meal.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border rounded-sm">
                      <button
                        onClick={() => updateQuantity(item.meal.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="px-3 py-1 hover:bg-muted disabled:opacity-50"
                      >-</button>
                      <span className="px-3 py-1 font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.meal.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-muted"
                      >+</button>
                    </div>
                    <button
                      onClick={() => removeFromBasket(item.meal.id)}
                      className="text-sm text-destructive hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center text-xl font-bold pt-4 border-t-2 border-gold">
              <span>Total</span>
              <span>£{total.toFixed(2)}</span>
            </div>
          </div>
        )}

        <div className="h-0.5 bg-gold mb-8" />

        <div className="bg-card rounded-lg p-6 shadow-sm mb-6">
          <button
            onClick={clearBasket}
            className="w-full bg-secondary text-secondary-foreground font-bold py-3 rounded-sm mb-4 hover:bg-gold-dark transition-colors"
          >
            Empty basket
          </button>

          <p className="font-bold text-foreground mb-2">Do you have a discount code?</p>
          <div className="flex border-2 border-foreground rounded-sm overflow-hidden">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Enter discount code"
              className="flex-1 px-4 py-2 bg-card text-foreground placeholder:text-muted-foreground outline-none"
            />
            <button className="bg-primary text-primary-foreground font-bold px-6 hover:bg-forest-dark transition-colors">
              APPLY
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-serif text-xl text-muted-foreground mb-2">
            Do you have a discount code or gift voucher?
          </h3>
          <div className="h-0.5 bg-gold mb-4" />
          <p className="text-foreground leading-relaxed">
            If you have a discount code to redeem online, you will be able to apply this on the
            Review Order page after selecting your delivery date. Please note, not all discount
            codes are redeemable online and online discount codes can only be redeemed online.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Basket;
