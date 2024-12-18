import NavLink from './NavLink';
import AuthButtons from './AuthButtons';
import { MenuItem } from './types';

interface DesktopMenuProps {
  menuItems: MenuItem[];
}

export default function DesktopMenu({ menuItems }: DesktopMenuProps) {
  return (
    <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
      {menuItems.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
      <AuthButtons />
    </nav>
  );
}