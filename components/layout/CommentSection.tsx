"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

interface Review {
  name: string;
  content: string;
  rating: number;
  location: string;     // "Boston, MA"
  profession: string;   // "Real Estate Agent"
  photoUrl?: string;
}

const reviews: Review[] = [
  {
    name: "Amanda R.",
    rating: 5,
    location: "Worcester, MA",
    profession: "Residential Client",
    content:
      "EverCare completely transformed our home. The attention to detail is outstanding, and the team is always punctual and professional. It’s a relief knowing we can truly depend on them.",
  },
  {
    name: "Jason M.",
    rating: 5,
    location: "Framingham, MA",
    profession: "Homeowner",
    content:
      "We’ve worked with other cleaning companies before, but EverCare truly stands out. Consistent, respectful, and incredibly thorough every visit. You can tell they take pride in their work.",
  },
  {
    name: "Michael T.",
    rating: 5,
    location: "Boston, MA",
    profession: "Office Manager",
    content:
      "Our office environment improved immediately after hiring EverCare. They maintain high sanitation standards and operate with true professionalism. I highly recommend them for any commercial property.",
  },
  {
    name: "Samantha L.",
    rating: 5,
    location: "Cambridge, MA",
    profession: "Retail Business Owner",
    content:
      "Reliable, organized, and detail-oriented. EverCare keeps our retail space spotless and welcoming for customers every single day.",
  },
];

const getColorFromName = (name: string) => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-yellow-500",
    "bg-teal-500",
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
};

const Stars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-muted-foreground/30"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.376 2.454a1 1 0 00-.364 1.118l1.287 3.965c.3.921-.755 1.688-1.54 1.118l-3.376-2.454a1 1 0 00-1.176 0l-3.376 2.454c-.784.57-1.838-.197-1.539-1.118l1.287-3.965a1 1 0 00-.364-1.118L2.075 9.392c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.965z" />
        </svg>
      ))}
    </div>
  );
};
const ReviewCard = ({ review }: { review: Review }) => {
  const initial = review.name.charAt(0).toUpperCase();
  const bgColor = getColorFromName(review.name);

  return (
    <div className="w-80 rounded-xl border border-border bg-card p-6 shadow-sm space-y-4 font-sans">
      
      {/* HEADER */}
      <div className="flex items-center gap-3">
        
        {/* Avatar */}
        {review.photoUrl ? (
          <Image
            src={review.photoUrl}
            alt={review.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        ) : (
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${bgColor}`}
          >
            {initial}
          </div>
        )}

        {/* Nome + estrelas */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-sm leading-snug">
            <span className="font-semibold text-foreground tracking-tight">
              {review.name}
            </span>
            <span className="italic text-muted-foreground">
              – {review.location}
            </span>
          </div>
          <Stars rating={review.rating} />
        </div>
      </div>

      {/* Comentário */}
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        "{review.content}"
      </p>

      <span className="text-xs text-muted-foreground/70 font-medium tracking-wide">
        {review.profession}
      </span>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background font-sans">
      <div className="max-w-6xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-foreground">
          Star Rated Cleaning & Care Services in Massachusetts
        </h2>

        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Don’t just take our word for it. See why homeowners and businesses across Massachusetts trust EverCare for reliable, fully insured, high-standard service.
        </p>
      </div>

      <div className="relative flex flex-col gap-6 overflow-hidden">
        {/* Linha 1 - NORMAL */}
        <Marquee
          reverse={false}
          pauseOnHover
          className="[--duration:35s]"
        >
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </Marquee>

        {/* Linha 2 - REVERSE */}
        <Marquee
          reverse={true}
          pauseOnHover
          className="[--duration:45s]"
        >
          {reviews.map((review, i) => (
            <ReviewCard key={`reverse-${i}`} review={review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialsSection;

