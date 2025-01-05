import React from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Text from '../../atoms/commonText';

// Data
import { SidebarLinks } from '../../../data/dummyData';

// Assets
import { Logo } from '../../../assets/images';

// Icons
import { CloseCircle } from 'iconsax-react';

type SidebarIF = {
  isOpen: boolean;
  isHidden: boolean;
  setIsHidden: (_isHidden: boolean) => void;
};

const Sidebar: React.FC<SidebarIF> = ({ isOpen, isHidden, setIsHidden }) => {
  return (
    <>
      <div
        className={`absolute left-[-900px] top-0 z-30 h-screen border-r border-lightGray bg-background duration-300 lg:fixed lg:left-0 ${isOpen ? 'w-[70px]' : 'w-[240px]'} ${
          isHidden && 'left-[0px]'
        } `}
      >
        <div
          className={`sticky top-0 z-10 flex items-center justify-between border-r border-content2 p-4`}
        >
          <div
            className={`lg flex items-center gap-3 pt-1 ${isOpen ? 'pl-[6px]' : 'pl-0'}`}
          >
            <img src={Logo} alt="" width={26} height={26} />
            {!isOpen && (
              <Text
                containerTag="h4"
                className="w-full text-base font-bold uppercase text-primary"
              >
                Rentomation
              </Text>
            )}
          </div>

          <div
            className="group block cursor-pointer rounded-lg bg-white p-1 lg:hidden"
            onClick={() => setIsHidden(false)}
          >
            <CloseCircle
              size="24"
              color="#009ca9"
              className="duration-200 group-hover:rotate-180"
            />
          </div>
        </div>

        <ul className="border-r border-content2 px-3 pt-4">
          {SidebarLinks.map((item, index) => {
            return (
              <li
                key={index}
                className={`group flex cursor-pointer items-center py-2 hover:text-primary ${isOpen ? 'pl-[6px]' : 'pl-0'}`}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) => {
                    return `relative flex items-center gap-4 p-1 text-sm ${
                      isActive ? 'text-primary' : 'text-black'
                    }`;
                  }}
                >
                  <div>{item.icon}</div>

                  <Text
                    containerTag="span"
                    className={`cursor-pointer whitespace-nowrap font-normal capitalize ${isOpen ? 'invisible absolute left-10 flex h-full w-max items-center justify-center rounded-md bg-primary p-2 text-xs text-white opacity-0 group-hover:visible group-hover:opacity-100' : 'realative'}`}
                  >
                    {isOpen && (
                      <span className="absolute left-[-4px] z-[-1] h-[10px] w-[10px] rotate-45 border border-content2 bg-primary shadow-lg" />
                    )}
                    {item.title}
                  </Text>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
