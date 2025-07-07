import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="p-6">
      <ContactForm />

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.063315890269!2d72.13010027473452!3d21.77036736189581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f50876578daed%3A0xbe5123fe5f2bc722!2sShreeji%20Service!5e1!3m2!1sen!2sin!4v1751698678818!5m2!1sen!2sin"
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
