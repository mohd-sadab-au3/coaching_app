import Link from 'next/link';
import { cn } from '@/lib/utils/styles';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({ href, children, onClick, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-gray-600 hover:text-blue-600 transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
}