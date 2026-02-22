import deliveryImg from "@/assets/delivery-driver.jpg";

const FreeDelivery = () => {
  return (
    <section className="bg-background py-10 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <img
            src={deliveryImg}
            alt="Delivery driver"
            className="w-full max-w-lg object-cover rounded-sm mx-auto shadow-sm"
            loading="lazy"
          />
        </div>

        <h2 className="font-serif text-[28px] md:text-[34px] text-[#6B6B76] mb-4">
          Always free delivery*
        </h2>
        <div className="h-[2px] w-24 bg-[#FBB016] mx-auto mb-6" />
        <p className="text-[#6B6B76] leading-relaxed mb-8 max-w-xl mx-auto text-[17px]">
          Our friendly drivers deliver all over the country but are local to
          you, so you'll always see a familiar face to brighten your day.
          Order what you want, when you want, with no subscription, just
          tasty meals and good old-fashioned service.
        </p>
        <a
          href="/how-to-get-started"
          className="inline-block bg-[#004225] text-white font-bold px-10 py-3.5 rounded-sm hover:bg-[#00321c] transition-colors"
        >
          Find out more
        </a>
      </div>
    </section>
  );
};

export default FreeDelivery;
