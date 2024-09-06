import React from "react";
import product1 from "../../assets/Ga1.png";
import product2 from "../../assets/Ga2.png";
import product3 from "../../assets/Ga3.png";
import product4 from "../../assets/Ga4.png";
import product5 from "../../assets/Ga5.png";
import product6 from "../../assets/Ga6.png";
import product7 from "../../assets/Ga7.png";
import product8 from "../../assets/Ga8.png";
import share from "../../assets/share.png";
import contribute from "../../assets/contribute.png";
import like from "../../assets/like.png";

const Products = () => {
  return (
    <section className=" p-5 md:pl-14 md:pr-14">
      <header className="text-3xl font-black mb-10 text-center">
        <h2>Our Products</h2>
      </header>

      <section className="grid place-content-center gap-5 md:grid-cols-4">
        <div className="bg-[#F4F5F7] relative">
          <figure className="relative">
            <img className="w-full" src={product1} alt="product1" />
            <div className="absolute top-3 p-3 right-3 bg-red-700 rounded-[100%] text-white font-black text-xl">
              <p>-30%</p>
            </div>
          </figure>
          <figcaption className="p-5">
            <h2 className="font-bold text-2xl">Syltherine</h2>
            <p className="text-xl mt-2 text-[#919294] font-bold">
              Stylish cafe chair
            </p>
            <p className="text-2xl mt-2 font-black">Rp. 2.500.000</p>
          </figcaption>
          <div className="absolute w-full h-full top-0 opacity-0 text-white hover:opacity-90 bg-black grid place-content-center">
            <button className="font-black bg-white p-3 text-[#B88E2F]">
              Add to cart
            </button>
            <span className="flex gap-5 mt-5 font-black text-xl">
              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={share} alt="" /> Share
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={contribute} alt="" />{" "}
                contribute
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={like} alt="" /> like
              </span>
            </span>
          </div>
        </div>
        <div className="bg-[#F4F5F7] relative">
          <figure className="relative">
            <img className="w-full" src={product2} alt="product2" />
          </figure>
          <figcaption className="p-5">
            <h2 className="font-bold text-2xl">Leviosa</h2>
            <p className="text-xl mt-2 text-[#919294] font-bold">
              Stylish cafe chair
            </p>
            <p className="text-2xl mt-2 font-black">Rp. 2.500.000</p>
          </figcaption>

          <div className="absolute w-full h-full top-0 opacity-0 text-white hover:opacity-90 bg-black grid place-content-center">
            <button className="font-black bg-white p-3 text-[#B88E2F]">
              Add to cart
            </button>
            <span className="flex gap-5 mt-5 font-black text-xl">
              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={share} alt="" /> Share
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={contribute} alt="" />{" "}
                contribute
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={like} alt="" /> like
              </span>
            </span>
          </div>
        </div>

        <div className="bg-[#F4F5F7] relative">
          <figure className="relative">
            <img className="w-full" src={product3} alt="product3" />
            <div className="absolute top-3 p-3 right-3 bg-red-700 rounded-[100%] text-white font-black text-xl">
              <p>-50%</p>
            </div>
          </figure>
          <figcaption className="p-5">
            <h2 className="font-bold text-2xl ">Loloita</h2>
            <p className="text-xl mt-2 text-[#919294] font-bold">
              Luxury big sofa
            </p>
            <p className="text-2xl mt-2 font-black">Rp 7.000.000</p>
          </figcaption>
          <div className="absolute w-full h-full top-0 opacity-0 text-white hover:opacity-90 bg-black grid place-content-center">
            <button className="font-black bg-white p-3 text-[#B88E2F]">
              Add to cart
            </button>
            <span className="flex gap-5 mt-5 font-black text-xl">
              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={share} alt="" /> Share
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={contribute} alt="" />{" "}
                contribute
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={like} alt="" /> like
              </span>
            </span>
          </div>
        </div>
        <div className="bg-[#F4F5F7] relative">
          <figure className="relative">
            <img className="w-full" src={product4} alt="product4" />
            <div className="absolute top-3 p-3 right-3 bg-green-500 rounded-[100%] text-white font-black text-xl">
              <p>New</p>
            </div>
          </figure>
          <figcaption className="p-5">
            <h2 className="font-bold text-2xl ">Respira</h2>
            <p className="text-xl mt-2 text-[#919294] font-bold">
              Outdoor bar table and stool
            </p>
            <p className="text-2xl mt-2 font-black">Rp 500.000</p>
          </figcaption>
          <div className="absolute w-full h-full top-0 opacity-0 text-white hover:opacity-90 bg-black grid place-content-center">
            <button className="font-black bg-white p-3 text-[#B88E2F]">
              Add to cart
            </button>
            <span className="flex gap-5 mt-5 font-black text-xl">
              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={share} alt="" /> Share
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={contribute} alt="" />{" "}
                contribute
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={like} alt="" /> like
              </span>
            </span>
          </div>
        </div>
        <div className="bg-[#F4F5F7] relative">
          <figure className="relative">
            <img className="w-full" src={product5} alt="product5" />
          </figure>
          <figcaption className="p-5">
            <h2 className="font-bold text-2xl ">Grifo</h2>
            <p className="text-xl mt-2 text-[#919294] font-bold">Night lamp</p>
            <p className="text-2xl mt-2 font-black">Rp 1.500.000</p>
          </figcaption>
          <div className="absolute w-full h-full top-0 opacity-0 text-white hover:opacity-90 bg-black grid place-content-center">
            <button className="font-black bg-white p-3 text-[#B88E2F]">
              Add to cart
            </button>
            <span className="flex gap-5 mt-5 font-black text-xl">
              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={share} alt="" /> Share
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={contribute} alt="" />{" "}
                contribute
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={like} alt="" /> like
              </span>
            </span>
          </div>
        </div>
        <div className="bg-[#F4F5F7] relative">
          <figure className="relative">
            <img className="w-full" src={product6} alt="product6" />
            <div className="absolute top-3 p-3 right-3 bg-green-500 rounded-[100%] text-white font-black text-xl">
              <p>New</p>
            </div>
          </figure>
          <figcaption className="p-5">
            <h2 className="font-bold text-2xl ">Muggo</h2>
            <p className="text-xl mt-2 text-[#919294] font-bold">Small mug</p>
            <p className="text-2xl mt-2 font-black">Rp 150.000</p>
          </figcaption>
          <div className="absolute w-full h-full top-0 opacity-0 text-white hover:opacity-90 bg-black grid place-content-center">
            <button className="font-black bg-white p-3 text-[#B88E2F]">
              Add to cart
            </button>
            <span className="flex gap-5 mt-5 font-black text-xl">
              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={share} alt="" /> Share
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={contribute} alt="" />{" "}
                contribute
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={like} alt="" /> like
              </span>
            </span>
          </div>
        </div>
        <div className="bg-[#F4F5F7] relative">
          <figure className="relative">
            <img className="w-full" src={product7} alt="product7" />
            <div className="absolute top-3 p-3 right-3 bg-red-700 rounded-[100%] text-white font-black text-xl">
              <p>-50%</p>
            </div>
          </figure>
          <figcaption className="p-5">
            <h2 className="font-bold text-2xl ">Pingky</h2>
            <p className="text-xl mt-2 text-[#919294] font-bold">
              Cute bed set
            </p>
            <p className="text-2xl mt-2 font-black">Rp 2.500.000</p>
          </figcaption>
          <div className="absolute w-full h-full top-0 opacity-0 text-white hover:opacity-90 bg-black grid place-content-center">
            <button className="font-black bg-white p-3 text-[#B88E2F]">
              Add to cart
            </button>
            <span className="flex gap-5 mt-5 font-black text-xl">
              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={share} alt="" /> Share
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={contribute} alt="" />{" "}
                contribute
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={like} alt="" /> like
              </span>
            </span>
          </div>
        </div>
        <div className="bg-[#F4F5F7] relative">
          <figure className="relative">
            <img className="w-full" src={product8} alt="product8" />
            <div className="absolute top-3 p-3 right-3 bg-green-500 rounded-[100%] text-white font-black text-xl">
              <p>New</p>
            </div>
          </figure>
          <figcaption className="p-5">
            <h2 className="font-bold text-2xl ">Potty</h2>
            <p className="text-xl mt-2 text-[#919294] font-bold">
              Minimalist flower pot
            </p>
            <p className="text-2xl mt-2 font-black">Rp 500.000</p>
          </figcaption>
          <div className="absolute w-full h-full top-0 opacity-0 text-white hover:opacity-90 bg-black grid place-content-center">
            <button className="font-black bg-white p-3 text-[#B88E2F]">
              Add to cart
            </button>
            <span className="flex gap-5 mt-5 font-black text-xl">
              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={share} alt="" /> Share
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={contribute} alt="" />{" "}
                contribute
              </span>

              <span className=" flex items-center gap-2">
                <img className="h-[15px] w-[15px]" src={like} alt="" /> like
              </span>
            </span>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <button className="border border-[#B88E2F]  mt-10 px-16 py-2">
          Show More
        </button>
      </div>
    </section>
  );
};

export default Products;
