import Marquee from "react-fast-marquee";

const Client = () => {
    return (
        <div className="my-6 pb-7 px-3">
            <h1 className="text-center text-3xl font-bold pb-5">REVIEW OF OUR CLIENTS</h1>
            <Marquee pauseOnHover={true} speed={20} direction="right">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                      <div className="h-60 w-72 bg-slate-200 lg:ml-5 py-6 px-2  rounded-lg">
                        <figure className="flex justify-center items-center ">  <img className=" w-28   rounded-full " src="https://i.ibb.co/pXt7HgH/360-F-224869519-a-Rae-Lneq-ALf-PNBzg0xx-MZXghtv-BXkf-IA.jpg" alt="" /></figure>
                          <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, ab! </p>
                      </div>

                      <div className="h-60 w-72 bg-slate-200 py-6 px-2 rounded-lg">
                        <figure className="flex justify-center items-center ">  <img className=" w-24 h-24 rounded-full " src="https://i.ibb.co/BHh9Sjh/depositphotos-115812380-stock-photo-cool-african-man.webp" alt="" /></figure>
                          <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, ab! </p>
                      </div>

                      <div className="h-60 w-72 bg-slate-200 py-6 px-2 rounded-lg">
                        <figure className="flex justify-center items-center ">  <img className=" w-24 h-24   rounded-full " src="https://i.ibb.co/rsYSk3m/rm328-366-tong-08-1.jpg" alt="" /></figure>
                          <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, ab! </p>
                      </div>

                      <div className="h-60 w-72 bg-slate-200 py-6 px-2  rounded-lg">
                        <figure className="flex justify-center items-center ">  <img className=" w-28   rounded-full " src="https://i.ibb.co/pXt7HgH/360-F-224869519-a-Rae-Lneq-ALf-PNBzg0xx-MZXghtv-BXkf-IA.jpg" alt="" /></figure>
                          <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, ab! </p>
                      </div>
                           
                </div>
                </Marquee>
        </div>
    );
};

export default Client;