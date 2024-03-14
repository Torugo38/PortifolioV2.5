import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
           <h1 className="footer__title">Torugo</h1> 

           <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">Sobre</a>
            </li>

            <li>
                <a href="#projetos" className="footer__link">Projetos</a>
            </li>

            <li>
                <a href="#skills" className="footer__link">Skills</a>
            </li>

           </ul>

           <div className="footer__social">
           <a href="https://www.instagram.com/vhvictorhugo10/" className="footer__social-link" target='_blank'>
                <i class='uil uil-instagram'></i>
            </a>

           <a href="https://www.linkedin.com/in/victor-hugo-moreira-5ab559235/" className="footer__social-link" target='_blank'>
                <i class="uil uil-linkedin-alt"></i>
            </a>
            
            <a href="https://github.com/Torugo38" className="footer__social-link" target='_blank'>
                <i class="uil uil-github-alt"></i>
            </a>
           </div>

           <span className="footer__copy">
           Copyright &#169; Victor Hugo Criscollo 😈😈😈😈
           </span>
        </div>
    </footer>
  )
}

export default Footer