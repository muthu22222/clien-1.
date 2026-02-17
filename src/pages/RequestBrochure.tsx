import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RequestBrochure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="font-serif text-4xl md:text-5xl text-center text-muted-foreground mb-2">
          Request a brochure
        </h1>
        <div className="h-0.5 bg-gold mb-8" />
        <p className="text-center text-foreground mb-8">
          We'd be happy to send you a free copy of our latest brochure. Simply fill in your details below and we'll pop one in the post.
        </p>

        <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Full name"
            className="w-full px-4 py-3 border-2 border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full px-4 py-3 border-2 border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
          />
          <input
            type="text"
            placeholder="Postcode"
            className="w-full px-4 py-3 border-2 border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-sm hover:bg-forest-dark transition-colors"
          >
            Request Brochure
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default RequestBrochure;
