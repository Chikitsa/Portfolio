import React, { useState } from 'react'

const Contact = () => {
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })

    
    const onChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div>
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Thank you for visiting my space on the web. Feel free to explore my work and get in touch. I'm here to listen, create, and inspire..</p>
          </div>
          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Arnala,Virar</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>chikitsa.nijai03@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+85 2522 1411</p>
                </div>
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  style={{ border: '0', width: '100%', height: '290px' }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" required onChange={onChange}/>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" onChange={onChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" onChange={onChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" name="message" rows="10" onChange={onChange} required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact