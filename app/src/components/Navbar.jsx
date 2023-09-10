import { useNavigate } from "react-router-dom"


export default function Navbar({ name, withArrow }) {

    const navigate = useNavigate()

    return (
        <>
            <nav id="navbar">
                <div className="text-white" id="navbar-title" style={{ display: "flex", marginTop: 20 }}>
                    {
                        withArrow ? 
                        <i onClick={() => navigate('/ride')} className="fa-solid fa-arrow-left" style={{ fontSize: '20px', height: '20px' }}></i>
                        : 
                        ''
                    }
                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{name}</span>
                </div>
            </nav>
        </>
    )
}