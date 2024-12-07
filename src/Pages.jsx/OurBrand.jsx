import React from 'react';

function OurBrand() {
  return (
    <>
      <div className="container grid grid-cols-3 gap-4 mx-auto mt-5">
      
        <h1 className="text-center col-span-3 my-4 font-bold text-2xl underline decoration-red-600">
          Our Brands
        </h1>
      
        <div className="flex justify-center items-center">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP._6p8EzEx1Fen3gDexs1RXgHaDy&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="http://media.pamper.my/2020/12/RB3857_RB1972_ST__30x40_M_PRODUCT.jpg"
            alt=""
            className="w-80"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://www.oakleyforum.com/attachments/c1489398-12ad-4640-8786-e64573bca782-jpeg.825129/"
            alt=""
            className="w-full h-auto"
          />
        </div>
        
        <div className="flex justify-center items-center">
          <img
            src="https://images.pexels.com/photos/700728/pexels-photo-700728.jpeg?cs=srgb&dl=blurred-background-close-up-close-up-700728.jpg&fm=jpg"
            alt=""
            className="w-50 h-50"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0780a9102254367.5f32795fb426d.jpg"
            alt=""
            className="w-100 h-80"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/347f2c85192251.5d749edcb55ce.jpg"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default OurBrand;
