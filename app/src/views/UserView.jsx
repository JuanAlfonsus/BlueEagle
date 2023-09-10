import { useNavigate } from "react-router-dom"
import Navigation from "../components/home/Navigation"
import Navbar from "../components/Navbar"


export default function UserView() {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <>
            <Navbar name={'User'} />

            <div className="container-with-navbar" style={{ padding: '20px' }}>
                <button className="button button-primary continue-button" onClick={logout}>Logout</button>
            </div>
            <Navigation />
        </>
    )
}