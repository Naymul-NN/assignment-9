import Marquee from "react-fast-marquee";
const Why = () => {
    return (
        <div className="my-12 bg-purple-100 py-8 px-4">
            <h1 className="text-3xl text-center text-pink-600 font-serif"> WHY CHOOSE US FOR YOUR EVENT?</h1>
            <p className="text-center pb-4">Event that you will Remember</p>
            <Marquee
             pauseOnHover={true}
              speed={50}>
            <div className="flex gap-14 justify-between">
            <div className="flex">
               <div>
                <img className="w-28 bg-slate-400 p-5 rounded-full" src="https://i.ibb.co/R724bM0/2104127.png" alt="" />
               </div>
               <div>
                <h1 className="text-2xl font-bold pb-5">ALL KIND OF LOGISTICS AND <br /> RESOURCES SUPPORT</h1>
                <p>As an experienced Event Management <br /> company, we have all kind of Event equipment, <br /> logistics and resources available</p>
               </div>
            </div>

            <div className="flex">
                <div>
                    <img className="w-28 bg-slate-400 p-5 rounded-full" src="https://i.ibb.co/cTg7p3F/5940004.png" alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold pb-5">EXPERIENCED EVENT PLANNER AND <br />MANAGER</h1>
                    <p>When it is about making your Event successful,<br /> it is all about making a good plan, managing <br />
                     and executing successfully. And, we have experienced <br /> who will make your event unique and memorable!</p>
                </div>
            </div>

            {/* <div className="flex">
                <div>
                    <img className="w-28 bg-slate-400 p-5 rounded-full" src="https://i.ibb.co/WgLWyzs/4371446.png" alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold pb-5"> WE ARE RELIABLE SINCE YOUR <br /> COMPNY FOUND</h1>
                    <p>Reliability is a crucial concept in various aspects of life, business, and technology. It refers to the quality of being trustworthy, consistent, and dependable over time. Here are some key areas where reliability holds</p>
                </div>
            </div> */}
            </div>
            </Marquee>
        </div>
    );
};

export default Why;