import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityButton from "@/components/AccessibilityButton";
import { Star, Quote, User } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  review: string;
  plan: string;
  verified: boolean;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Margaret Thompson",
    rating: 5,
    date: "2 weeks ago",
    review: "I've been using the diabetic-friendly meals for 3 months now and my blood sugar levels have never been more stable. The food is delicious and I never feel like I'm missing out. The convenience is perfect for someone my age.",
    plan: "Diabetic Friendly",
    verified: true
  },
  {
    id: 2,
    name: "John Davies",
    rating: 5,
    date: "1 month ago",
    review: "The weight management plan has been a game-changer. I've lost 2 stone in 4 months and the meals are so satisfying. No more counting calories or worrying about portions. Everything is perfectly balanced.",
    plan: "Weight Management",
    verified: true
  },
  {
    id: 3,
    name: "Elizabeth Roberts",
    rating: 4,
    date: "3 weeks ago",
    review: "My husband and I both use the heart-healthy plan following his doctor's recommendation. The meals are tasty and we've both seen improvements in our cholesterol levels. Only minor issue is sometimes delivery can be delayed.",
    plan: "Heart Healthy",
    verified: true
  },
  {
    id: 4,
    name: "Arthur Mitchell",
    rating: 5,
    date: "2 months ago",
    review: "As a vegetarian, I was worried about finding good meal delivery options. The vegetarian plan exceeded my expectations - so much variety and everything is nutritionally complete. The lentil shepherd's pie is my favorite!",
    plan: "Vegetarian",
    verified: true
  },
  {
    id: 5,
    name: "Dorothy Wilson",
    rating: 5,
    date: "1 week ago",
    review: "The softer foods menu has been perfect for my swallowing difficulties. I was worried I'd have to eat bland, pureed food, but these meals have real flavor and proper nutrition. Thank you for making this available.",
    plan: "Softer Foods",
    verified: true
  },
  {
    id: 6,
    name: "Robert Harris",
    rating: 4,
    date: "3 weeks ago",
    review: "Good variety of meals and the quality is consistently high. The high-protein plan helps me maintain my muscle mass as I get older. Customer service is excellent when I've had questions.",
    plan: "High Protein",
    verified: true
  },
  {
    id: 7,
    name: "Mary Clarke",
    rating: 5,
    date: "1 month ago",
    review: "My doctor recommended I reduce my sodium intake, and the low-sodium plan has been perfect. The meals are flavorful without being salty, and my blood pressure has improved significantly.",
    plan: "Low Sodium",
    verified: true
  },
  {
    id: 8,
    name: "James Peterson",
    rating: 5,
    date: "2 weeks ago",
    review: "My mother uses this service and it's been a lifesaver for our family. She gets proper nutrition without the stress of cooking. The delivery drivers are always friendly and helpful.",
    plan: "Various Plans",
    verified: true
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const Reviews = () => {
  const averageRating = REVIEWS.reduce((sum, review) => sum + review.rating, 0) / REVIEWS.length;
  const fiveStarReviews = REVIEWS.filter(review => review.rating === 5).length;
  const verifiedReviews = REVIEWS.filter(review => review.verified).length;

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 border-b-2 border-gold pb-4">
            CUSTOMER REVIEWS
          </h1>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-gold text-center">
              <div className="flex justify-center mb-2">
                <StarRating rating={Math.round(averageRating)} />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">
                {averageRating.toFixed(1)}
              </div>
              <div className="text-sm text-foreground">Average Rating</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-gold text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                {REVIEWS.length}
              </div>
              <div className="text-sm text-foreground">Total Reviews</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-gold text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                {verifiedReviews}
              </div>
              <div className="text-sm text-foreground">Verified Reviews</div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-card p-6 rounded-lg border border-gold">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary p-2 rounded-full">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{review.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <StarRating rating={review.rating} />
                        <span>•</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                  {review.verified && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>

                <div className="mb-3">
                  <span className="bg-secondary/20 text-secondary-foreground text-xs px-2 py-1 rounded-full">
                    {review.plan}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-gold/20 absolute -top-2 -left-2" />
                  <p className="text-foreground italic pl-6">{review.review}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-card p-6 rounded-lg border border-gold text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Share Your Experience</h2>
            <p className="text-foreground mb-6">
              Have you tried our meal service? We'd love to hear your feedback and help others make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-secondary text-secondary-foreground font-bold px-6 py-3 rounded hover:bg-gold-dark transition-colors">
                Leave a Review
              </a>
              <a href="/request-brochure" className="bg-card border-2 border-gold text-foreground font-bold px-6 py-3 rounded hover:bg-gold/10 transition-colors">
                Try Our Service
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <AccessibilityButton />
    </div>
  );
};

export default Reviews;
