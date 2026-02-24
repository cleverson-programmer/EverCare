import { Marquee } from "@/components/ui/marquee";
import {
  ShoppingCart,
  Sparkles,
  Scissors,
  Dumbbell,
  Car,
  WashingMachine,
  Brain,
  Heart,
  UtensilsCrossed,
  Stethoscope,
  Pill,
  Bath,
  SprayCan,
  Home,
} from "lucide-react";

const services = [
  { label: "Grocery Shopping", icon: ShoppingCart, color: "bg-teal-500" },
  { label: "Personal Care", icon: Sparkles, color: "bg-amber-500" },
  { label: "Hair Care", icon: Scissors, color: "bg-blue-600" },
  { label: "Exercise", icon: Dumbbell, color: "bg-orange-500" },
  { label: "Transportation", icon: Car, color: "bg-yellow-500" },
  { label: "Laundry", icon: WashingMachine, color: "bg-teal-500" },
  { label: "Cognitive Stimulation", icon: Brain, color: "bg-blue-600" },
  { label: "Companionship", icon: Heart, color: "bg-orange-500" },
  { label: "Meals Prep", icon: UtensilsCrossed, color: "bg-teal-500" },
  { label: "Medical Transit", icon: Stethoscope, color: "bg-amber-500" },
  { label: "Medication Reminders", icon: Pill, color: "bg-blue-600" },
  { label: "Bathing", icon: Bath, color: "bg-teal-500" },
  { label: "Deep Cleaning House", icon: SprayCan, color: "bg-orange-500" },
  { label: "Light Housekeeping", icon: Home, color: "bg-yellow-500" },
];

const firstRow = services.slice(0, 7);
const secondRow = services.slice(7);

function ServiceTag({ label, icon: Icon, color }: { label: string; icon: React.ElementType; color: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-sm">
      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${color} text-white`}>
        <Icon size={20} />
      </div>
      <span className="whitespace-nowrap text-sm font-semibold text-slate-800">{label}</span>
    </div>
  );
}

export default function ServicesMarquee() {
  return (
    <section className="w-full overflow-hidden bg-background">
      <div className="flex flex-col gap-4">
        <Marquee reverse={false} pauseOnHover className="[--duration:40s]">
          {firstRow.map((s) => (
            <ServiceTag key={s.label} {...s} />
          ))}
        </Marquee>
        <Marquee reverse={true} pauseOnHover className="[--duration:40s]">
          {secondRow.map((s) => (
            <ServiceTag key={s.label} {...s} />
          ))}
        </Marquee>
        <Marquee reverse={false} pauseOnHover className="[--duration:40s]">
          {secondRow.map((s) => (
            <ServiceTag key={s.label} {...s} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
