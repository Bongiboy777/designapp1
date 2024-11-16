'use client'
import React from "react";
import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";
interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {

  children: any
}
const NavLink : React.FC<LinkProps & NavLinkProps> = ( { children, ...props }) => {
    const pathName = usePathname();
    return (
        <Link href={props.href} className={`gap-2.5 self-stretch i p-2.5 my-auto ${pathName === props.href ? 'text-amber-300' : 'text-black'} rounded-md1 relative`}>
          {children}
          <div className="absolute bottom-[-10px] left-0 w-fit h-0.5 bg-amber-300 transition-all duration-300 ease-in-out" style={pathName === props.href ? { width: '100%' } : {}}></div>
        </Link>
    );
};

export default NavLink;