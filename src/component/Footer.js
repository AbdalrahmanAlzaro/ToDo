import React from 'react'

const Footer = () => {
    return (
        <div>
            <>

                <footer className=" mt-5 footer-distributed">
                    <div className="footer-left">
                        <h3>
                            To<span>Do</span>
                        </h3>
                        <p className="footer-links">
                            <a href="#" className="link-1">
                                Home
                            </a>
                            <a href="#">Blog</a>
                            <a href="#">Pricing</a>
                            <a href="#">About</a>
                            <a href="#">Faq</a>
                            <a href="#">Contact</a>
                        </p>
                        <p className="footer-company-name">ToDo © 2023</p>
                    </div>
                    <div className="footer-center">
                        <div>
                            <i className="fa fa-map-marker" />
                            <p>
                                How to contact us ?
                            </p>
                        </div>
                        <div>
                            <i className="fa fa-phone" />
                            <p>0790012045</p>
                        </div>
                        <div>
                            <i className="fa fa-envelope" />
                            <p>
                                <a href="mailto:support@company.com">abdalrahman.h.alzaro@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <p className="footer-company-about">
                            <span>About the company</span>
                            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod
                            convallis velit, eu auctor lacus vehicula sit amet.
                        </p>
                        {/* <div className="footer-icons">
                            <a href="#">
                                <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                                <i className="fa fa-linkedin" />
                            </a>
                            <a href="#">
                                <i className="fa fa-github" />
                            </a>
                        </div> */}
                    </div>
                </footer>
            </>

        </div>
    )
}

export default Footer