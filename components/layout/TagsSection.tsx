import { HeartPulse } from "lucide-react";

const tagRows = [
  ["Home Care", "Senior Assistance", "Companionship", "Personal Care", "Medication Reminders"],
  ["House Cleaning", "Deep Cleaning", "Move-In Cleaning", "Move-Out Cleaning", "Sanitization"],
  ["Post-Hospital Care", "Daily Living Support", "Mobility Assistance", "Family Support", "Wellness"],
  ["Residential Cleaning", "Commercial Cleaning", "Disinfection", "Eco-Friendly", "Safe Products"],
  ["Elderly Care", "Caregivers", "In-Home Support", "Health Monitoring", "Trusted Professionals"],
  ["Licensed & Insured", "Bonded Service", "Reliable Team", "Flexible Scheduling", "Affordable Care"],
  ["Massachusetts", "Local Business", "Family-Owned", "Client Focused", "Peace of Mind"],
];

const TagsSection = () => {
  return (
    <section className="bg-background text-foreground py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="flex flex-col">
          <HeartPulse className="w-10 h-10 md:w-14 md:h-14 mb-10 fill-foreground" strokeWidth={0} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Professional Home Care & Cleaning Services You Can Trust
          </h2>
        </div>

        {/* Right Column - Tags Grid */}
        <div className="flex flex-col gap-3 md:gap-4">
          {tagRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap gap-2 md:gap-3"
              style={{
                paddingLeft: `${(rowIndex % 3) * 16}px`,
              }}
            >
              {row.map((tag, tagIndex) => (
                <button
                  key={`${rowIndex}-${tagIndex}`}
                  className="px-4 py-2 md:px-6 md:py-2.5 rounded-full border border-[hsl(var(--tag-border))] bg-[hsl(var(--tag-bg))] text-foreground text-sm md:text-base font-medium whitespace-nowrap transition-all duration-300 ease-out hover:bg-[hsl(var(--tag-hover-bg))] hover:text-[hsl(var(--tag-hover-foreground))] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TagsSection;
