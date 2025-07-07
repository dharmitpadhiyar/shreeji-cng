export default function ServiceCard({ service, onViewDetails }) {
  return (
    <div
      className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer"
      onClick={() => onViewDetails(service)}
    >
      <img src={service.image} alt={service.title} className="h-52 w-fit object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
}
