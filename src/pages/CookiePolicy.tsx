import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 border-b-2 border-gold pb-4">
            OUR COOKIE POLICY
          </h1>

          <section className="mb-8">
            <p className="text-foreground mb-4">
              Cookies can&apos;t harm your computer. We don&apos;t store personally identifiable information such as credit card details in cookies we create, but we do use encrypted information gathered from them to help improve your experience of the site. For example, they help us to identify and resolve errors, or to determine relevant related products to show you when you&apos;re browsing.
            </p>
            <p className="text-foreground mb-4">
              To make full use of the online shopping and personalised features on our Website, your computer, tablet or mobile phone will need to accept cookies, as we can only provide you with certain personalised features of this Website by using them.
            </p>
            <p className="text-foreground mb-4">
              If you&apos;d prefer to restrict, block or delete cookies from our Website, or any other Website, you can use your browser to do this. Each browser is different, so check the &apos;Help&apos; menu of your particular browser (or your mobile phone&apos;s handset manual) to learn how to change your cookie preferences.
            </p>
            <p className="text-foreground mb-4">
              You can find more information about cookies and how to restrict, block and delete them at{" "}
              <a href="http://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                www.aboutcookies.org
              </a>{" "}
              (opens in a new window - please note that we&apos;re not responsible for the content of external Websites).
            </p>
          </section>

          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6 border-b-2 border-gold pb-4">
            WHICH COOKIES DO WE USE?
          </h2>
          <p className="text-foreground mb-6">
            Here&apos;s a list of the main cookies we use, and what we use them for.
          </p>

          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-4 border-b-2 border-gold pb-2">
              SESSION COOKIES?
            </h3>
            <p className="text-foreground mb-4">
              We use a session cookie to remember such things as your log-in, what you&apos;ve put in the shopping basket and for some analytics. These are necessary to the working of the Website. If these are disabled, then various functions on the Website will not work.
            </p>
            <p className="text-foreground mb-4">
              More information on session cookies and what they are used for can be found at:{" "}
              <a href="http://www.allaboutcookies.org/cookies/session-cookies-used-for.html" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                www.allaboutcookies.org/cookies/session-cookies-used-for.html
              </a>{" "}
              (opens in a new window - please note that we&apos;re not responsible for the content of external Websites).
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-4 border-b-2 border-gold pb-2">
              PERSISTENT/PERMANENT COOKIES?
            </h3>
            <p className="text-foreground mb-4">
              We use a persistent cookie to remember your preferences on our Website and within analytics to understand how the site is being used in order to improve the user experience.
            </p>
            <p className="text-foreground mb-4">
              Analytics cookies on our Website are placed by Google Analytics and are required for the Analytics to function. Analytics data is anonymous.
            </p>
            <p className="text-foreground mb-4">
              You can find out more about Google&apos;s position on privacy at:{" "}
              <a href="http://www.google.com/privacypolicy.html" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                www.google.com/privacypolicy.html
              </a>{" "}
              (opens in a new window - please note that we&apos;re not responsible for the content of external Websites).
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-4 border-b-2 border-gold pb-2">
              THIRD-PARTY COOKIES
            </h3>
            <p className="text-foreground mb-4">
              We do have relationships with carefully-selected and monitored suppliers who may also set cookies during your visit to be used for marketing purposes - in other words to show you different products and services based on what you appear to be interested in. If you&apos;d like to opt out, please go to the Network Advertising Initiative Website{" "}
              <a href="http://www.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                www.networkadvertising.org
              </a>{" "}
              (opens in a new window - please note that we&apos;re not responsible for the content of external Websites).
            </p>
            <p className="text-foreground mb-4">
              When you visit our Website you may notice some cookies that are not related to our Website. When you visit a page that contains embedded content, for example from YouTube, you may be sent cookies from these Websites. We don&apos;t control the setting of these cookies, so we suggest you check the third-party Websites for more information about their cookies and how to manage them.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-4 border-b-2 border-gold pb-2">
              CONTACT
            </h3>
            <p className="text-foreground mb-4">
              Questions, comments and requests regarding this privacy policy are welcomed and should be addressed via the{" "}
              <a href="/contact" className="text-primary underline hover:text-primary/80">
                contact us
              </a>{" "}
              page on our Website.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
