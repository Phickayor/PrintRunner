import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faStar} from "@fortawesome/free-solid-svg-icons"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function ShopNow() {
    const widthContainer = useRef(null)
    const heightContainer = useRef(null)
    const quantityContainer = useRef(null)
    const sidesContainer = useRef(null)
    const materialContainer = useRef(null)
    const finishingContainer = useRef(null)
    const readyToShipContainer = useRef(null)
    const [price,SetPrice] = useState(null)
    const star = <FontAwesomeIcon icon={faStar}/>
    const check=<FontAwesomeIcon className='text-primary' icon={faCheck}/>
   function MainCalc(){
        var width=parseInt(widthContainer.current.value)
        var height= parseInt(heightContainer.current.value)
        var quantity = parseInt(quantityContainer.current.value) 
        var material = parseInt(materialContainer.current.value) 
        var sides = parseInt(sidesContainer.current.value) 
        var readyToShip = parseInt(readyToShipContainer.current.value) 
        var finishing = parseInt(finishingContainer.current.value) 
        SetPrice(quantity * (width + height + material + sides + readyToShip + finishing))
         }
         useEffect(()=>{
            MainCalc();
         })
    return (
  <div className="md:flex justify-center ">
    <div className='p-5 md:w-1/2'>
        <div className="pb-10">
        {/* Item Name  */}
        <h1 className='text-3xl font-bold text-gray20'>Vinyl Banners</h1>
        <p className='text-2xl mt-2 text-yellow-500'>{star}{star}{star}{star}{star}
        <i className="text-xl text-blue-500">87 Reviews</i>
        </p></div>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
            <img src="https://s1-ecp.printrunner.com/sms/photo-gallery/110913/RestaurantBannersMarketingMaterialsB_450x450.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://s1-ecp.printrunner.com/sms/photo-gallery/110913/01_VinylBanner-Main_450x450.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://s1-ecp.printrunner.com/sms/photo-gallery/110913/02_vinylbanner-application_450x450.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://s1-ecp.printrunner.com/sms/photo-gallery/110913/03_VinylBanner-Application_450x450.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://s1-ecp.printrunner.com/sms/photo-gallery/110913/04a_VinylBanner-Material_450x450.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://s1-ecp.printrunner.com/sms/photo-gallery/110913/04b_VinylBanner-Material_450x450.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://s1-ecp.printrunner.com/sms/photo-gallery/110913/04c_VinylBanner-Sizes_450x450.jpg'/>
        </SwiperSlide>
        <h1 className='mt-5 opacity-0'>...</h1>
      </Swiper>
      <p className='text-center mt-8 m-5'>Be seen from any angle with attention-grabbing waterproof banners</p>
      <ul>
        <li>{check} Custom sizes up to 20 ft x 8 ft</li>
        <li>{check} Fade, wind, and tear-resistant matte vinyl</li>
        <li>{check} Optional grommets or pole pockets </li>
      </ul>
      <h1 className="text-bold text-gray20 p-5 text-center text-2xl">Product Features</h1>
      <div className='flex flex-wrap justify-center'>
      <div className="w-fit m-2 ">
        <img className='m-auto' src="https://s1-ecp.printrunner.com/439/Great%20Quality.png"/>
        <p className='text-[#999999] text-center'>Great Quality</p>
      </div>
      <div className="w-fit m-2 ">
        <img className='m-auto' src="https://s1-ecp.printrunner.com/441/42x42/Fade%20Resistant.png"/>
        <p className='text-[#999999] text-center'>Fade Resistant</p>
      </div>
      <div className="w-fit m-2 ">
        <img className='m-auto' src="https://s1-ecp.printrunner.com/452/42x42/Water%20Proof.png"/>
        <p className='text-[#999999] text-center'>Waterproof</p>
      </div>
      <div className="w-fit m-2 ">
        <img className='m-auto' src="https://s1-ecp.printrunner.com/440/41x43/Best%20Prices.png"/>
        <p className='text-[#999999] text-center'>Best Prices</p>
      </div>
      <div className="w-fit m-2 ">
        <img className='m-auto' src="https://s1-ecp.printrunner.com/460/42x42/Custom%20Size.png"/>
        <p className='text-[#999999] text-center'>Custom Size</p>
      </div>
      <div className="w-fit m-2 ">
        <img className='m-auto' src="https://s1-ecp.printrunner.com/438/Turnaround.png"/>
        <p className='text-[#999999] text-center'>Fast Turnaround</p>
      </div>
      </div>
      
    </div>

    {/* SUMMARY */}
    <div>    
        <div className='border'>
      
      <ul className="space-y-6">
          <h1 className="text-bold bg-bgcolor p-2 md:p-8 text-2xl"> Get Started<b className="hidden md:block float-right pl-5 pr-5">&#36; {price}</b></h1>
      
          <li className="border-b-2">
                  <b className="pl-8">Flat Width In feet</b>
              <select className=" mr-5 float-right pl-5 pr-5 bg-white outline-none" onChange={MainCalc} ref={widthContainer} >
                  <option value="10">1 ft.</option>
                  <option value="20">2 ft.</option>
                  <option value="30">3 ft.</option>
                  <option value="40">4 ft.</option>
                  <option value="50">5 ft.</option>
                  <option value="60">6 ft.</option>
                  <option value="70">7 ft.</option>
                  <option value="80">8 ft.</option>
                  <option value="90">9 ft.</option>
                  <option value="100">10 ft.</option>
                  <option value="110">11 ft.</option>
                  <option value="120">12 ft.</option>
              </select>
          </li>
          <li className="border-b-2">
              
              <b className="pl-8">Flat Height In feet</b>
          <select className=" mr-5 float-right pl-5 pr-5 bg-white outline-none" onChange={MainCalc} ref={heightContainer}>
              <option value="10">1 ft.</option>
              <option value="20">2 ft.</option>
              <option value="30">3 ft.</option>
              <option value="40">4 ft.</option>
              <option value="50">5 ft.</option>
              <option value="60">6 ft.</option>
              <option value="70">7 ft.</option>
              <option value="80">8 ft.</option>
              <option value="90">9 ft.</option>
              <option value="100">10 ft.</option>
              <option value="110">11 ft.</option>
              <option value="120">12 ft.</option>
          </select> 
      </li>
      <li className="border-b-2">
              
              <b className="pl-8">Number of Sides</b>
          <select className=" mr-5 float-right pl-5 pr-5 bg-white outline-none" ref={sidesContainer} onChange={MainCalc}>
              <option value="20">Single Sided</option>
              <option value="40">Double Sided</option>
          </select>
      </li>
      
      <li className="border-b-2">
              
              <b className="pl-8">Quantity</b>
          <select className=" mr-5 float-right pl-5 pr-5 bg-white outline-none " ref={quantityContainer} onChange={MainCalc}>
              <option value="1">1 ft.</option>
              <option value="2">2 ft.</option>
              <option value="3">3 ft.</option>
              <option value="4">4 ft.</option>
              <option value="5">5 ft.</option>
              <option value="6">6 ft.</option>
              <option value="7">7 ft.</option>
              <option value="8">8 ft.</option>
              <option value="9">9 ft.</option>
              <option value="10">10 ft.</option>
              <option value="11">11 ft.</option>
              <option value="12">12 ft.</option>
          </select>
      </li>

      <li className="border-b-2">
              
              <b className="pl-8">Finishing</b>
          <select className=" mr-5 float-right pl-5 pr-5 bg-white outline-none " ref={finishingContainer} onChange={MainCalc}>
          <option value="100">Pole Pockets (Top+Bottom)</option>
             <option value="25">Grommets Only</option>
              <option value="0">None</option>
              <option value="50">Hem and Grommets</option>
              <option value="150">Pole Pockets (Right+Left)</option>
          </select>
      </li>

      <li className="border-b-2">
              
              <b className="pl-8">Material</b>
          <select className=" mr-5 float-right pl-5 pr-5 bg-white outline-none " ref={materialContainer} onInput={MainCalc}>
          <option value="100">Standard 13 oz. Vinyl </option>
            <option value="200">18 oz. Matte Vinyl </option>
          </select>
      </li>
       
      <li className="border-b-2">
              
              <b className="pl-8">Ready to Ship In</b>
          <select className=" mr-5 float-right pl-5 pr-5 bg-white outline-none "ref={readyToShipContainer}  onInput={MainCalc}>
              <option value="5">2 Business Days</option>
              <option value="10">3 Business Days</option>
          </select>

          <div className="p-5 flex">
             <b className="pr-5">Estimate Shipping</b>
              <input type="number" className="border-2 p-2 focus:border-[#ff9b00] outline-none" min="1" placeholder="Zip Code"/>
              <input type="button" className="font-semibold border-t-2 text-blue-200 p-2 bg-[#ff9b00] border-[#ff9b00] mr-5" value="GET RATES"/>
             </div>
       
      </li>
       
             
      </ul>
        </div>
  <div className='flex flex-wrap space-x-6 justify-center p-5'>
        <div className="w-fit m-2 ">
            <img className='m-auto' src="https://s1-ecp.printrunner.com/static/assets/img/product-page/share-calc.png"/>
            <p className='text-center'>Great Quality</p>
        </div>
        <div className="w-fit m-2 ">
            <img className='m-auto' src="https://s1-ecp.printrunner.com/static/assets/img/product-page/custom-quote.png"/>
            <p className=' text-center'>Fade Resistant</p>
        </div>
        <div className="w-fit m-2 ">
            <img className='m-auto' src="https://s1-ecp.printrunner.com/static/assets/img/product-page/free-file-check.png"/>
            <p className='text-center'>Waterproof</p>
        </div>
    </div>
    </div>
       <div className='lg:hidden fixed w-full p-8 flex justify-center bottom-0 bg-white'>
        <div className="w-1/2 text-2xl">
            <h1 className='font-bold ml-10'>&#36;{price}</h1>
            <p className='text-gray20 text-lg'>Only &#36;{price} each</p>
        </div>
        <button className="bg-[#ff9b00] w-1/2 text-white outline-none hover:bg-orange-500 ">CONTINUE</button>
        </div> 
   </div>
  )
}

export default ShopNow