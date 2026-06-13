

const ServiceItem = ({ number, title, description, icon }) => {
  return (
    <div className="service-item w-full flex justify-between items-center border-t border-white/20 border-b py-5 gap-4 flex-row">

      <div className="flex items-start gap-4 flex-1 min-w-0 text-white">
        <span className="text-base font-semibold text-white/45 whitespace-nowrap pt-0.5 min-w-[28px]">
          {number}
        </span>

        <div className="service-info min-w-0">
          <h4 className="text-xl font-semibold pb-1">{title}</h4>
          <p className="text-gray-400 text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="border border-white/20 rounded-full w-16 h-16 min-w-[64px] p-3 flex items-center justify-center overflow-hidden">
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-contain invert"
        />
      </div>

    </div>
  );
};

export default ServiceItem;