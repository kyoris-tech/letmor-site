export const WHATSAPP_NUMBER = "5511987654321";

export const WHATSAPP_DISPLAY = "(11) 98765-4321";

export function getWhatsAppUrl(
  message = "Olá! Vim pelo site da LetMor e gostaria de conversar sobre um projeto.",
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
