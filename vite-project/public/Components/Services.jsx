import services from "../data/services";

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <span>{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
