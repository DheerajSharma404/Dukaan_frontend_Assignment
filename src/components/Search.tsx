interface Props {
  bg?: string;
  border?: string;
}
const Search = ({ bg, border }: Props) => {
  return (
    <div
      className={`flex w-[400px] items-center  gap-3  px-4 py-3  rounded-normal ${bg} ${border}`}
    >
      <img
        src='/assets/icons/bigsearch.svg'
        alt='search icon'
        className='h-4 w-4'
      />
      <input
        type='text'
        placeholder='Search feature, tutorials, etc.'
        className={` w-full text-regular-15 text-black-50 focus:outline-none placeholder:text-gray-100 ${bg} `}
      />
    </div>
  );
};

export default Search;
