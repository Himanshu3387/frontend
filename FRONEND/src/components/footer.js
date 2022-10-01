import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-white text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom  text-white text-dark" style={{ backgroundColor: '#7431F8' }}>
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <Link to="" className="me-4" style={{color: 'white'}}>
                            <ion-icon name="logo-facebook"></ion-icon>
                        </Link>
                        <Link to="" className="me-4" style={{color: 'white'}}>
                            <ion-icon name="logo-twitter"></ion-icon>
                        </Link>
                        <Link to="" className="me-4" style={{color: 'white'}}>
                            <ion-icon name="logo-google"></ion-icon>
                        </Link>
                        <Link to="" className="me-4" style={{color: 'white'}}>
                            <ion-icon name="logo-instagram"></ion-icon>
                        </Link>
                        <Link to="" className="me-4" style={{color: 'white'}}>
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </Link>
                        <Link to="" className="me-4" style={{color: 'white'}}>
                            <ion-icon name="logo-github"></ion-icon>
                        </Link>
                    </div>
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 shadow-lg bg-body rounded-5">
                                <img src="E_Logo.png" className="img-fluid ps-5" alt="..." style={{height: 200}} />
                                <h6 className="text-uppercase fw-bold mb-4 text-center">
                                    Elearning System
                                </h6>
                                <p className="text-center">
                                    TRUST AND EXCELLENCE SINCE 2019
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Our Services</h6>
                                <p>
                                    <Link to="#!" className="text-reset">
                                        online learning
                                    </Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">
                                        Enhance the quality of learning and teaching
                                    </Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">
                                        Meet the learning style or needs of students
                                    </Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">
                                        Online learning accommodates everyone's needs
                                    </Link>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Our Team</h6>
                                <p>
                                    <Link to="#!" className="text-reset">
                                        Karima Shaikh
                                    </Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">
                                        Aditi Dinde
                                    </Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">
                                        Himanshu Kadam
                                    </Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">
                                        Sahil Ekal
                                    </Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p>
                                    <span><ion-icon name="location" style={{ fontSize: 25 }}></ion-icon></span>&nbsp;&nbsp;phase 1, Pune
                                </p>
                                <p>
                                    <span><ion-icon name="call" style={{ fontSize: 25 }}></ion-icon></span>&nbsp;&nbsp;+ 91 9856475658
                                </p>
                                <p>
                                    <span><ion-icon name="mail" style={{ fontSize: 25 }}></ion-icon></span>
                                    &nbsp;&nbsp;Elearning@info.com
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="text-center p-4 text-white" style={{ backgroundColor: '#7431F8' }}>
                    © 2021 Copyright :
                    <Link className="text-reset fw-bold " to="/home">
                        &nbsp;ElearningSys.com
                    </Link>
                </div>
            </footer>
        </div>

    )
}

export default Footer;