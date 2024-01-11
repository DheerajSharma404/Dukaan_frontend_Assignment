const Store = () => {
  return (
    <>
      <div className=' mx-4 h-[2.6375rem] flex  items-center justify-between mb-6'>
        <div className='flex gap-3 items-center justify-start'>
          <img
            src='/assets/images/nishyan-store-logo.jpg'
            alt='Store logo'
            className='h-[2.4375rem] w-[2.4375rem] object-cover rounded-small'
          />
          <div>
            <p className=' text-medium-15 text-white-50'>Nishyan</p>
            <a
              href='#'
              className=' text-regular-13 text-white-50 opacity-50 underline'
            >
              Visit store
            </a>
          </div>
        </div>
        <div className='h-full flex items-center'>
          <img
            src='/assets/icons/ChevronDown.svg'
            alt='chevron down
          '
          />
        </div>
      </div>
    </>
  );
};

export default Store;
