import { useNavigate } from "react-router-dom"


export default function SectionBottom() {
    const navigate = useNavigate()

    const handleContinue = (e) => {
        e.preventDefault()
        navigate('/fleet')
    }

    return (
        <>
            <div id="section-bottom">
                <div style={{ width: '100%' }}>
                    <form className="flex flex-column items-center" id="destination-form" onSubmit={handleContinue}>
                        <input type="text" placeholder="Origin" style={{ width: '98%' }} className="bottom-form-input" />
                        <input type="text" placeholder="Destination" style={{ width: '98%' }} className="bottom-form-input" />
                        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px', width: '100%', gap: '20px' }}>
                            <button className="button button-secondary" id="schedule-button">Schedule</button>
                            <button type="submit" className="button button-primary" id="book-button">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}