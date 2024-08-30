import React from 'react';
// antd
import { Drawer } from 'antd';

type CustomDrawerProps = {
  title: string;
  open?: boolean;
  handleClose?: () => void;
  children?: React.ReactNode;
  extra?: React.ReactNode;
  removePadding?: boolean;
  childrenDrawer?: boolean;
  childrenDrawerTitle?: string;
  childrenDrawerClose?: () => void;
  childrenDrawerExtra?: React.ReactNode;
  childrenchildrenDrawer?: React.ReactNode;
  childrenRemovePadding?: boolean;
};

function CustomDrawer({
  title,
  open,
  handleClose,
  children,
  extra,
  removePadding = false,
  childrenDrawer,
  childrenDrawerTitle,
  childrenDrawerClose,
  childrenDrawerExtra,
  childrenchildrenDrawer,
  childrenRemovePadding = false,
}: CustomDrawerProps) {
  return (
    <Drawer
      title={title}
      placement="right"
      onClose={handleClose}
      open={open}
      extra={extra}
      className={removePadding ? 'drawerPaddingRemove' : ''}
    >
      {children}
      {childrenDrawer && (
        <Drawer
          title={childrenDrawerTitle}
          placement="right"
          onClose={childrenDrawerClose}
          open={childrenDrawer}
          extra={childrenDrawerExtra}
          className={childrenRemovePadding ? 'drawerPaddingRemove' : ''}
        >
          {childrenchildrenDrawer}
        </Drawer>
      )}
    </Drawer>
  );
}

export default CustomDrawer;
