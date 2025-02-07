import Image from 'next/image';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ImageWithRemoveButtonProps {
  src: string;
  alt: string;
  onRemove: () => void;
  onClick: () => void;
}

const ImageWithRemoveButton: React.FC<ImageWithRemoveButtonProps> = ({ src, alt, onRemove, onClick }) => {
  return (
    <div className="relative hover:cursor-pointer">
      <Image width={1920} height={1024}  src={src} alt={alt} className="w-full h-auto rounded cursor-pointer transition-transform duration-20 ease-in transform hover:scale-[1.01]" onClick={onClick} />
    <button
    type='button'
    title='Remove'
      onClick={onRemove}
      className="hover:cursor-pointer absolute top-[5px] right-[5px] bg-gray-500 bg-opacity-50 text-white rounded-full p-1 "
    >
      <FaTimes />
    </button>
    </div>
  );
};

export default ImageWithRemoveButton;