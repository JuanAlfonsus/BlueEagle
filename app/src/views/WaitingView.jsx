import '../styles/waiting.css'
import Waiting from '../assets/waiting.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function WaitingView() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/success')
        }, 3000)
    }, [])

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
                <h3 style={{ color: '#48034F', position: 'absolute', top: 200, zIndex: 999 }}>Driver is coming..</h3>
                <img src={Waiting} alt="" style={{ width: '60vw', height: '50vh', marginRight: '25px' }} className='animated-div' />
            </div>
        </>
    )
}