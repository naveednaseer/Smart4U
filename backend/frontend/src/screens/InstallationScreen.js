import React, { useState, useEffect } from 'react'
import DatePicker from 'react-date-picker'
import 'react-calendar/dist/Calendar.css';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";


const InstallationScreen = () => {
    const [date, setDate] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [product, setProduct] = useState("")
    const [time, setTime] = useState("")

    const history = useHistory();

    const selectDate = (date) => {
        setDate(date)
    }             

    let installation = {
        "date" : date,
        "name" : name,
        "email" : email,
        "number" : number,
        "address" : address,
        "product" : product,
        "time" : time,
    }
    

    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (window.confirm("Installation will be booked?")) {
        createInstallation()
        }
    }

    const createInstallation = async () => {
        fetch(`/api/installations/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(installation)
        })
        console.log('done')

        history.push('/');
        // window. location. reload()
        // instead of this navigate back to home page or shop
    }



    return (
        <div>


            <div className='mt-5 mr-5 mb-5 border-5'> 
                <form onSubmit={handleSubmit}>

                    <h3 className="text-center mb-5 mt-3">Book An Installation Appointment.</h3>
                    <div className="form-row">
                        
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName">Your Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={name} 
                                className="form-control" 
                                id="inputName" 
                                placeholder="Name" 
                                required = {true}
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Your Email</label>
                            <input 
                                type="email" 
                                name="email"  
                                className="form-control" 
                                id="inputEmail4" 
                                placeholder="Email" 
                                required 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputNumber">Your Phone Number</label>
                        <input 
                            type="text" 
                            name="number" 
                            className="form-control" 
                            id="inputNumber" 
                            placeholder="Enter your phone number" 
                            required 
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAddress2">Your Address</label>
                        <input 
                            type="text" 
                            name="subject" 
                            className="form-control" 
                            id="inputSubject" 
                            placeholder="Enter your address" 
                            required 
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>


                    <label htmlFor="inputItem">What Do You Want To Get Installed</label>
                    <select className="form-control" onChange={(e) => setProduct(e.target.value)}>
                        <option>Select item:</option>
                        <option>CCTV Camera</option>
                        <option>Wifi</option>
                        <option>Smart DoorBell</option>
                        <option>Thermostat</option>
                        <option>Ford</option>
                        <option>Honda</option>
                        <option>Jaguar</option>
                        <option>Land Rover</option>
                        <option>Mercedes</option>
                        <option>Mini</option>
                        <option>Nissan</option>
                        <option>Toyota</option>
                        <option>Volvo</option>
                    </select>
                    
                    <div className='shadow mb-5'>
                        <h3 className="text-center mt-3">Please Select A Date</h3>
                        <div >
                            <DatePicker 
                                className={"row d-flex justify-content-center shadow-sm p-5  m-5 rounded"}
                                onChange={selectDate}
                                value={date} 
                                minDate={new Date()}
                                required={true}
                                locale={'en-US'}
                                />
                        </div>
                        <u className="m-2"><h4 className="text-center">Selected Date:-  {date.toString().slice(0, 15)}</h4></u>
                    </div>
                    <div className="mt-2 shadow px-5 pb-5">
                        <h3 className="text-center mt-3">Please Select The Time</h3>

                        <div className="mb-3 form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked onChange={(e) => setTime("Anytime")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Anytime
                            </label>
                        </div>

                        <div className="mb-3 form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => setTime("Between 10:00 AM to 12:00 PM")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Between 10:00 AM to 12:00 PM
                            </label>
                        </div>

                        <div className="mb-3 form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={(e) => setTime("Between 12:00 PM to 2:00 PM")}  />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Between 12:00 PM to 2:00 PM
                            </label>
                        </div>

                        <div className="mb-3 form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => setTime("Between 2:00 AM to 4:00 PM")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Between 2:00 AM to 4:00 PM
                            </label>
                        </div>

                        <div className="mb-3 form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={(e) => setTime("Between 4:00 AM to 6:00 PM")}  />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Between 4:00 AM to 6:00 PM
                            </label>
                        </div>

                    </div>
                    <button type="submit"  className="mt-5 btn btn-primary mb-5">
                        Book Now 
                    <i className="fas fa-paper-plane ml-1" />
                    </button>
                </form>

            </div>

        </div>
    )
}

export default InstallationScreen
