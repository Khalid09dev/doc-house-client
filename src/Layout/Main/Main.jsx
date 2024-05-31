import { Outlet, useLocation } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const hideNavbarFooter = location.pathname === '/signup' || location.pathname === '/signin' || location.pathname === '/my-appoinment';

    return (
        <div>
            {!hideNavbarFooter && <Navbar></Navbar>}
            <Outlet></Outlet>
            {!hideNavbarFooter && <Footer></Footer>}
        </div>
    );
};

export default Main;