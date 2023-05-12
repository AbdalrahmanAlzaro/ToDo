import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <>
                <link
                    href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
                    rel="stylesheet"
                    id="bootstrap-css"
                />
                {/*---- Include the above in your HEAD tag --------*/}
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
                    integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
                    crossOrigin="anonymous"
                />
                <br />
                <br />
                <br />
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 pb-5">
                            {/*Form with header*/}
                            <form action="mail.php" method="post">
                                <div className="card border-primary rounded-0">
                                    <div className="card-header p-0">
                                        <div className="bg-info text-white text-center py-2">
                                            <h3>
                                                <i className="fa fa-envelope" /> Contact us
                                            </h3>
                                            <p className="m-0">Feel free to ask </p>
                                        </div>
                                    </div>
                                    <div className="card-body p-3">
                                        {/*Body*/}
                                        <div className="form-group">
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fa fa-user text-info" />
                                                    </div>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nombre"
                                                    name="nombre"
                                                    placeholder="Enter your email"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fa fa-envelope text-info" />
                                                    </div>
                                                </div>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="nombre"
                                                    name="email"
                                                    placeholder="email@gmail.com"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fa fa-comment text-info" />
                                                    </div>
                                                </div>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Enter your massege"
                                                    required=""
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <input
                                                type="submit"
                                                defaultValue="Enviar"
                                                className="btn btn-info btn-block rounded-0 py-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {/*Form with header*/}
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default ContactUs