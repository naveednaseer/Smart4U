import React, { useRef }from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bb9s0kj', 'template_f8ke8es', form.current, 'user_t3lNZUgtMkilG7luo3dPm')
            .then((result) => {
                console.log(result.text);
                alert("Email Sent successfully !")
            }, (error) => {
                console.log(error.text);
            })
    }

    return (
        <div style={{marginTop: '100px'}}>
            <div className='col-md-6 mr-5 border-right border-5 float-left'> 
                <form  ref={form} onSubmit={sendEmail}>

                    <div className="form-row">
                        
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Your Email</label>
                            <input type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email" required />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputName">Your Name</label>
                            <input type="text" name="name" className="form-control" id="inputName" placeholder="Name" required />
                        </div>

                    </div>

                    <div className="form-group">
                        <label for="inputNumber">Your Phone Number</label>
                        <input type="text" name="number" className="form-control" id="inputNumber" placeholder="Enter your phone number" required />
                    </div>
                    <div className="form-group">
                        <label for="inputAddress2">Subject</label>
                        <textarea rows={10} type="text" name="subject" className="form-control" id="inputSubject" placeholder="What do you want to tell us?" required />
                    </div>
                    
                    <button type="submit" className="btn btn-primary mb-5">
                        Send 
                        <i className="fas fa-paper-plane ml-1" />
                    </button>

                </form>



            </div>

            <div>
                <p className="mt-3">
                    <i className="fas fa-phone-volume fa-2x" />
                    <h5>Call us on: <a href="/department#/contact" >987654321</a> </h5>
                </p>
                <p className="mt-3">
                    <i className="fas fa-envelope fa-2x" />
                    <h5>Email us on: <a href={"mailto: Smart4U@email.com"} target="_blank">Smart4U@email.com</a></h5>
                </p>
                <p className="mt-3">
                    <i className="fab fa-instagram-square fa-2x" />
                    <h5>follow us on instagram: <a href="https://www.instagram.com/Smart4U/" target="_blank">@Smart4U</a></h5>
                </p>
                <p className="mt-3">
                    <i className="fab fa-facebook-square fa-2x" />
                    <h5>Check us out on facebook: <a href="https://www.facebook.com/Smart4U/" target="_blank">/Smart4U</a></h5>
                </p>
                <p className="mt-3">
                    <i className="fab fa-twitter-square fa-2x" />
                    <h5>Check us out on facebook: <a href="https://www.twitter.com/Smart4U/" target="_blank">@Smart4U</a></h5>
                </p>
            </div>


        </div>
    )
}

export default Contact

