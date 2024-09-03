import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i class='bx bx-award about__icon'></i>

        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">Front-End </span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>

        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">Back-End</span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>

        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">Suporte</span>
      </div>
    </div>

  )
}

export default Info