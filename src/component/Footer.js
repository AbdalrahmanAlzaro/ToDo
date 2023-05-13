import React from 'react'
import { Link } from 'react-router-dom'

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

                            <Link to="/" className="link-1">Home</Link>
                            <Link to="TaskPage">Task</Link>
                            <Link to="AboutUs">About Us</Link>
                            <Link to="ContactUs">Contact Us</Link>

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
                            <p>0782111991</p>
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
                            A Todo app is a type of application that helps users manage and organize their tasks or to-do items. It provides a convenient way to keep track of tasks, set priorities, and mark tasks as completed.
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