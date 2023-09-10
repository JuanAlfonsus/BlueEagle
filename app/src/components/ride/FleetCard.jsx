import Car from '../../assets/car.png'
import Taxi from '../../assets/taxi.png'

export default function FleetCard({ fleet }) {
    const { name, seats, price } = fleet

    const convertIdr = (number) => {
        let res = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
        return res.split(',')[0]
    }

    return (
        <>
            <div className="fleet-card">
                <img src={Taxi} alt="" />

                <div className='fleet-content'>
                    <span className='fleet-title'>{name}</span>
                    <span className='fleet-person'><i className="fa-solid fa-person"></i> {seats} person</span>
                </div>

                <div className='fleet-price'>
                    <span>{convertIdr(price)}</span>
                </div>
            </div>
        </>
    )
}