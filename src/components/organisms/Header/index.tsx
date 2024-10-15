import { useEffect, useState } from 'react';
import React from 'react';

// Types
import { useNavigate } from 'react-router-dom';

// Components
import Text from '../../atoms/commonText';
import HamburgurMenu from '../../atoms/hamburgurMenu';

// Utils
import { getCookie, removeCookie } from './../../../utils/cookie';
import { TABAYAD_SESSION } from './../../../utils/constant';

// Types
import { UserData } from './../../../types/userTypes';

// Icons
import { HambergerMenu } from 'iconsax-react';

// Antd
import { Dropdown } from 'antd';

// Assets
import { NoProfile } from '../../../assets/images';

// Utils
import { showToast } from '../../../utils/toast';

const Header = ({
  isOpen,
  setIsOpen,
  setIsHidden,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const nevigate = useNavigate();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const userData = getCookie(TABAYAD_SESSION);
    setUser(JSON.parse(userData || '{}'));
  }, []);

  const items = [
    {
      key: '1',
      label: 'Logout',
      danger: true,
      onClick: () => {
        removeCookie(TABAYAD_SESSION);
        showToast({
          type: 'success',
          message: 'Logout Successfully !',
        });
        nevigate('/login');
      },
    },
  ];

  return (
    <div className="flex w-full items-center justify-between border-b border-r-2 border-lightGray bg-white p-2">
      <div>
        <HamburgurMenu isActive={isOpen} setIsActive={setIsOpen} />
        <HambergerMenu
          size={32}
          color="#009ca9"
          className="block cursor-pointer lg:hidden"
          onClick={() => {
            setIsHidden(true);
            setIsOpen(false);
          }}
        />
      </div>

      <div className="flex items-center justify-center gap-5">
        <div className="flex flex-col">
          {user && (
            <Text containerTag="h4" className="text-sm font-semibold capitalize">
              {user?.name}
            </Text>
          )}
          <Text containerTag="h6" className="text-[10px]">
            Admin
          </Text>
        </div>

        <div className="relative h-10 w-10 rounded-full bg-white shadow-md overflow-hidden cursor-pointer">
          <Dropdown menu={{ items }} trigger={['click']}>
            <img src={NoProfile} alt="Profile" />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
