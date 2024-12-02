import React, { useState } from 'react';
import { Image } from 'cloudinary-react';
import share from "../../assets/share.png";
import contribute from "../../assets/contribute.png";
import like from "../../assets/like.png";
import ReactPaginate from 'react-paginate';
import data from '../../../data/basics.json';
import SubFooter from './SubFooter';

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 16; 
  const additionalItemsPerPage = 4; 

  
  const duplicatedData = [...data, ...data, ...data, ...data]; 
  const totalItems = duplicatedData.length; 

  
  const currentItems = duplicatedData.slice(currentPage * additionalItemsPerPage + (currentPage === 0 ? 0 : itemsPerPage),
   (currentPage === 0 ? itemsPerPage : itemsPerPage + additionalItemsPerPage) + (currentPage * additionalItemsPerPage));

  const handlePageClick = (data) => {
    let selected = data.selected;
    setCurrentPage(selected);
  };

  return (
    <div className='mb-10'>
      <section className="grid place-content-center gap-5 md:grid-cols-4">
        {currentItems.map((item, index) => (
          <div key={`${item.imageUrl}-${index}`} className="bg-[#F4F5F7] relative">
            <figure className="relative">
              <Image loading='lazy' className='w-full' cloudName={item.cloudName} publicId={item.imageUrl} />
              {item.discount && (
                <div className="absolute top-3 p-3 right-3 bg-red-700 rounded-[100%] text-white font-black text-xl">
                  <p>{item.discount}</p>
                </div>
              )}
            </figure>
            <figcaption className="p-5">
              <h2 className="font-bold text-2xl">{item.name}</h2>
              <p className="text-xl mt-2 text-[#919294] font-bold">{item.description}</p>
              <p className="text-2xl mt-2 font-black">{item.price}</p>
            </figcaption>
            <div className="absolute w-full h-full top-0 opacity-0 text-white hover:opacity-90 bg-black grid place-content-center">
              <button className="font-black bg-white p-3 text-[#B88E2F]">Add to cart</button>
              <span className="flex gap-5 mt-5 font-black text-xl">
                <span className="flex items-center gap-2">
                  <img className="h-[15px] w-[15px]" src={share} alt="share" /> Share
                </span>
                <span className="flex items-center gap-2">
                  <img className="h-[15px] w-[15px]" src={contribute} alt="contribute" /> Contribute
                </span>
                <span className="flex items-center gap-2">
                  <img className="h-[15px] w-[15px]" src={like} alt="like" /> Like
                </span>
              </span>
            </div>
          </div>
        ))}
      </section>
      
      
      <div className="flex justify-center my-5">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(totalItems / additionalItemsPerPage) + 1} // Total pages
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex gap-5 border rounded-md "} 
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item "}
          nextLinkClassName={"page-link"}
          activeClassName={"active rounded-md border-[#B88E2F]"}
        />
      </div>
      <SubFooter/>
    </div>
    
  );
};




export default Shop;
