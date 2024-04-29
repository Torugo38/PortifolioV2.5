import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i class='bx bx-award about__icon'></i>

        <h3 className="about__title">Open to Work</h3>
        <span className="about__subtitle">Livre </span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>

        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">Back-End</span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>

        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">Front-end</span>
      </div>
    </div>

  )
}

export default Info