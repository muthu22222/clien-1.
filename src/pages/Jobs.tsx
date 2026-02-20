import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Briefcase, Clock, PoundSterling, Heart, Users } from "lucide-react";

const Jobs = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 border-b-2 border-gold pb-4">
            CAREERS WITH WILTSHIRE FARM FOODS
          </h1>

          <section className="mb-8">
            <p className="text-foreground mb-4 text-lg">
              Join our friendly team and help deliver nutritious, delicious meals to customers across the UK. We&apos;re always looking for dedicated people who share our passion for quality and customer service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border border-gold flex items-start gap-3">
                <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Make a Difference</h3>
                  <p className="text-foreground text-sm">Help elderly and vulnerable people maintain their independence with nutritious meals.</p>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-gold flex items-start gap-3">
                <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Friendly Team</h3>
                  <p className="text-foreground text-sm">Join a supportive, welcoming team that values every member.</p>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-gold flex items-start gap-3">
                <PoundSterling className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Competitive Pay</h3>
                  <p className="text-foreground text-sm">We offer competitive salaries and benefits packages.</p>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-gold flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Flexible Hours</h3>
                  <p className="text-foreground text-sm">Various shift patterns to suit your lifestyle and commitments.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Current Vacancies</h2>
            
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg border border-gold">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-primary text-lg mb-2">Delivery Driver</h3>
                    <p className="text-foreground mb-2">Various locations nationwide</p>
                    <p className="text-foreground text-sm mb-3">
                      We&apos;re looking for friendly, reliable delivery drivers to join our team. You&apos;ll be responsible for delivering frozen meals to customers&apos; homes and providing excellent customer service.
                    </p>
                    <ul className="list-disc list-inside text-foreground text-sm mb-3 space-y-1">
                      <li>Full UK driving licence required</li>
                      <li>Local area knowledge beneficial</li>
                      <li>Good customer service skills essential</li>
                    </ul>
                    <button className="bg-secondary text-secondary-foreground font-bold px-4 py-2 rounded hover:bg-gold-dark transition-colors text-sm">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-gold">
                <div className="flex items-start gap-4">
                  <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-primary text-lg mb-2">Customer Service Advisor</h3>
                    <p className="text-foreground mb-2">Trowbridge, Wiltshire</p>
                    <p className="text-foreground text-sm mb-3">
                      Join our customer service team helping customers with orders, enquiries, and providing product information.
                    </p>
                    <ul className="list-disc list-inside text-foreground text-sm mb-3 space-y-1">
                      <li>Excellent telephone manner required</li>
                      <li>Computer literacy essential</li>
                      <li>Previous customer service experience preferred</li>
                    </ul>
                    <button className="bg-secondary text-secondary-foreground font-bold px-4 py-2 rounded hover:bg-gold-dark transition-colors text-sm">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">How to Apply</h2>
            <p className="text-foreground mb-4">
              To apply for any of our current vacancies, please send your CV and a covering letter to:
            </p>
            <p className="text-foreground mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:careers@apetito.co.uk" className="text-primary underline hover:text-primary/80">
                careers@apetito.co.uk
              </a>
            </p>
            <p className="text-foreground mb-4">
              <strong>Post:</strong> HR Department, apetito Limited, Canal Road, Trowbridge, Wiltshire BA14 8RJ
            </p>
            <p className="text-foreground text-sm">
              Please specify which position you are applying for in your covering letter. If you don&apos;t see a suitable vacancy but would like to be considered for future opportunities, please send us a speculative application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Apprenticeships and Work Experience</h2>
            <p className="text-foreground mb-4">
              We also offer apprenticeship programmes and work experience placements in various departments. These are great opportunities to gain valuable skills and experience in the food industry.
            </p>
            <p className="text-foreground">
              For more information about apprenticeships or work experience, please email{" "}
              <a href="mailto:careers@apetito.co.uk" className="text-primary underline hover:text-primary/80">
                careers@apetito.co.uk
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Questions?</h2>
            <p className="text-foreground">
              If you have any questions about working with us, please{" "}
              <a href="/contact" className="text-primary underline hover:text-primary/80">
                contact our HR team
              </a>{" "}
              or call us on <strong>01225 756093</strong>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
