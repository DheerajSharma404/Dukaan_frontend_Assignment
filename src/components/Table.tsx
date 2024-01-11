import { useState } from "react";
import { transactions } from "../../constants/";
import { formatDate } from "../../utils/indext";
import Pagination from "./Pagination";
const Table = () => {
  const [currentPage, setCurrentPage] = useState(10);
  const totalPages = 50; // Replace with the actual total number of pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <table className='table-auto w-full mb-6'>
        <thead>
          <tr>
            <th className=' w-1/4  text-left text-regular-14 text-gray-50 font-normal whitespace-nowrap  m-0 p-0'>
              <div className='bg-gray-150 px-3 py-[10px] rounded-tl-small rounded-bl-small '>
                Order ID{" "}
              </div>
            </th>
            <th className='w-1/4 text-left text-regular-14 font-normal whitespace-nowrap m-0 p-0 '>
              <div className='py-[10px] bg-gray-150'>Order Date</div>
            </th>
            <th className='w-1/4 text-right text-regular-14 font-normal whitespace-nowrap  m-0 p-0'>
              <div className='bg-gray-150 py-[10px]'>Order amount</div>
            </th>
            <th className='w-1/4  text-right text-regular-14  font-normal whitespace-nowrap m-0 p-0 '>
              <div className='bg-gray-150 rounded-tr-small rounded-br-small px-3 py-[10px]'>
                Transaction fees{" "}
                <img
                  src='/assets/icons/Info.svg'
                  alt='Info logo'
                  className='inline-flex '
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr
              key={item.orderID}
              className=' border-b border-gray-150 text-regular-14 '
            >
              <td className=' text-left inline-block px-3 py-[10px] text-blue-50'>
                {item.orderID}
              </td>
              <td className='text-left text-black-50  py-[10px]  '>
                {" "}
                {formatDate(item.orderDate)}
              </td>
              <td className='text-right text-black-50  py-[10px] '>
                {item.orderAmount}
              </td>
              <td className='text-right text-black-50  px-3 py-[10px] '>
                {item.transactionFees}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mb-6'>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};
export default Table;
