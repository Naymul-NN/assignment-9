
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


const Work = () => {
  
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 50,
      
      
    });
    
  }, []);

  useEffect(() => {
    // Reinitialize AOS when the component updates (e.g., when you navigaack to this page)
    Aos.refresh({
      duration:2000,
    });
  });
    

    return (
        <div className="py-5 bg-slate-100 mt-6">
            <h1 className="text-3xl font-bold text-pink-600 pb-5 text-center">OUR RECENT EVENTS</h1>
            <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 mx-auto lg:w-[70%] ">
            <div  className="card w-96 bg-base-100 shadow-xl" data-aos="fade-right">
          <figure className="px-10 pt-10">
       <img src="https://i.ibb.co/CPkk4VK/8f6d1f4d09dc5ee9cf79a25ab6820fe8.jpg" alt="Shoes" className="rounded-xl" />
       </figure>
       <div className="card-body items-center text-center">
       <h2 className="card-title">That is in london</h2>

        </div>
       </div>
       <div  data-aos="fade-left" className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
       <img src="https://i.ibb.co/MkTLpxs/a6f7ac6120713fca9f3f29768001acb5.jpg" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">we did it paris</h2>          
         </div>
            </div>
              <div data-aos="fade-right" className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
               <img src="https://i.ibb.co/D7CcSHx/606b7fbbcba5254a53b92485087ed0fb.jpg" alt="Shoes" className="rounded-xl" />
              </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">it from canada </h2>
              
          
          </div>
            </div>
            <div  data-aos="fade-left" className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/VphSsmD/02c77725884de83a1699cc04793da780.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">sidne</h2>
    
    </div>
   </div>
           </div>   
        </div>
    );
};

export default Work;