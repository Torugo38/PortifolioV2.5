import React, { useState } from 'react'
import "./qualificacao.css"

const Qualificacao = () => {
  const[toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="qualificacao section">
        <h2 className="section__title">Qualificações</h2>
        <span className="section__subtitle">Minha jornada</span>

        <div className="qualificacao__container container">
            <div className="qualificacao__tabs">
                <div className={toggleState === 1 ? "qualificacao__button qualificacao__active button--flex" : "qualificacao__button button--flex"}
                onClick={() => toggleTab(1)}>
                  <i className="uil uil-graduation-cap qualificacao__icon"></i> Ensino
                </div>

                <div className={toggleState === 2 ? "qualificacao__button qualificacao__active button--flex" : "qualificacao__button button--flex"}
                onClick={() => toggleTab(2)}>
                  <i className="uil uil-briefcase-alt qualificacao__icon"></i> Experiência
                </div>
            </div>

            <div className="qualificacao__sections">
              <div className={toggleState === 1 ? "qualificacao__content qualificacao__content-active" : "qualificacao__content"}>
                <div className="qualificacao__data">
                  <div>
                    <h3 className="qualificacao__title">Engenharia de Software</h3>
                    <span className="qualificacao__subtitle">Graduação PUC Minas</span>
                    <div className="qualificacao__calender">
                      <i className="uil uil-calender"></i> 2021 - Até o momento
                    </div>
                  </div>

                  <div>
                    <span className="qualificacao__rounder"></span>
                    <span className="qualificacao__line"></span>
                  </div>
                </div>
                
                <div className="qualificacao__data">
                  <div></div>
                  
                  <div>
                    <span className="qualificacao__rounder"></span>
                    {/* linhas */}
                  </div>
                  <div>
                    <h3 className="qualificacao__title">Administração de Banco de Dados</h3>
                    <span className="qualificacao__subtitle">Fundação Bradesco</span>
                    <div className="qualificacao__calender">
                      <i className="uil uil-calender"></i> 2024 - 2024
                    </div>
                  </div>
                </div>

              </div>

              <div className={toggleState === 2 ? "qualificacao__content qualificacao__content-active" : "qualificacao__content"}>
                <div className="qualificacao__data">
                  <div>
                    <h3 className="qualificacao__title">Manutenção de computadores</h3>
                    <span className="qualificacao__subtitle">Autônomo</span>
                    <div className="qualificacao__calender">
                      <i className="uil uil-calender"></i> 2018 - 2019
                    </div>
                  </div>

                  <div>
                    <span className="qualificacao__rounder"></span>
                    <span className="qualificacao__line"></span>
                  </div>
                </div>
                
                <div className="qualificacao__data">
                  <div></div>
                  
                  <div>
                    <span className="qualificacao__rounder"></span>
                    <span className="qualificacao__line"></span>
                  </div>
                  <div>
                    <h3 className="qualificacao__title">Estagiário de TI</h3>
                    <span className="qualificacao__subtitle">Evolua Energia</span>
                    <div className="qualificacao__calender">
                      <i className="uil uil-calender"></i> 03/2023 - 07/2023
                    </div>
                  </div>

                  
                </div>

                <div className="qualificacao__data">
                  <div>
                    <h3 className="qualificacao__title">Monitoria de Sistemas Operacionais</h3>
                    <span className="qualificacao__subtitle">PUC Minas</span>
                    <div className="qualificacao__calender">
                      <i className="uil uil-calender"></i> 02/2023 - 07/2023
                    </div>
                  </div>

                  <div>
                    <span className="qualificacao__rounder"></span>
                    <span className="qualificacao__line"></span>
                  </div>
                </div>

                <div className="qualificacao__data">
                  <div></div>
                  
                  <div>
                    <span className="qualificacao__rounder"></span>
                    {/* linhas */}
                  </div>
                  <div>
                    <h3 className="qualificacao__title">Desenvolvedor Full Stack</h3>
                    <span className="qualificacao__subtitle">MedLogic</span>
                    <div className="qualificacao__calender">
                      <i className="uil uil-calender"></i> 07/2024 - 05/2025
                    </div>
                  </div>

                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Qualificacao