import Banner from "./Banner";
import Client from "./Client";
import Service from "./Service";
import Why from "./Why";
import Work from "./Work";
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <div className="w-full h-auto overflow-x-hidden overflow-y-scroll no-scrollbar">
            
            <Banner></Banner>
            <Service></Service>
            <Work></Work>
            <Why></Why>
            <Client></Client>
            <Footer></Footer>
            </div>
    );
};

export default Home;