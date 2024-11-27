import React from "react";

function ContactInfoSection() {
  return (
    <section className="contact-section container">
      <div className="contact-section__info">
        <p className="accent-text">get to know us</p>
        <h2 className="section-title">Experience the World With Triptopia</h2>
        <p>
          Triptopia was born out of a shared passion for exploration and a
          desire to create meaningful travel experiences. We believe travel is
          more than just visiting a place;
        </p>
        <p className="contact-section__quote">
          The world is a book and those who do not travel read only one page.
        </p>
        <ul className="contact-section__list">
          <li className="contact-section__list-item">
            <svg className="contact-section__icon">
              <use href='/images/icons.svg#icon-plane'></use>
            </svg>
            <p className="contact-section__list-text">To curate personalized itineraries</p>
          </li>
          <li className="contact-section__list-item">
            <svg className="contact-section__icon">
              <use href='/images/icons.svg#icon-plane'></use>
            </svg>
            <p className="contact-section__list-text">We believe travel fosters understanding</p>

          </li>
        </ul>
        <button className="orange-button">Discover More</button>
      </div>
      <div className="contact-section__photo">
        <img src='/images/contact-page-photo.png' alt="Tourists" />
      </div>
    </section>
  );
}

export default ContactInfoSection;
