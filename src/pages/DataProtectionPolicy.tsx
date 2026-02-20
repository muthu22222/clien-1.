import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityButton from "@/components/AccessibilityButton";

const DataProtectionPolicy = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 border-b-2 border-gold pb-4">
            DATA PROTECTION POLICY
          </h1>

          <section className="mb-8">
            <p className="text-foreground mb-4">
              At Wiltshire Farm Foods, we take your privacy very seriously. This Data Protection Policy explains how we collect, use, store, and protect your personal information in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Our Commitment to Data Protection</h2>
            <p className="text-foreground mb-4">
              We are committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
            </p>
            <p className="text-foreground mb-4">
              We will keep your information safe and not sell it on to third parties. We may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">What We Collect</h2>
            <p className="text-foreground mb-4">
              We may collect the following information:
            </p>
            <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
              <li>Name and contact information including email address and phone number;</li>
              <li>Demographic information such as postcode, preferences and interests;</li>
              <li>Other information relevant to customer surveys and/or offers;</li>
              <li>Information required for order processing and delivery;</li>
              <li>Payment information (processed securely through our payment providers).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">What We Do With the Information We Gather</h2>
            <p className="text-foreground mb-4">
              We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
            </p>
            <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
              <li>Internal record keeping;</li>
              <li>We may use the information to improve our products and services;</li>
              <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided;</li>
              <li>From time to time, we may also use your information to contact you for market research purposes;</li>
              <li>We may contact you by email, phone, or mail;</li>
              <li>We may use the information to customise the website according to your interests.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">How We Protect Your Information</h2>
            <p className="text-foreground mb-4">
              We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
            </p>
            <p className="text-foreground mb-4">
              All data is stored on secure servers with encryption. We regularly review our security procedures to ensure that your data remains safe.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">How Long We Keep Your Data</h2>
            <p className="text-foreground mb-4">
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            <p className="text-foreground mb-4">
              To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Your Data Protection Rights</h2>
            <p className="text-foreground mb-4">
              Under data protection law, you have rights including:
            </p>
            <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
              <li><strong>Your right of access</strong> – You have the right to ask us for copies of your personal information.</li>
              <li><strong>Your right to rectification</strong> – You have the right to ask us to rectify information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</li>
              <li><strong>Your right to erasure</strong> – You have the right to ask us to erase your personal information in certain circumstances.</li>
              <li><strong>Your right to restriction of processing</strong> – You have the right to ask us to restrict the processing of your information in certain circumstances.</li>
              <li><strong>Your right to object to processing</strong> – You have the the right to object to the processing of your personal data in certain circumstances.</li>
              <li><strong>Your right to data portability</strong> – You have the right to ask that we transfer the information you gave us to another organisation, or to you, in certain circumstances.</li>
            </ul>
            <p className="text-foreground mb-4">
              You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-foreground mb-4">
              If you have any questions about this Data Protection Policy or how we handle your personal data, please contact us:
            </p>
            <p className="text-foreground mb-2">
              <strong>Post:</strong> apetito Limited Canal Road Trowbridge, Wiltshire BA14 8RJ
            </p>
            <p className="text-foreground mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:customer.relations@apetito.co.uk" className="text-primary underline hover:text-primary/80">
                customer.relations@apetito.co.uk
              </a>
            </p>
            <p className="text-foreground mb-2">
              <strong>Telephone:</strong> 01225 756093
            </p>
            <p className="text-foreground mb-4">
              Our Data Protection Officer can be contacted via email at{" "}
              <a href="mailto:dpo@apetito.co.uk" className="text-primary underline hover:text-primary/80">
                dpo@apetito.co.uk
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <AccessibilityButton />
    </div>
  );
};

export default DataProtectionPolicy;
