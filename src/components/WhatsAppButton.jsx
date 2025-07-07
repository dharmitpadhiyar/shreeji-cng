export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9316096209" // <-- replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 right-4  text-white p-6 rounded-full shadow-lg "
    >
      <img src="/whatsapp-icon.jpeg" alt="WhatsApp" className="p-4 w-16 h-16" />
    </a>
  );
}
