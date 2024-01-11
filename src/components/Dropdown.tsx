import React from "react";

interface DropdownProps {
  label: string;
  icon: string;
}

const Dropdown = ({ label, icon }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='relative inline-block text-left'>
      <div
        className='border border-gray-125 flex gap-[7px] px-[.875rem] py-[0.375rem] bg-white-50 rounded-small'
        onClick={() => setIsOpen(!isOpen)}
      >
        <button type='button' className='text-regular-16 text-gray-50'>
          {label}
        </button>
        <img src={`/assets/icons/${icon}.svg`} alt='chevron down' />
      </div>

      {isOpen && (
        <div className='absolute right-0  mt-2 min-w-full rounded-small shadow-lg bg-white-50 border border-gray-125 whitespace-nowrap '>
          <div className='py-1' role='menu'>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-150 hover:text-gray-900 m-2 rounded-small'
            >
              Option 1
            </a>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-150 hover:text-gray-900 mx-2 mb-2 rounded-small'
            >
              Option 2
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
