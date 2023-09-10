import { useNavigate } from 'react-router-dom'
import '../styles/success.css'

export default function SuccessView() {

    const navigate = useNavigate()
    
    const handleHome = () => {
        navigate('/')
    }

    return (
        <>
            {/* header */}
            <div id='confirmation-page'>
                <div id='receipt'>
                    <i className="fa-solid fa-circle-check round" style={{ color: '#22324f', fontSize: '100px', backgroundColor: 'white' }}></i>
                    <div className='title'>
                        <h3>You have arrived!</h3>
                    </div>

                    <div className='profile'>
                        <i class="fa-solid fa-user" style={{ color: '#48034F' }}></i>
                    </div>
                    <span>Your driver's name</span>
                    <div style={{ marginTop: '20px' }}>
                        <i className="fa-solid fa-star" style={{ color: '#48034F' }}></i>
                        <i className="fa-solid fa-star" style={{ color: '#48034F' }}></i>
                        <i className="fa-solid fa-star" style={{ color: '#48034F' }}></i>
                        <i className="fa-solid fa-star" style={{ color: '#48034F' }}></i>
                        <i className="fa-regular fa-star" style={{ color: '#48034F' }}></i>
                    </div>

                    <div style={{ padding: '20px', width: '90%' }}>
                        <button className="button button-primary continue-button" onClick={handleHome}>Return Home</button>
                    </div>
                </div>
            </div>
        </>
    )
}