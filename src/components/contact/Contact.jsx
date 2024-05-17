import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Contato</h2>
        <span className="section__subtitle">Entre em contato comigo</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Meios de Comunicação</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">vhcriscollo2001@gmail.com</span>

                        <a href="mailto:vhcriscollo2001@gmail.com" className="contact__button">Me chame <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">(31) 99929-5691</span>

                        <a href="https://wa.me//5531999295691" className="contact__button">Me chame <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-linkedin contact__card-icon"></i>

                        <h3 className="contact__card-title">LinkedIn</h3>
                        <span className="contact__card-data">Victor Hugo Moreira</span>

                        <a href="https://www.linkedin.com/in/victor-hugo-moreira-5ab559235/" className="contact__button">Me chame
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact