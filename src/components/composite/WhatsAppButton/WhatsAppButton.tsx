import { WhatsAppIcon } from "@/components/ui/icons";
import { getWhatsAppUrl } from "@/lib/contact";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0.75rem_2rem_-0.5rem_rgba(0,0,0,0.45)] transition-transform duration-200 hover:scale-105 active:scale-95 sm:right-7 sm:bottom-7 sm:size-16"
    >
      <WhatsAppIcon className="size-7 sm:size-8" />
    </a>
  );
}
