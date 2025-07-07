import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="p-6">
      <ContactForm />

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1676.511928051421!2d72.13312016211381!3d21.772055633640143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f51b5469acf97%3A0x300d258c24eb04af!2sShreeji%20CNG%20Retesting%20Center!5e1!3m2!1sen!2sin!4v1751898295158!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded"
        ></iframe>
      </div>
    </div>
  );
}
