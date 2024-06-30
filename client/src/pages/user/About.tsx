export const About = () => {
  return (
    <div className="about-container flex">
      <div className="lg:basis-6/12 basis-11/12">
        <div className="text-4xl font-semibold mt-3 letter-1">Our Purpose</div>
        <div className="text-justify word-2 italic px-4">
          <div className="text-2xl text-center font-semibold mt-4 letter-1">
            Vision
          </div>
          "To be the leading third-party logistics company by providing quality
          service, setting the standard for excellence in customer service,
          sustainability and innovation”
          <div className="text-2xl text-center font-semibold mt-4 letter-1">
            Mision
          </div>
          “To store boxed goods safely, securely and delivering orders
          efficiently and timely to its customers with a commitment that every
          interaction will be driven by integrity and respect.”
        </div>

        <div className="text-4xl font-semibold mt-14 letter-1">Our Story</div>
        <div className="text-justify word-2 italic px-4">
          <div className="mt-4">
            <b>Say Lava Logistics</b> is a corporation type of business founded
            by Amen Say and Steven Lava in 2022 with the vision of helping
            clients get their products quickly, efficiently, and safely.
          </div>
          <div className="mt-4">
            Before the Say Lava Logistics Corporation started, it was first
            established by the previous company known as VGL. Unfortunately, the
            company underwent bankruptcy. Amen C. Say and Steven Lava conducted
            a corporate buyout of the VGL company. They then established the SLL
            Corporation.
          </div>
          <div className="mt-4">
            Say Lava Logistics Corporation is a logistics company that stores
            and warehouses goods. The company offers storage, delivery, and
            information management services to organizations that distribute
            fast-moving consumer goods. The company can deliver goods to Bohol,
            Central, Northern, and Southern parts of Cebu.
          </div>
        </div>

        <div className="text-4xl mt-12 mb-5">Address</div>
        <iframe
          className="mb-12"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.094345839498!2d123.93349424721734!3d10.334334563540455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999ce42172143%3A0xa942285e21752ab4!2sSay%20Lava%20Logistics%20Corp.!5e0!3m2!1sen!2sph!4v1719234764745!5m2!1sen!2sph"
          width="800"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Embed"
        ></iframe>
      </div>
    </div>
  );
};
