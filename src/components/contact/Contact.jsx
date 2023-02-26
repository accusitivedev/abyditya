import React from 'react'
import { toast } from 'react-toastify';

export default function Contact() {

    const alrt = () => toast('Coming Soon!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <h4 data-aos="fade-right" className="title">🎉 Contact</h4>
                        <h1 className="subtitle mt-1">Let&apos;s work together</h1>
                        <p className="description">contact details</p>
                        <ul>
                            <li><i className="fa-light fa-envelope"></i> mail@abyditya.space</li>
                            <li><i className="fa-light fa-location-dot"></i> indonesia</li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="alert alert-secondary my-alert d-none" role="alert">
                            <strong>Success!</strong> we just received your contact
                        </div>
                        <form name="contact">
                            <div className="mb-3">
                                <label className="form-label"><span className="label-number">01</span> What&apos;s your
                                    name?</label>
                                <input type="text" placeholder="Name *" className="form-control" required />
                                <hr className="form-hr" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><span className="label-number">02</span> What&apos;s your
                                    email?</label>
                                <input name="email" type="email" placeholder="Email *" className="form-control" required />
                                <hr className="form-hr" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><span className="label-number">03</span> Your
                                    message</label>
                                <textarea name="message" rows={3} placeholder="Hello abyan, can you help me with... *" className="form-control" required></textarea>
                                <hr className="form-hr" />
                            </div>
                            <button onClick={alrt} className="btn-kirim btn btn-submt">Send it!</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
