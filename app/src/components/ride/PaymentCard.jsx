import Cash from "../../assets/cash.svg"
import MasterCard from "../../assets/mastercard.svg"
import Ovo from "../../assets/ovo.svg"

export default function PaymentCard({ payment, handleOptionChange, selectedOption }) {
    const { id, name } = payment

    function changeIcon() {
        switch (name) {
            case 'Cash':
                return Cash
            case 'Credit Card':
                return MasterCard
            case 'OVO':
                return Ovo
        }
    }
    
    return (
        <>
            <div className={ selectedOption === id ? 'checkout-card active' : 'checkout-card' } onClick={() => handleOptionChange({ id, name })}>
                <img src={changeIcon()} alt="" style={{ width: '45px', height: '45px' }} />

                <div className='fleet-content'>
                    <span className='fleet-title'>{ name }</span>
                </div>
            </div>
        </>
    )
}