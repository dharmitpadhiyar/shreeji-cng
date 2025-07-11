export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9376763635" // <-- replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 right-4 p-6 "
    >
      <img src="/whatsapp-icon.jpeg" alt="WhatsApp" className="p-4 w-16 h-16" />
    </a>
  );
}
