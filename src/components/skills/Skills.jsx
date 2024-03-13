import React from 'react'
import "./skills.css"
import Front from './Front'
import BackEnd from './BackEnd'
import Ferramentas from './Ferramentas'



const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Meu nível técnico</span>

        <div className="skills__container container grid">
          <Front />
          <BackEnd />
          <Ferramentas />
        </div>
    </section>
  )
}

export default Skills