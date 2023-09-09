

export default function PromoCard({ promo }) {
    const { img, nama, published_at } = promo
    let newDate = new Date(published_at)
    newDate = newDate.toLocaleDateString()

    return (
        <>
            <div className="promo-card">
                <div className="promo-card-head">

                    <div className="promo-image">
                        <img src={img.formats.small.url} alt="promo" style={{ objectFit: 'contain', objectPosition: 'center', height: '100%', width: '100%', borderRadius: '7px' }} />
                    </div>

                    <div className="promo-body">
                        {/* date and title */}
                        <div className="promo-wrap-date">
                            <span className="promo-title">{nama}</span>
                            <span className="promo-date">{newDate}</span>
                        </div>

                        {/* button use */}
                        <div>
                            <button className="button button-primary">Use</button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}