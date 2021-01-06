import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: ''
    });

    const InputEvent = (event) => {

        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });

    }

    const formSubmit = (event) => {

        event.preventDefault();
        // alert(`My name is ${data.fullname}. My mobile number is ${data.phone}.My emailId is ${data.email}. And my message to you ${data.msg}`);
    }

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center main_line'>Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form>

                            <form onSubmit={formSubmit}>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1" className='labels'>Full Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"
                                        name='fullname' value={data.fullName} onChange={InputEvent} />
                                </div>
                                <br/>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1" className='labels'>Phone</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enyer your mobile number"
                                        name='phone' value={data.phone} onChange={InputEvent} />
                                </div>
                                <br/>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1" className='labels'>Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                        name='email' value={data.email} onChange={InputEvent} />
                                </div>
                                <br/>

                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1" className='labels'>Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="..." rows="3"
                                        name='msg' value={data.msg} onChange={InputEvent} ></textarea>
                                </div>
                                <br/>

                                <div className='col-12 text-center'>
                                    <button className="btn btn-outline-primary" type="submit">Submit Form</button>
                                </div>

                            </form>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Contact;