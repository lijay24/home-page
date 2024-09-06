import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='p-5 grid gap-7 md:grid-cols-4'>
            <div>
                <header className='font-black text-3xl mb-10'> Furniro.</header>
                <address className='max-w-52 mt-3 text-xl '>400 University Drive Suite 200 Coral Gables,
                FL 33134 USA</address>
            </div>
            <div className=''>
                <header className='mb-10 text-2xl'>Links</header>
                <nav>
                    <ul className='grid gap-5 text-xl font-bold'>
                        <li><a href=''>Home</a></li>
                        <li><a href=''>Shop</a></li>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <header className='mb-10 text-2xl'>Help</header>
                <nav>
                    <ul className='grid gap-5 text-xl font-bold'> 
                        <li><a href=''>Payment Options</a></li>
                        <li><a href=''>Returns</a></li>
                        <li><a href=''>Privacy Policies</a></li>
                    </ul>
                </nav>
                </div>
            <div> 
                <header className='mb-10 text-2xl'>Newsletter</header>
                <span>
                    <input className='border-b-2 border-black mr-3' type='email' name='email' id='email ' placeholder='Enter Your Email Address'/>
                    <button className='border-b-2 border-black text-bold'>SUBSCRIBE</button>
                </span>
            </div>
                   </div>
                   <div className='p-5'>
                   <hr />
            <p className='text-center text-xl mt-5 lg:text-left'>2023 furino. All rights reverved</p>

                   </div>
    </footer>
  )
}

export default Footer
