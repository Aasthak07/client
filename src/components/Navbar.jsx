import React from 'react'
//BookName>BookTitle>BookAuthor>SellingPrice>PublishData

const Navbar = () => {
  return (
    <div className='w-full flex justify-between h-20 items-center bg-gray-400 px-5'>
      <div className='w-[10%] flex h-full items-center px-5 py-5'>
        <h1 className='font-bold '>LOGO</h1>

      </div>
      <div className="w-[50%] h-full">
        <ul className='w-full h-full flex gap-6 list-none items-center '>
          <li className='cursor-pointer'>HOME</li>
          <li className='cursor-pointer'>ABOUT</li>
          <li className='cursor-pointer'>CONTACT</li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;



