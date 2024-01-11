import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const renderPageButtons = () => {
    const buttons = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            className={`inline-block px-3 rounded-small ${
              currentPage === i && "active"
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // Display ellipsis for more pages in between
      const showEllipsisStart = currentPage > 2;
      const showEllipsisEnd = currentPage < totalPages - 1;

      buttons.push(
        <button
          key={1}
          className={`inline-block px-3 rounded-small ${
            currentPage === 1 && "active"
          }`}
          onClick={() => onPageChange(1)}
        >
          1
        </button>
      );

      if (showEllipsisStart) {
        buttons.push(
          <span key='ellipsis-start' className=' px-2 rounded-small'>
            ...
          </span>
        );
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(
          <button
            key={i}
            className={`inline-block  px-3 rounded-small ${
              currentPage === i && "active"
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }

      if (showEllipsisEnd) {
        buttons.push(
          <span key='ellipsis-end' className=' px-2 rounded-small'>
            ...
          </span>
        );
      }

      buttons.push(
        <button
          key={totalPages}
          className={` inline-block px-3 rounded-small ${
            currentPage === totalPages && "active"
          }`}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className=' flex justify-center'>
      <button
        className=' px-2 py-1 bg-white-50 border border-gray-125 rounded-small mr-6 flex gap-[6px] items-center'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src='/assets/icons/Chevronleft.svg' alt='previous button logp' />
        Previous
      </button>
      {renderPageButtons()}
      <button
        className='px-2 py-1 bg-white-50 border border-gray-125 rounded-small ml-6 flex items-center gap-[6px]'
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <img
          src='/assets/icons/Chevronright.svg'
          alt='next button logo'
          className=' '
        />
      </button>
    </div>
  );
};

export default Pagination;
