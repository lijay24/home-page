import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

function i({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel={
          <span className='mr-4'>...</span>
        }
        nextLabel={
      <span className='w-10 h-10 flex items-center justify-center bg-slate-300 rounded-md'>
        <BsChevronRight/> 
      </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={8}
        pageCount={20}
        previousLabel={
          <span className='w-10 h-10 flex items-center justify-center bg-slate-300 rounded-md mr-4'>
            <BsChevronLeft/>
          </span>
        }
        containerClassName='flex items-center justify-center mt-8 mb-4 '
        pageClassName='block border border-solid border-slate-300 hover:bg-pink-300 w-10 h-10 flex items-center justify-center rounded-md'
        activeClassName='bg-purple-400'
      />
    </>
  );
}
     
     

export default Pagination
