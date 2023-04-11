import React from 'react';
import Link from 'next/link';

type Props = {};

export default function Footer(props: Props) {
  return (
    <div className="flex flex-row items-center sticky bottom-[10px] justify-between">
      <Link href="#hero" className="animate-pulse ml-3">
        <div className="flex flex-col items-center justify-center cursor-pointer filter grayscale hover:grayscale-0 opacity-40 hover:opacity-80">
          <img
            src="https://images.unsplash.com/photo-1625006100410-6bee55152de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="arrow"
            className="rounded-full mb-[2px] h-7 w-7 md:h-8 md:w-8"
          />
          <p className="text-[10px] md:text-xs ">Back to the top</p>
        </div>
      </Link>

      <div className="lg:mr-[50%] mr-7 text-sm sticky lg:flex flex-col items-center justify-center">
        <div className="opacity-40 text-gray-300 flex flex-row font-bold text-xs">
          <p className="text-gray-400 font-normal">ⓒ</p> Alex Hunt
        </div>
        <div className="text-gray-400 opacity-40 text-xs">
          All Rights Reserved
        </div>
      </div>
    </div>
  );
}
