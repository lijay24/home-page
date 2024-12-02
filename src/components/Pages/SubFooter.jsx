import React from 'react';
import { Image } from 'cloudinary-react';

const SubFooter = () => {
  return (
    <div className='p-5 text-center bg-[#FAF3EA] mt-64'>
      <div className='grid gap-5 place-content-center md:grid-cols-4 mt-10'>
        {/* First Image and Text */}
        <div className="flex items-center gap-4">
          <Image cloudName="dnze2w8zp" publicId="https://res.cloudinary.com/dnze2w8zp/image/upload/v1726394700/Vector_wdemvm.png" className='w-16' />
          <div>
            <h3 className='font-black text-xl'>High Quality</h3>
            <p>crafted from top materials</p>
          </div>
        </div>

        {/* Second Image and Text */}
        <div className="flex items-center gap-4">
          <Image cloudName="dnze2w8zp" publicId="https://res.cloudinary.com/dnze2w8zp/image/upload/v1726394698/Vector_1_j0x4pl.png" className='w-16' />
          <div>
            <h3 className='font-black text-xl'>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>

        {/* Third Image and Text */}
        <div className="flex items-center gap-4">
          <Image cloudName="dnze2w8zp" publicId="https://res.cloudinary.com/dnze2w8zp/image/upload/v1726394697/Vector_2_csenyq.png" className='w-16' />
          <div>
            <h3 className='font-black text-xl'>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>

        {/* Fourth Image and Text */}
        <div className="flex items-center gap-4">
          <Image cloudName="dnze2w8zp" publicId="https://res.cloudinary.com/dnze2w8zp/image/upload/v1726394696/Vector_3_objqqc.png" className='w-16' />
          <div>
            <h3 className='font-black text-xl'>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubFooter;
