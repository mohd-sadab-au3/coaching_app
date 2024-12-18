"use client";

import { Drawer, Menu } from 'antd';
import { MenuItem } from './types';
import AuthButtons from './AuthButtons';

interface MobileMenuProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  onClose: () => void;
}

export default function MobileMenu({ isOpen, menuItems, onClose }: MobileMenuProps) {
  return (
    <Drawer
      title="Menu"
      placement="right"
      onClose={onClose}
      open={isOpen}
      width="70%"
      styles={{
        header: { 
          borderBottom: '1px solid #f0f0f0',
          padding: '16px 24px',
        },
        body: { 
          padding: 0,
        },
        wrapper: {
          width: '70%',
        },
        mask: {
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
        },
      }}
      className="md:hidden"
    >
      <Menu
        mode="inline"
        items={menuItems.map((item) => ({
          key: item.href,
          label: <a href={item.href} onClick={onClose}>{item.label}</a>,
        }))}
        className="border-none"
        style={{
          fontSize: '16px',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
        <AuthButtons />
      </div>
    </Drawer>
  );
}