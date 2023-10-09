import { Link } from "react-router-dom";


const About = () => {
 
 
    return (
        <div>
            <h1 className="text-4xl text-center my-6 font-serif text-pink-500"> AdK International ltd.</h1>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mb-7">
                <div  className="border">
                   <h1 className="text-2xl text-center text-purple-600 font-serif ">Our offices</h1>
                    <h1 className=" text-center font-bold border-b-2 py-4 mx-16">Headquater</h1>
                    <div className="text-center py-4"><li>Los Angeles</li></div>
                    <h1 className="text-center font-bold">Brances</h1>
                    <div className="text-center hover:bg-pink-100">
                        
                            <li className="hover:text-red-600"> <Link to="#"> New work</Link></li>
                            <li className="hover:text-red-600"> <Link to="#"> London</Link></li>
                            <li className="hover:text-purple-600"> <Link to="#"> Paris</Link></li>
                            <li className="hover:text-red-600"> <Link to="#"> Dubi</Link></li>
                            <li className="hover:text-red-600"> <Link to="#"> Delle</Link></li>
                            <li className="hover:text-purple-600"> <Link to="#"> Varginea</Link></li>
                            <li className="hover:text-red-600"> <Link to="#"> Poland</Link></li>
                            <li className="hover:text-red-600"> <Link to="#"> Finland</Link></li>
                            <li className="hover:text-purple-600"> <Link to="#"> Oaros</Link></li>
                        
                    </div>
                </div>
                <div className="border col-span-2 ">
                       <h1  className="text-2xl text-center text-purple-600 font-serif"> what type of event we manage</h1>
                       <div className="py-5" >
                        <div>
                       <figure className="h-[20rem]"> <img  src="https://i.ibb.co/CPkk4VK/8f6d1f4d09dc5ee9cf79a25ab6820fe8.jpg" alt="" /></figure>
                        <p className=" pl-16 text-white ">
                       1. InnovateCon: Igniting Creativity in the Workplace <br />
                       2 . AchieveSummit: Reaching New Heights Together  <br />
                       3.  SynergyFusion: Collaborate, Create, Connect  <br />
                       4.  EcoImpact Forum: Sustainability in Business  <br />
                       5. TechXperience Expo: Embracing the Future  <br />
                       6.  Leadership Unleashed: Inspire, Empower, Lead  <br />
                       6.  CustomerConnect Conference: Building Relationships, Driving Growth  <br />
                       7. The Financial Frontier: Navigating Change  <br />
                       8 MomentumMixer: Fueling Team Spirit  <br />
                        9.  Health & Wellness Symposium: Balancing Work and Wellbeing  <br />
                        10.Marketplace Mastery: Strategies for Success  <br />
                       11. Inclusion Ignites Innovation: Diversity in the Workplace  <br />
                        12. Intrapreneurship Unleashed: Cultivating Innovation from Within  <br />
                        13.  The Global Growth Gala: Expanding Horizons  <br />
                      14.  Brand Builders Bash: Crafting Your Corporate Identity  <br />
                      15. Sustainability Summit: Greening Your Business Future  <br />
                     16. The Tech Trailblazers Forum: Shaping Tomorrow  <br />
                     17 Team Triumph Rally: Celebrating Success Together  <br />
                     18 Corporate Culture Carnival: Uniting Through Values  <br />
                      19.Productivity Powerhouse: Unlocking Efficiency
                        </p>
                        </div>
                      <div >
                      <p className=" text-left text-xl text-purple-500 ">we provide every single service that is related to corporate life</p>
                        
                        
                      </div>
                       </div>

                </div>
                <div className="border bg-blue-100">
                      <h1 className=" text-2xl text-center text-purple-600 font-serif">How can  you find us</h1>
                      <h2 className="text-center border-b-2 mx-10 py-5">just send us a message</h2>
                      <div className="pl-4">
                        <input className="border border-purple-500" type="text" placeholder="name" />
                        <input className="my-6 border border-purple-500" type="text" placeholder="message" />
                       <p> <button className="px-6 py-2 bg-slate-500">send</button></p>

                      </div>
                </div>
            </div>
        </div>
    );
};

export default About;