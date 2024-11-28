import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    {/* About Section */}
                    <div className="col-md-4">
                        <h5>About Newsnex</h5>
                        <p>
                            Newsnex brings you the latest and most trending news from across the world. 
                            Stay informed, stay updated!
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="/login" className="text-white text-decoration-none">Login</a></li>
                            <li><a href="/register" className="text-white text-decoration-none">Register</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Trending</a></li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>Email: support@newsnex.com</p>
                        <p>Phone: +91 9498824210</p>
                        <p>Address: 123 Newsnex Street, Coimbatore.</p>
                    </div>
                </div>

                <hr className="border-light" />
                <div className="text-center">
                    <p className="mb-0">© 2024 Newsnex. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
