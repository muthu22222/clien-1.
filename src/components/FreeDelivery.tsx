import deliveryImg from "@/assets/delivery-driver.jpg";

const FreeDelivery = () => {
  return (
    <section className="bg-background py-10 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-muted-foreground mb-2">
          Always free delivery*
        </h2>
        <div className="h-0.5 bg-gold mb-6" />
        <p className="text-foreground leading-relaxed mb-6 max-w-xl mx-auto">
          Our friendly drivers deliver all over the country but are local to you,
          so you'll always see a familiar face to brighten your day. Order what you
          want, when you want, with no subscription, just tasty meals and good
          old-fashioned service.
        </p>
        <a
          href="#"
          className="inline-block bg-primary text-primary-foreground font-bold px-8 py-3 rounded-sm hover:bg-forest-dark transition-colors"
        >
          Find out more
        </a>

        <div className="mt-8">
          <img
            src={deliveryImg}
            alt="Delivery driver"
            className="w-64 h-48 object-cover rounded-lg mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default FreeDelivery;
