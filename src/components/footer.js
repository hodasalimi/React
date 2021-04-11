import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => (
    <>
    <footer>
       <div className="container col-sm-12 pl-5">
            <div className="header-row row col-sm-12">
                <div className="col-sm-3">Navigation</div>
                <div className="col-sm-3">Selling online</div>
                <div className="col-sm-3">About MyOnlineStore</div>
                <div className="col-sm-3">Need help?</div>
            </div>
            <div className="row col-sm-12 ">
                <Link className="link-item col-sm-3    text-decoration-none">Feautures</Link>
                <Link className="link-item col-sm-3    text-decoration-none">How to start online store</Link>
                <Link className="link-item col-sm-3    text-decoration-none">About us</Link>
                <Link className="link-item col-sm-3    text-decoration-none">Check ourFAQ</Link>
            </div>
            <div className="row col-sm-12 ">
                <Link className="link-item col-sm-3    text-decoration-none">Showcase</Link>
                <Link className="link-item col-sm-3    text-decoration-none">Free online store</Link>
                <Link className="link-item col-sm-3    text-decoration-none">Partners</Link>
                <Link className="link-item col-sm-3    text-decoration-none"><i class="fas fa-envelope-open-text pr-1"></i>Send us an email</Link>
            </div>
            <div className="row col-sm-12 ">
                <Link className="link-item col-sm-3    text-decoration-none">Pricing</Link>
                <Link className="link-item col-sm-3    text-decoration-none">POS system</Link>
                <Link className="link-item col-sm-3    text-decoration-none">Status page</Link>
            </div>
            <div className="row col-sm-12 ">
                <Link className="link-item col-sm-3    text-decoration-none"></Link>
                <Link className="link-item col-sm-3    text-decoration-none">PREMIUM</Link>
            </div>
            <div className="subscribe-container col-sm-12 row container pl-3">
                <div className="header-row row col-sm-12 pl-4">
                    Inspiration and knowledge in your mailbox?
                    </div>
                   <div className="col-sm-8 pl-2">
                   <form className="subscribe-form ">
                        <input className="email-input form-controll text-left mt-3" type="text" name="email"></input>
                        <label className="submit-btn" for="email">Keep me updated</label>
                    </form>
                    </div>
                <div className="header-row row social-media col-sm-4">
                <Link className="link-item display-4"><i class="fab fa-facebook"></i></Link>
                <Link className="link-item"><i class="fab fa-instagram display-4 pl-2"></i></Link>
                <Link className="link-item"><i class="fab fa-twitter display-4 pl-2"></i></Link>
                </div>
                
            </div>
       </div>
    </footer>
    </>

)
export default Footer;