import { useLoaderData, useParams,  } from "react-router-dom";

const Details = () => {
      const service = useLoaderData();
       console.log(service)
      const {id} = useParams();
       const detail = service.find((item) => item.id === id); 
       console.log(detail);
    return (
       <div className="mt-5">
        <h1 className="text-center text-3xl font-bold text-pink-600">About our service</h1>
         <div className="grid md:grid-cols-3 mt-4 gap-5">
            <div className="border px-5">
              <h1 className="text-2xl text-pink-500 font-bold text-center py-3">Facilities we porvide free</h1>
               <h1 className="font-bold">1. Water system</h1>
               <br />
               <p>we provide you fee water for your gust if you need it </p>
               <br />
               <h1 className="font-bold">2.Parking car</h1>
               <br />
               <p>if you booked your service then we select a area for your occation , you know that parking a 
                car is too much deficult for every city but the most beatiful news is we arrange a car parking area for 
                you gust . it is 100% free.
               </p>
               <br />
               <h1 className="font-bold">3.20% Off offer</h1>
               <br />
               <p>if you booked 2 service within 4 month then we will give you 20% OFF 
                for the second service</p>
                <br />
            </div>
            <div className="col-span-2 border">
            <div className=" flex ">
           <div> <figure className="pr-10"><img src={detail.cover} alt="Shoes" /></figure></div>
            <div>
             <h2 className="card-title">{detail.name}</h2>
               <p className="py-4 ">{detail.description}</p>
               <p><span className="font-bold">Value: </span>{detail.price}</p>

            </div>
             </div>
            </div>
           
        </div>
       </div>
    );
};

export default Details;