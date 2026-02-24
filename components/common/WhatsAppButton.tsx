import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/553399373400";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-28 md:bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] md:h-16 md:w-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7 md:h-8 md:w-8"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.924 15.924 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.324-5.66-1.216-4.748-1.968-7.804-6.78-8.038-7.094-.226-.314-1.886-2.512-1.886-4.792s1.192-3.402 1.616-3.868c.39-.428 1.028-.642 1.64-.642.198 0 .376.01.536.018.47.02.706.048 1.016.788.39.926 1.338 3.266 1.454 3.502.118.236.236.556.076.87-.15.324-.282.468-.518.738-.236.27-.46.476-.696.768-.216.254-.46.526-.194.996.266.462 1.182 1.95 2.538 3.16 1.744 1.554 3.214 2.036 3.67 2.262.338.168.742.138 1.018-.158.35-.376.782-.998 1.222-1.612.312-.438.706-.494 1.082-.338.382.148 2.416 1.14 2.83 1.348.414.208.69.312.79.484.1.17.1.992-.29 2.092z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
