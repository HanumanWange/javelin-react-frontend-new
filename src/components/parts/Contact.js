import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="row d-flex justify-content-start align-items-center pl-3 mt-4">
                <div className="contact-btn">
                    <button type="button" className="btn btn-success btn-font" data-toggle="modal"
                        data-target="#exampleModal">
                        Whatsapp
                    </button>
                </div> 
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Contact Us
                            </h5>
                            <button type="button" className="close" data-dismiss="modal"
                                aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="container">
                                <form id="myForm">
                                    <div className="mb-3">
                                        <label for="name">Name</label>
                                        <input type="text" id="name" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email">Email</label>
                                        <input type="text" id="email" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="message">Message</label>
                                        <textarea id="message" className="form-control" name="message"
                                            rows="4"
                                            cols="50">                                                    </textarea>
                                    </div>

                                    <button type="submit" className="btn btn-font btn-info">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact