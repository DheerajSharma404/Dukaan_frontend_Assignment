import { metrics } from "../../constants";

const MetricsCard = () => {
  return (
    <div className='flex  gap-5 '>
      {metrics.map((item) => (
        <div
          className='p-5 bg-white-50 flex flex-1 rounded-normal shadow-md'
          key={item.id}
        >
          <div className='flex flex-col gap-4'>
            <p className='text-regular-16 text-gray-50'>{item.label}</p>
            <p className='text-medium-32 text-black-50'>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsCard;
