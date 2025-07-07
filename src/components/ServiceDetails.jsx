

export default function ServiceDetails({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <button onClick={onClose} className="text-red-500 float-right text-xl">X</button>
        <img src={service.image} alt={service.title} className="h-72 w-fit object-cover rounded mb-4" />
        <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
        <p className="text-gray-700 mb-2">{service.fullDescription}</p>
        <p className="text-green-600 font-semibold mb-4">Price: {service.price}</p>
        {service.gallery && service.gallery.length > 0 && (
          <div className="flex gap-2 overflow-x-auto">
            {service.gallery.map((img, index) => (
              <img key={index} src={img} alt={`Gallery ${index}`} className="h-64 w-64 object-cover rounded" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
