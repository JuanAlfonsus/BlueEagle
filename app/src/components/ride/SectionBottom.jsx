

export default function SectionBottom() {

    return (
        <>
            <div id="section-bottom">
                <div style={{ width: '100%' }}>
                    <form className="flex flex-column items-center" id="destination-form">
                        <input type="text" placeholder="Origin" style={{ width: '98%' }} className="bottom-form-input" />
                        <input type="text" placeholder="Destination" style={{ width: '98%' }} className="bottom-form-input" />
                    </form>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px', width: '100%', gap: '20px' }}>
                    <button className="button button-secondary" id="schedule-button">Schedule</button>
                    <button className="button button-primary" id="book-button">Continue</button>
                </div>
            </div>
        </>
    )
}