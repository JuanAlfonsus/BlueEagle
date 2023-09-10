import { useState } from 'react'
import Google from '../assets/google.svg'
import Facebook from '../assets/facebook.svg'
import Logo from '../assets/eagle.png'
import { useNavigate } from 'react-router-dom'

export default function LoginView() {
    const navigate = useNavigate()

    const [form, setForm] = useState({})

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e) => {
        try {
            e.preventDefault()
            const { email, password } = form
            let response = await fetch('http://localhost:3001/login', {
                body: {
                    email,
                    password
                },
                method: 'post'
            })

            if (response.ok) {
                response = await response.json()
                localStorage.setItem('access_token', response.access_token)
                localStorage.setItem('name', response.name)
                navigate('/')
            } else {
                response = await response.json()
                throw (response)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section id="container-login">
                <div id="login-card">
                    <img src={Logo} alt="" style={{ height: 100, marginBottom: 20, marginTop: 20 }} />
                    <div className="bg-primary w-full flex justify-center">
                        <h4 className="text-white">Please input your email and password</h4>
                    </div>
                    <div>

                        {/* Form */}
                        <form onSubmit={(e) => handleLogin(e)} className="flex flex-column justify-center" id="form-login">
                            <div className="box-input">
                                <label>Email</label>
                                <input onChange={(e) => handleForm(e)} name='email' type="text" placeholder="Input email" className="form-input" />
                            </div>
                            <div className="box-input">
                                <label>Password</label>
                                <input onChange={(e) => handleForm(e)} name='password' type="password" placeholder="Input Password" className="form-input" />
                            </div>
                            <button className="button button-primary">Login</button>
                        </form>

                        <div className='flex flex-column justify-center items-center'>
                            <p>or login with: </p>
                            <div className='flex' style={{ gap: 50 }}>
                                <img src={Google} style={{ height: '35px', width: '35px' }} />
                                <img src={Facebook} style={{ height: '35px', width: '35px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}