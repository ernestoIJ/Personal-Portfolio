import "./contact.css";

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="connect-w-me">
                 <a href="https://www.linkedin.com/in/ernestoibanezjr">
                    <div><img src="/linkedin_image.png"/></div>
                    Connect with me on LinkedIn
                 </a>
            </div>
            <div className="email-me">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jribaneze@gmail.com">
                    <div><img src="/gmail_image.png"/></div>
                    Feel free to email me
                  </a>
            </div>
        </div>
    );
}