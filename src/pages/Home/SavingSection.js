import React from 'react';
import { Link } from 'react-router-dom';

function SavingSection() {
  return (
    <section className='saving-section big-container'>
      <div className='saving-section__container container'>
        <h2 className='saving-section__title'>
          Start Saving on Your Travel Budget
        </h2>
        <Link to='/contact'>
          <button className='read-more-button'>
            <img src='/images/contact-us-button.png' alt='Contact Us'></img>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default SavingSection;
