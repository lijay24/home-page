import React from 'react'
import mask from '../../assets/Mask1.svg';
import mask2 from '../../assets/Mask2.png';
import mask3 from '../../assets/Mask3.svg';

const ProductRange = () => {
  return (
    <div className='p-5 text-center'>
      <header className='mb-5'>
        <h3 className='text-3xl text-black font-bold'>Browse The Range</h3>
        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </header>
      <div className='grid gap-5 place-content-center md:grid-cols-3'>
        <article>
          <img src={mask} alt="mask1" />
          <p className='text-2xl mt-5 text-bold'>Dining</p>
        </article>
        <article>
          <img src={mask2} alt="mask2" />
          <p className='text-2xl mt-5 text-bold'>Living</p>
        </article>
        <article>
          <img src={mask3} alt="mask3" />
          <p className='text-2xl mt-5 text-bold'>Bedroom</p>
        </article>
      </div>
    </div>
  )
}

export default ProductRange
