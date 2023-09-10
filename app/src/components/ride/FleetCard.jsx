import { useEffect, useState } from 'react'
import Taxi from '../../assets/taxi.png'

export default function FleetCard({ fleet, selectedOption, handleOptionChange, distance }) {
    const {  id, name, seats, price } = fleet

    const convertIdr = (number) => {
        let res = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
        return res.split(',')[0]
    }

    const newPrice = convertIdr(distance * price)
    const newTotal = distance * price


    return (
        <>
            <div className={ selectedOption === id ? 'fleet-card active' : 'fleet-card' } onClick={() => handleOptionChange({ id, newTotal, name })}>
                <img src={Taxi} alt="" />

                <div className='fleet-content'>
                    <span className='fleet-title'>{name}</span>
                    <span className='fleet-person'><i className="fa-solid fa-person"></i> {seats} person</span>
                </div>

                <div className='fleet-price'>
                    <span>{newPrice}</span>
                </div>
            </div>
        </>
    )
}