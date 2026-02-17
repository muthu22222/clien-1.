import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-md mx-auto px-4 py-10">
        <h1 className="font-serif text-4xl text-center text-muted-foreground mb-2">Sign In</h1>
        <div className="h-0.5 bg-gold mb-8" />

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border-2 border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border-2 border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-sm hover:bg-forest-dark transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-foreground">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary font-bold underline">Register</Link>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
