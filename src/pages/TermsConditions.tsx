import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 border-b-2 border-gold pb-4">
            TERMS & CONDITIONS
          </h1>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">1. Introduction</h2>
            <p className="text-foreground mb-4">
              These terms and conditions govern your use of our website; by using our website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">2. Licence to use website</h2>
            <p className="text-foreground mb-4">
              Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the licence below, all these intellectual property rights are reserved.
            </p>
            <p className="text-foreground mb-4">
              You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
            </p>
            <p className="text-foreground mb-4">
              You must not:
            </p>
            <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
              <li>Republish material from this website (including republication on another website);</li>
              <li>Sell, rent or sub-license material from the website;</li>
              <li>Show any material from the website in public;</li>
              <li>Reproduce, duplicate, copy or otherwise exploit material on our website for a commercial purpose;</li>
              <li>Edit or otherwise modify any material on the website; or</li>
              <li>Redistribute material from this website.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">3. Acceptable use</h2>
            <p className="text-foreground mb-4">
              You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.
            </p>
            <p className="text-foreground mb-4">
              You must not use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">4. Orders</h2>
            <p className="text-foreground mb-4">
              All orders placed through our website are subject to acceptance and availability. We reserve the right to refuse any order. You agree to provide accurate and complete information when placing an order.
            </p>
            <p className="text-foreground mb-4">
              Prices are as stated on the website and include VAT where applicable. Delivery charges will be as stated on the website at the time of order. We reserve the right to change prices at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">5. Delivery</h2>
            <p className="text-foreground mb-4">
              We will deliver the products to the address you specify for delivery in your order. It is important that this address is accurate and complete. We cannot be held responsible for orders that do not arrive due to incorrect address details.
            </p>
            <p className="text-foreground mb-4">
              Delivery times are estimates only and cannot be guaranteed. We are not liable for any delay in delivery.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">6. Returns and Refunds</h2>
            <p className="text-foreground mb-4">
              If you are not satisfied with any product, please contact us within 24 hours of delivery. We will arrange for a replacement or refund at our discretion. Certain products may not be eligible for return due to their perishable nature.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">7. Limitation of Liability</h2>
            <p className="text-foreground mb-4">
              Nothing in these terms and conditions will limit or exclude our liability for fraud, death or personal injury caused by our negligence, or any other liability which cannot be limited or excluded under applicable law.
            </p>
            <p className="text-foreground mb-4">
              We will not be liable to you in respect of any losses arising out of any event or events beyond our reasonable control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">8. Variation</h2>
            <p className="text-foreground mb-4">
              We may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the use of our website from the date of the publication of the revised terms and conditions on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">9. Contact</h2>
            <p className="text-foreground mb-4">
              If you have any questions about these terms and conditions, please contact us through our{" "}
              <a href="/contact" className="text-primary underline hover:text-primary/80">
                Contact Us
              </a>{" "}
              page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
