import Dropdown from "./Dropdown";
import MetricsCard from "./MetricsCard";

import Search from "./Search";
import Table from "./Table";

const DashboardContent = () => {
  return (
    <div className=' m-8 mt-24'>
      <div className='mb-8 '>
        <div className='flex justify-between mb-6'>
          <p className='text-medium-20 text-black-50'>Overview</p>
          <Dropdown label={"Last Month"} icon={"arrowdown"} />
        </div>
        <MetricsCard />
      </div>
      <div>
        <p className='text-medium-20 text-black-50 mb-8'>
          Tansacton | This Month
        </p>
        <div className='p-3 bg-white-50 rounded-normal'>
          <div className='flex justify-between items-center mb-3'>
            {/* for the header */}
            <Search border={" border border-gray-125"} />
            <div className='flex justify-between items-center gap-3'>
              <Dropdown label={"Sort"} icon={"Sort"} />
              <button className='p-2 bg-white-50 border border-gray-125 rounded-small'>
                <img
                  src='/assets/icons/download.svg'
                  alt='filter icon'
                  className='h-[1.25rem] w-[1.25rem]'
                />
              </button>
            </div>
          </div>
          <div className=' '>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
