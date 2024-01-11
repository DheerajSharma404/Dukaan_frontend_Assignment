import { useState } from "react";
import { sidebarLinks } from "../../constants/";
const StoreSideBarLink = () => {
  const [active, setActive] = useState(7);
  const handleActive = (id: number) => {
    setActive(id);
  };
  return (
    <>
      <div className=' mx-2 flex-1 gap-1'>
        {sidebarLinks.map((item) => (
          <a
            key={item.id}
            href='#'
            className={`flex items-center gap-3 px-4 py-2 text-white-50 text-regular-14 transition-all opacity-80 hover:opacity-100 hover:bg-navy-blue-100 rounded-small ${
              active === item.id && "bg-navy-blue-100 opacity-100"
            }`}
            onClick={() => handleActive(item.id)}
          >
            <img src={item.imgURL} alt={item.label} className='' />
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default StoreSideBarLink;
