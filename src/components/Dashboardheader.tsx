import Search from "./Search";

const Dashboardheader = () => {
  return (
    <div className=' fixed w-custom bg-white-50 flex flex-1 justify-between px-8 py-3  border-b border-gray-125 '>
      <div className='flex flex-1  gap-4 items-center'>
        <p className='text-regular-15 text-black-50'>Payments</p>
        <div className='flex gap-[0.375rem] items-center'>
          <img
            src='/assets/icons/Help.svg'
            alt='help logo'
            className='h-[14px] w-[14px]'
          />
          <p className='text-regular-12 text-gray-50'>How it works</p>
        </div>
      </div>
      <div>
        <Search bg={"bg-gray-150"} />
      </div>
      <div className='flex flex-1 justify-end gap-3 '>
        <img src='/assets/icons/Menu.svg' alt='menu icon' className='' />
        <img src='/assets/icons/moreOption.svg' alt='more option icon' />
      </div>
    </div>
  );
};

export default Dashboardheader;
