import React from 'react';
import footerStyles from '../styles/Footer.module.css';

function Footer(props) {
    return (
        <div className = {footerStyles.footerContainer}>
            <div className = {footerStyles.footerCol}>
                <p className = {footerStyles.footerTitle}>Support</p>
                <hr />
                <p>Help Center</p>
                <p>Safety Info</p>
                <p>Covid-19 Guidelines</p>
                <p>Cancellation Options</p>
            </div>
            <div className = {footerStyles.footerCol}>
                <p className = {footerStyles.footerTitle}>Community</p>
                <hr />
                <p>Disaster Relief</p>
                <p>Support Refugees</p>
                <p>Diversity and Belonging</p>
                <p>Combat Discrimination</p>
            </div>
            <div className = {footerStyles.footerCol}>
                <p className = {footerStyles.footerTitle}>Hosting</p>
                <hr />
                <p>Try Hosting</p>
                <p>FAQ</p>
                <p>Hosting Guidelines</p>
            </div>
            <div className = {footerStyles.footerCol}>
                <p className = {footerStyles.footerTitle}>About</p>
                <hr />
                <p>Our Story</p>
                <p>Careers</p>
                <p>Letters from our Founders</p>
                <p>Investors</p>
                <p>AirCnC Prenium</p>
            </div>
        </div>
    );
}

export default Footer;