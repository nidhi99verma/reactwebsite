import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/web.png';

const Card = (prop) => {

    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>

                <div className="card" >
                    <img src={prop.imgsrc} className="card-img-top" alt={prop.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{prop.title}</h5>
                        <p className="card-text">{prop.line}</p>
                        <NavLink to='/about' className="btn btn-primary">Read More</NavLink>
                    </div>
                </div>

            </div>
        </>
    );

}

export default Card;