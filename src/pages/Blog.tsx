import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityButton from "@/components/AccessibilityButton";
import { Calendar, User } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Tips for Maintaining a Healthy Diet in Winter",
    excerpt: "As the temperature drops, it's important to keep your nutrition on track. Discover our top tips for staying healthy during the colder months...",
    author: "Nutrition Team",
    date: "15 January 2026",
    category: "Health & Nutrition",
  },
  {
    id: 2,
    title: "Understanding Texture Modified Diets",
    excerpt: "Learn about IDDSI levels and how our Softer Foods range can help those with swallowing difficulties enjoy nutritious, tasty meals...",
    author: "Care Team",
    date: "8 January 2026",
    category: "Softer Foods",
  },
  {
    id: 3,
    title: "Behind the Scenes: How Our Meals Are Made",
    excerpt: "Take a look inside our kitchen and discover the care and quality that goes into preparing every Wiltshire Farm Foods meal...",
    author: "Production Team",
    date: "2 January 2026",
    category: "About Our Food",
  },
  {
    id: 4,
    title: "Meet Our Delivery Drivers",
    excerpt: "Our delivery drivers are more than just drivers - they're a friendly face and important part of our customers' lives. Meet some of the team...",
    author: "HR Team",
    date: "20 December 2025",
    category: "Our People",
  },
  {
    id: 5,
    title: "Christmas Menu Highlights",
    excerpt: "Discover our festive range of Christmas meals, perfect for enjoying a traditional dinner without the hassle of cooking...",
    author: "Product Team",
    date: "10 December 2025",
    category: "Seasonal",
  },
  {
    id: 6,
    title: "Gluten-Free Options That Don't Compromise on Taste",
    excerpt: "Our gluten-free meals are proof that dietary requirements don't mean missing out on delicious, satisfying food...",
    author: "Nutrition Team",
    date: "5 December 2025",
    category: "Special Diets",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4 border-b-2 border-gold pb-4">
            WILTSHIRE FARM FOODS BLOG
          </h1>

          <p className="text-center text-foreground mb-8">
            Welcome to our blog - your source for the latest news, tips, and stories from Wiltshire Farm Foods.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-lg border border-gold overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <span className="text-6xl">📝</span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-secondary/20 text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-primary mb-3 hover:text-primary/80 cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="bg-secondary text-secondary-foreground font-bold px-6 py-3 rounded hover:bg-gold-dark transition-colors">
              Load More Posts
            </button>
          </div>

          <div className="mt-12 bg-card p-6 rounded-lg border border-gold">
            <h2 className="text-xl font-bold text-primary mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-foreground mb-4">
              Get the latest blog posts and special offers delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border-2 border-gold rounded outline-none focus:border-primary"
              />
              <button className="bg-secondary text-secondary-foreground font-bold px-6 py-3 rounded hover:bg-gold-dark transition-colors">
                Sign up
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              We will keep your information safe and not sell it on to third parties. Read our{" "}
              <a href="/data-protection-policy" className="underline">
                Data Protection Policy
              </a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <AccessibilityButton />
    </div>
  );
};

export default Blog;
