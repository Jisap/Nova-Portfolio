

const ServiceItem = ({ number, title, description, icon }) => {
  return (
    <div className="service-item w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row">
      <div className="flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2">
        <span className="text-2xl font-semibold">
          {number}
        </span>

        <div className="service-info">
          <h4 className="text-2xl font-semibold pb-0.5">{title}</h4>
          <p className="text-gray-100 text-lg lg:w-3xl">
            {description}
          </p>
        </div>
      </div>

      <div className="service-image w-full lg:w-1/2 flex lg:justify-end lg:items-end">
        <div className="border border-white/20 rounded-full w-[150px] h-[150px] p-5 flex items-center justify-center overflow-hidden">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain invert"
          />
        </div>
      </div>
    </div>
  );

};


export default ServiceItem;