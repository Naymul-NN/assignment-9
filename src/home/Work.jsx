
const Work = () => {

    
    return (
        <div className="py-5">
            <h1 className="text-3xl font-bold text-pink-600 text-center">OUR RECENT EVENTS</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2">
            <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
       <img src="https://i.ibb.co/CPkk4VK/8f6d1f4d09dc5ee9cf79a25ab6820fe8.jpg" alt="Shoes" className="rounded-xl" />
       </figure>
       <div className="card-body items-center text-center">
       <h2 className="card-title">Shoes!</h2>

        </div>
       </div>
       <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
       <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
       <div className="card-actions">
       <button className="btn btn-primary">Buy Now</button>
      </div>
      </div>
            </div>
              <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
               <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
              </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
           <div className="card-actions">
           <button className="btn btn-primary">Buy Now</button>
           </div>
          </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
    </div>
   </div>
           </div>   
        </div>
    );
};

export default Work;