import React from 'react';
import Link from 'next/link';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex overflow-hidden z-0 flex-col py-px mt-5 w-full text-base font-semibold text-black bg-white border-t-2 border-blue-100 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-start self-center max-w-full w-[1081px]">
        <nav className="flex flex-col self-stretch">
          <h2 className="self-start leading-none">Navigation</h2>
          <ul className="mt-7 leading-6 w-[349px]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/properties">Properties</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/mission">Our Mission</Link></li>
            <li><Link href="/terms">Terms and Conditions</Link></li>
            <li><Link href="/market-trends">Market trends</Link></li>
          </ul>
        </nav>
        <nav className="flex flex-col">
          <h2 className="self-start leading-none">Careers</h2>
          <ul className="mt-6 leading-6">
            <li><Link href="/careers-portal">Careers Portal</Link></li>
            <li><Link href="/our-careers">Our careers</Link></li>
          </ul>
        </nav>
        <div className="leading-none">Contact</div>
      </div>
      <div className="flex mt-5 w-full bg-black min-h-[87px] max-md:max-w-full" />
    </footer>
  );
};

export default Footer;