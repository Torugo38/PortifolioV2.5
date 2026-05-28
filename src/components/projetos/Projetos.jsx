import React from 'react'
import "./projetos.css"
import project1Img from "../../assets/logoTranparente-B-7dha17.png";
import project2Img from "../../assets/project-2.jpg";
import project3Img from "../../assets/project-3.png";
import project4Img from "../../assets/laikaLoadLogo.png";




const Projetos = () => {
  return (
    <section id="projetos">
      <h2 className="section__title">Projetos</h2>
      <span className="section__subtitle">Veja Meus Últimos</span>
      <div className="projetos-container">
        <div className="projeto-box">
          <img src={project1Img} alt="Project 1" className="project-img" />
          <h3 className="project-title">VTL site V2</h3>
            <a href="https://vtl-site-self.vercel.app/?utm_source=chatgpt.com" className="projeto__button" target="_blank" rel="noopener noreferrer">Site
                        <i className="bx bx-right-arrow-alt projeto__button-icon"></i></a>                
        </div>
        <div className="projeto-box">
          <img src={project2Img} alt="Project 2" className="project-img" />
          <h3 className="project-title">API Caixa Eletrônico</h3>
          <a href="https://github.com/Torugo38/api-caixa-eletronico" className="projeto__button" target="_blank" rel="noopener noreferrer">Github
                        <i className="bx bx-right-arrow-alt projeto__button-icon"></i></a>
        </div>
        <div className="projeto-box">
          <img src={project3Img} alt="Project 3" className="project-img" />
          <h3 className="project-title">Portfólio</h3>
          <a href="https://github.com/Torugo38/PortifolioV2.5" className="projeto__button" target="_blank" rel="noopener noreferrer">Github
                        <i className="bx bx-right-arrow-alt projeto__button-icon"></i></a>
        </div>
        <div className="projeto-box">
          <img src={project4Img} alt="Project 4" className="project-img" />
          <h3 className="project-title">Laika Load (TCC)</h3>
            <a href="https://github.com/Torugo38/tcc2" className="projeto__button" target="_blank" rel="noopener noreferrer">Github
                        <i className="bx bx-right-arrow-alt projeto__button-icon"></i></a>                
        </div>
      </div>
    </section>
  )
}

export default Projetos