import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does the delivery service work?",
    answer: "Our local delivery drivers deliver your meals directly to your door in temperature-controlled delivery vans. You can choose a delivery day that suits you, and we'll arrive within a pre-agreed time slot. The driver will bring your meals into your home and pack them away in your freezer if you wish."
  },
  {
    question: "What areas do you deliver to?",
    answer: "We deliver across most of mainland UK. To check if we deliver to your area, simply enter your postcode on our website or give us a call on 01225 756093."
  },
  {
    question: "How do I store the meals?",
    answer: "All our meals are delivered frozen and should be stored in your freezer at -18°C or below. They can be kept in the freezer for up to 12 months. Once defrosted, please consume within 24 hours and do not refreeze."
  },
  {
    question: "How do I cook the meals?",
    answer: "Most of our meals can be cooked directly from frozen in a microwave or conventional oven. Each meal comes with clear cooking instructions on the packaging. Cooking times vary depending on the meal and your appliance."
  },
  {
    question: "Do you cater for special diets?",
    answer: "Yes, we offer a wide range of options including gluten-free, dairy-free, low sugar, low salt, vegetarian, and vegan meals. We also have our Softer Foods range for those with swallowing difficulties."
  },
  {
    question: "What is the minimum order?",
    answer: "We have a minimum order value that varies by area. Please contact us or check during the checkout process for the minimum order value in your area."
  },
  {
    question: "How do I pay for my meals?",
    answer: "You can pay online using a debit or credit card. We also accept payment by cheque or cash on delivery in some areas. For regular customers, we can set up a payment account."
  },
  {
    question: "What if I'm not home when you deliver?",
    answer: "If you won't be home, you can arrange for a neighbour to accept the delivery, or we can leave the delivery in a secure, cool place if you provide instructions. Please let us know in advance if you won't be available."
  },
  {
    question: "Can I change my order after placing it?",
    answer: "Yes, you can modify or cancel your order up to 48 hours before your scheduled delivery. Please contact our customer service team on 01225 756093 or email customer.relations@apetito.co.uk."
  },
  {
    question: "Do I need to sign a contract?",
    answer: "No, there are no contracts or subscription commitments. You can order as often or as little as you like. We believe our quality speaks for itself."
  },
  {
    question: "What if I have a complaint?",
    answer: "We take all complaints seriously. If you're not satisfied with any aspect of our service or products, please contact our customer service team on 01225 756093 or email customer.relations@apetito.co.uk and we'll work to resolve the issue."
  },
  {
    question: "How do I create an account?",
    answer: "You can create an account by clicking the 'Sign In' link at the top of the page and selecting 'Register'. You'll need to provide some basic details including your name, address, and contact information."
  }
];

const FAQItemComponent = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gold/30 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:bg-gold/5 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-foreground pr-4">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-foreground">
          {item.answer}
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4 border-b-2 border-gold pb-4">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-center text-foreground mb-8">
            Find answers to our most commonly asked questions below. If you can&apos;t find what you&apos;re looking for, please{" "}
            <a href="/contact" className="text-primary underline hover:text-primary/80">
              contact us
            </a>.
          </p>

          <div className="bg-card rounded-lg p-6 border border-gold">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItemComponent key={index} item={item} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-foreground mb-4">
              Still have questions?
            </p>
            <a
              href="/contact"
              className="bg-secondary text-secondary-foreground font-bold px-6 py-3 rounded hover:bg-gold-dark transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
