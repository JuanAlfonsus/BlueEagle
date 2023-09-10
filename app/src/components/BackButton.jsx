import { useNavigate } from "react-router-dom"


export default function BackButton() {
    const navigate = useNavigate()

    const handleBack = (e) => {
        e.stopPropagation()
        navigate('/')
    } 

    return (
        <>
            <div className="round-button" onClick={handleBack}>
                <i className="fa-solid fa-arrow-left"></i>
            </div>
        </>
    )
}