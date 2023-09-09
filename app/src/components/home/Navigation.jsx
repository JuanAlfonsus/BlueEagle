import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <nav id="footer">
                <div className="footer-menu">
                    <NavLink className='link' activeclassname="active" to={'/'}>
                        <div className="text-center">
                            <i className="fa-solid fa-house"></i>
                            <span>Home</span>
                        </div>
                    </NavLink>
                </div>
                <div className="footer-menu">
                    <NavLink className='link' activeclassname="active" to={'/promo'}>
                        <div className="text-center">
                            <i className="fa-solid fa-tags"></i>
                            <span>Promo</span>
                        </div>
                    </NavLink>
                </div>
                <div className="footer-menu">
                    <NavLink className='link' activeclassname="active" to={'/user'}>
                        <div className="text-center">
                            <i className="fa-solid fa-user"></i>
                            <span>User</span>
                        </div>
                    </NavLink>
                </div>
            </nav>
        </>
    )

}