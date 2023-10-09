import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Service = () => {
    
    const [jsondata,setJsondata] = useState([]);

    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data => setJsondata(data))

    },[])
    

    return (
        <div>
            <h1 className="text-3xl font-bold text-pink-600 text-center mt-[200px]">Our Services</h1>
            
            <div className="bg-pink-100  rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
            {
                jsondata.map(item => (
                    <div key={item.id}>
                        <div className="card card-compact  bg-base-100 shadow-xl">
              <figure className="h-[250px]"><img src={item.cover} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl text-blue-400">{item.name}</h2>
                 <p><span className="font-bold">Value:</span> {item.price}</p>
                 <p>{item.description}</p>
               <div className="card-actions justify-start">
                <Link to={`/details/${item.id}`} className="btn hover:bg-blue-400">see details</Link>
            </div>
            </div>
             </div>

                </div>
                ))
            }
            </div>
        </div>
    );
};

export default Service;