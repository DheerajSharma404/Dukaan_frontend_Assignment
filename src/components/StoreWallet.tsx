const StoreWallet = () => {
  return (
    <>
      <div className=' mx-4 mt-4 bg-navy-blue-100 rounded-small'>
        <div className='px-3 py-[0.375rem]  flex gap-3 items-center justify-start '>
          <img
            src='/assets/icons/wallet.svg'
            alt='Store logo'
            className='h-[2.4375rem] w-[2.4375rem] object-cover rounded-small'
          />
          <div>
            <p className=' text-regular-13 text-white-50 opacity-80'>
              Available credits
            </p>
            <p className=' text-medium-16 text-white-50 '>222.10</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreWallet;
