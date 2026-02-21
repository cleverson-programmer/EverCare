import { ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-background text-foreground py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Column */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <span className="text-sm text-muted-foreground tracking-wide">About Us</span>
              <span className="block w-12 h-px bg-muted-foreground" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Complete<br />
              Care for Your<br />
              Loved Ones &<br />
              Your Home.
            </h2>
          </div>
          <div className="mt-10 lg:mt-0">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              Explore Our Services
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-6">
            Caring for people, protecting homes, and restoring peace of mind.
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-10 max-w-lg">
            A&L Total Care Solutions was founded by the Lopes & Almeida family with one clear mission: 
            to provide a complete 360° care experience. We combine professional caregiving with 
            health-focused environmental cleaning to ensure your loved ones live in a safe, sanitized, 
            and serene environment. Because true care goes beyond assistance — it protects the home, 
            supports recovery, and brings stability when families need it most.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-y-8 gap-x-6">
            <div>
              <span className="text-5xl md:text-6xl font-bold">360°</span>
              <p className="text-xs text-muted-foreground mt-1 leading-tight">
                Complete Care<br />Approach
              </p>
            </div>
            <div>
              <span className="text-5xl md:text-6xl font-bold">100%</span>
              <p className="text-xs text-muted-foreground mt-1 leading-tight">
                Fully Insured<br />& Bonded
              </p>
            </div>
            <div>
              <span className="text-5xl md:text-6xl font-bold">Certified</span>
              <p className="text-xs text-muted-foreground mt-1 leading-tight">
                Professional<br />Caregivers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
