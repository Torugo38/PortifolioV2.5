import React from 'react'
import "./projetos.css"



const Projetos = () => {
  return (
    <section id="projects">
      <h2 className="section__title">Projetos</h2>
      <span className="section__subtitle">Meus últimos projetos</span>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project-1.png"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Projeto Drunk&Drink
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open("https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti2-0924100-drunk-drink")
                }
              >
                Github
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src=""
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Projeto Calculadora Simples</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open("https://github.com/")}
              >
                Github
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project-3.png"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open("https://github.com/")}
              >
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projetos