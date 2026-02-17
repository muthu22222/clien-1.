import { useState } from "react";
import deliveryImg from "@/assets/delivery-driver.jpg";

const DeliveryFinder = () => {
  const [postcode, setPostcode] = useState("");

  return (
    <section className="bg-primary text-primary-foreground py-10 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-3">Find delivery days</h2>
        <p className="mb-6 text-primary-foreground/80">
          Please enter a delivery postcode to see delivery days in your area.
        </p>
        <div className="flex max-w-md mx-auto border-2 border-gold rounded-sm overflow-hidden">
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="Enter your postcode"
            className="flex-1 px-4 py-3 bg-primary-foreground text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button className="bg-secondary text-secondary-foreground font-bold px-6 hover:bg-gold-dark transition-colors">
            Find
          </button>
        </div>
      </div>

      {/* Delivery image - desktop */}
      <div className="hidden lg:block max-w-3xl mx-auto mt-8">
        <img
          src={deliveryImg}
          alt="Friendly delivery driver"
          className="w-64 h-48 object-cover rounded-lg mx-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default DeliveryFinder;
