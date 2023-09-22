import React from "react";

import mapImg from '../../../assets/img/bg/map-contact.png';
import contactHeader from '../../../assets/img/bg/contant-hd.png';
import Form from "../../Utilities/Form/Form";

import { Link } from "react-router-dom";




const ContactUs = () => {

    const branceAddress = [
        {
            branceName: 'Gunja Gold Co Ltd',
            location: 'Dhaka In Twin Tower Concord Shopping Complex',
            openingTime: '81 Moo, 8 Muen Si',
            email: 'gunjagold@gmail.com',
            phone: '065397 9851'
        },
       
    ]

    console.log(branceAddress)


    return (
        <React.Fragment>

            <section id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-info wow fadeInLeft animated" data-animation="fadeInRight" data-delay=".4s">
                                <div className="section-title center-align">
                                    <h2>
                                        {'Address'} <br /> <span>{'information'}</span>
                                    </h2>
                                    <p>{'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</p>
                                </div>
                                <div className="row mt-50">
                                                <div className="col-lg-6 contact_info">
                                                    <h4>{branceAddress[0].branceName}</h4>
                                                    <p>{branceAddress[0].location}</p>
                                                    <p>{branceAddress[0].openingTime}</p>
                                                    <p>{branceAddress[0].email}</p>
                                                    <p>{branceAddress[0].phone}</p>
                                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-bg02 wow fadeInRight animated">
                                <div className="section-title center-align">
                                    <h2>
                                        {'Get in Touch'}<br /> <span>{'Inform Us'} </span>
                                    </h2>
                                    <p>{'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</p>
                                </div>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );

}

export default ContactUs;