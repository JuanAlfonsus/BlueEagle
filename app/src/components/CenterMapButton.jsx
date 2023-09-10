

export default function CenterMapButton({ handleCenter }) {

    return (
        <>
            <div className="center-map-button" onClick={handleCenter}>
                <i class="fa-solid fa-location-dot"></i>
            </div>
        </>
    )
}