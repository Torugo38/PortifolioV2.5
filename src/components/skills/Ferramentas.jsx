import React from 'react'

const Ferramentas = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Ferramentas</h3>

        <div className="skills__box">
           <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Git</h3>
                    <span className="skills_level">Intermédio</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Windows</h3>
                    <span className="skills_level">Avançado</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">GitHub</h3>
                    <span className="skills_level">Avançado</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Visual Studio Code</h3>
                    <span className="skills_level">Avançado</span>
                </div>
                </div>
            </div> 
        </div>

    </div>
  )
}

export default Ferramentas