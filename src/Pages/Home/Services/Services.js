import useServices from "../../../hooks/useServices";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const { services } = useServices();
  return (
    <div className="px-2 md:container mx-auto pb-12">
      {/* Services Section */}
      <h4 className="text-2xl mb-10">Our Services</h4>
      <h2 className="text-4xl md:text-6xl">What services</h2>
      <h2 className="text-4xl md:text-6xl font-bold text-pink-600 mt-4">
        Mediplus Offer?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 mt-8">
        {/* Single Service */}
        {services.map((service) => (
          <SingleService key={service.id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
