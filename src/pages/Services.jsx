import { useState } from 'react'
import ServiceCard from '../components/ServiceCard'
import ServiceDetails from '../components/ServiceDetails'



const servicesList = [
  {
    id: 1,
    title: 'CNG Cylinder Testing',
    description: 'High quality CNG testing service.',
    image: '/cng-service.png', // your provided image
    fullDescription: 'Detailed CNG testing process with certification.',
    gallery: ['/cng2-service.png', '/cng3-service.jpg', '/cng4-service.png']
  },
  {
    id: 2,
    title: 'PUC Service',
    description: 'Pollution Under Control Service.',
    image: '/puc-service.jpg', // another image
    fullDescription: 'PUC certification with quick processing.',
    gallery: ['/puc-service2.jpg', '/puc-service3.jpg', '/puc-service4.jpg']
  },
  {
    id: 3,
    title: 'Wheel Alignment',
    description: 'Precise alignment service.',
    image: '/alignment-service.jpg', // another image
    fullDescription: 'Ensure smooth driving with precision wheel alignment.',
    gallery: ['/alignment-service2.jpg', '/alignment-service3.jpg', '/alignment-service4.jpg']
  }
];


export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesList.map(service => (
          <ServiceCard key={service.id} service={service} onViewDetails={setSelectedService} />
        ))}
      </div>

      {selectedService && (
        <ServiceDetails service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </div>
  )
}