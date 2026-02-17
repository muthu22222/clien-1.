import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="font-serif text-4xl md:text-5xl text-center text-muted-foreground mb-2">
          Contact Us
        </h1>
        <div className="h-0.5 bg-gold mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-foreground">
            <h2 className="font-bold text-primary text-xl">Get in touch</h2>
            <p><strong>Phone:</strong> 0800 077 3100</p>
            <p><strong>Email:</strong> info@wiltshirefarmfoods.com</p>
            <p><strong>Hours:</strong> Mon–Fri 8am–6pm, Sat 9am–1pm</p>
            <p>We'd love to hear from you. Whether you have a question, feedback, or just want to say hello!</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border-2 border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground outline-none focus:border-primary resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-sm hover:bg-forest-dark transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
