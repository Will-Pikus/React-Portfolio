import React from "react";
import '../styles/Contact.css';

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-card">
                <h2 className="cont-header">LETS TALK.</h2>
                <h3 className="cont-style">Name:</h3>
                <input className="name cont-style"></input>
                <h3 className="cont-style">Email:</h3>
                <input className="email-input"></input>
                <h3 className="cont-style">Message:</h3>
                <input className="message-input"></input>
                <button className="button-contact">Submit</button>
            </div>
        </div>

    );
}