import React from 'react'
import "./Footer.css"
import "./responsive-footer.css"
import { assets } from '../../src/assets/assets'
export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="left-footer">
                    <div className="left-sub-footer">
                        <img src={assets.logo} alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam delectus corrupti placeat! Reiciendis doloremque quod illo enim libero. Perferendis enim maiores fugiat possimus obcaecati suscipit asperiores et id exercitationem doloribus.</p>
                        <div className='footer-social-logo'>
                            <img src={assets.facebook_icon} alt="" />
                            <img src={assets.twitter_icon} alt="" />
                            <img src={assets.linkedin_icon} alt="" />
                        </div>
                    </div>
                </div>
                <div className="center-footer">
                    <h1>Company</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="right-footer">
                    <h1>Get In Touch</h1>
                    <div className='footer-para'>
                        <p className='footer-para1'>+12-789456616</p>
                        <p className='footer-para2'>contact@gmail.com</p>
                    </div>

                </div>
            </div>
        </>
    )
}
