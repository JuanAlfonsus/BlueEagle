import { NavLink } from "react-router-dom";

export default function Navigation() {
    const tabs = [{
        route: "/home",
        icon: <i class="fa-solid fa-house"></i>,
        label: "Home"
    }, {
        route: "/promo",
        icon: <i class="fa-solid fa-tags"></i>,
        label: "Search"
    }, {
        route: "/login",
        icon: <i class="fa-solid fa-user"></i>,
        label: "Login"
    }]

    return (
        <>
            <nav id="footer">
                <div className="footer-menu">
                    <NavLink className='link' activeClassName="active" to={'/'}>
                        <div className="text-center">
                            <i class="fa-solid fa-house"></i>
                            <span>Home</span>
                        </div>
                    </NavLink>
                </div>
                <div className="footer-menu">
                    <NavLink className='link' activeClassName="active" to={'/promo'}>
                        <div className="text-center">
                            <i class="fa-solid fa-tags"></i>
                            <span>Promo</span>
                        </div>
                    </NavLink>
                </div>
                <div className="footer-menu">
                    <NavLink className='link' activeClassName="active" to={'/user'}>
                        <div className="text-center">
                            <i class="fa-solid fa-user"></i>
                            <span>User</span>
                        </div>
                    </NavLink>
                </div>
            </nav>
        </>
    )

}