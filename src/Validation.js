import React from 'react'
import { useData } from './Createcontect'

const Validation = () => {
 const {setMail, setPin, errors, handlevalidation, logacc, pin,mail } =useData()
  
  return (
    <div className="log">
                <form action="" className='card' onSubmit={handlevalidation}>
                    <label htmlFor="">Email address</label>
                    <input type="email" placeholder='jack@example.com' value={mail} onChange={(e) => setMail(e.target.value)} />

                <p>    {(logacc.find((e) => e.email != mail))? "your mail is not matched":""}</p>
                
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='******' value={pin} onChange={(e) => setPin(e.target.value)} />

                    <p>{(logacc.find((e) => e.password != pin))? "your password is wrong":""}</p>


                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}





                    <div> <button>LOGIN</button></div>
                </form>
            </div>
  )
}

export default Validation


