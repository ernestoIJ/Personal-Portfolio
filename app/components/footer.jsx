import "./footer.css"

import { EnvelopeIcon } from "@heroicons/react/outline"

export default function Footer() {
   return (
         <footer id="footer">
            <div className="">
               <div className="social-container">
                <a href="https://www.linkedin.com/in/ernestoibanezjr"><img src="/linkedin-fill.svg" alt="LinkedIn" className="icon-container"/></a>
                <a href="https://github.com/ernestoIJ"><img src="/github-line.svg" alt="Github" className="icon-container"/></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jribaneze@gmail.com"><img src="/mail-line.svg" alt="email" className="icon-container"/></a>
              </div>
            </div>
         </footer>
   );
}