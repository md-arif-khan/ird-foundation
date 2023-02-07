import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";


const Header = () => {
    return (
        <div className="bg-gradient-to-r px-4  from-[#fefce8d5]  via-[#fae8ffc4] to-white">
            <div className="max-w-screen-xl mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;