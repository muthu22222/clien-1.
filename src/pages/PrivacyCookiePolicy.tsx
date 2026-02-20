import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityButton from "@/components/AccessibilityButton";

const PrivacyCookiePolicy = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 border-b-2 border-gold pb-4">
            PRIVACY & COOKIE POLICY
          </h1>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">1. Who We Are</h2>
            <p className="text-foreground mb-4">
              We and each of our Franchise Partners are data controllers, because we collect personal data about you and determine how and why it will be used.
            </p>
            <p className="text-foreground mb-4">
              Apetito Limited is the data controller for the purposes of the General Data Protection Regulation (GDPR) and is registered with the Information Commissioner&apos;s Office.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">2. What Information We Collect</h2>
            <p className="text-foreground mb-4">
              We may collect, store and use the following kinds of personal information:
            </p>
            <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
              <li>Information about your computer and about your visits to and use of this website;</li>
              <li>Information relating to any transactions carried out between you and us on or in relation to this website;</li>
              <li>Information that you provide to us for the purpose of registering with us;</li>
              <li>Information that you provide to us for the purpose of subscribing to our website services, email notifications and/or newsletters;</li>
              <li>Any other information that you choose to send to us.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
            <p className="text-foreground mb-4">
              Personal information submitted to us via this website will be used for the purposes specified in this privacy policy or in relevant parts of the website.
            </p>
            <p className="text-foreground mb-4">
              We may use your personal information to:
            </p>
            <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
              <li>Administer the website;</li>
              <li>Improve your browsing experience by personalising the website;</li>
              <li>Enable your use of the services available on the website;</li>
              <li>Send you goods purchased via the website, and supply to you services purchased via the website;</li>
              <li>Send statements and invoices to you, and collect payments from you;</li>
              <li>Send you general commercial communications;</li>
              <li>Send you email notifications which you have specifically requested;</li>
              <li>Send to you our newsletter and other marketing communications relating to our business.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">4. Cookies</h2>
            <p className="text-foreground mb-4">
              We use cookies on this website. A cookie is a text file sent by a web server to a web browser, and stored by the browser. The text file is then sent back to the server each time the browser requests a page from the server.
            </p>
            <p className="text-foreground mb-4">
              For more information about how we use cookies, please see our{" "}
              <a href="/cookie-policy" className="text-primary underline hover:text-primary/80">
                Cookie Policy
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">5. Data Security</h2>
            <p className="text-foreground mb-4">
              We will take reasonable technical and organisational precautions to prevent the loss, misuse or alteration of your personal information.
            </p>
            <p className="text-foreground mb-4">
              We will store all the personal information you provide on our secure servers. All electronic transactions you make to or receive from us will be encrypted using SSL technology.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">6. Your Rights</h2>
            <p className="text-foreground mb-4">
              You may instruct us to provide you with any personal information we hold about you; provision of such information will be subject to the supply of appropriate evidence of your identity.
            </p>
            <p className="text-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
              <li>Request access to your personal data;</li>
              <li>Request correction of your personal data;</li>
              <li>Request erasure of your personal data;</li>
              <li>Object to processing of your personal data;</li>
              <li>Request restriction of processing your personal data;</li>
              <li>Request transfer of your personal data;</li>
              <li>Withdraw consent.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">7. Third Party Websites</h2>
            <p className="text-foreground mb-4">
              The website contains links to other websites. We are not responsible for the privacy policies or practices of third party websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">8. Changes to This Policy</h2>
            <p className="text-foreground mb-4">
              We may update this privacy policy from time-to-time by posting a new version on our website. You should check this page occasionally to ensure you are happy with any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">9. Who Can You Ask for More Information?</h2>
            <p className="text-foreground mb-4">
              If you have any questions or concerns about how we handle your personal data, you can contact us using any one (or more) of the following:
            </p>
            <p className="text-foreground mb-2">
              <strong>Post:</strong> apetito Limited Canal Road Trowbridge, Wiltshire BA14 8RJ
            </p>
            <p className="text-foreground mb-2">
              <strong>Email address:</strong>{" "}
              <a href="mailto:customer.relations@apetito.co.uk" className="text-primary underline hover:text-primary/80">
                customer.relations@apetito.co.uk
              </a>
            </p>
            <p className="text-foreground mb-2">
              <strong>Telephone number:</strong> 01225 756093
            </p>
            <p className="text-foreground mb-4">
              Alternatively, you can contact us through the{" "}
              <a href="/contact" className="text-primary underline hover:text-primary/80">
                &quot;Contact Us&quot;
              </a>{" "}
              section of the Website.
            </p>
            <p className="text-foreground mb-4">
              Our DPO can be contacted via email at{" "}
              <a href="mailto:dpo@apetito.co.uk" className="text-primary underline hover:text-primary/80">
                dpo@apetito.co.uk
              </a>
            </p>
            <p className="text-foreground mb-4">
              If you are unsatisfied with our response to any data protection issues you raise with us or our DPO, you have the right to make a complaint to the Information Commissioner&apos;s Office (ICO). The ICO is the authority in the UK which is tasked with the protection of personal data and privacy.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <AccessibilityButton />
    </div>
  );
};

export default PrivacyCookiePolicy;
