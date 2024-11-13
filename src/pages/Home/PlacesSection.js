import React from 'react';

function PlacesSection() {
  return (
    <section className='places-section container'>
      <div className='places-section__text-container'>
        <p className='accent-text'>Top Destination</p>
        <h2 className='section-title'>Search a best place in the world</h2>
        <p>
          Our dating website offers a range of features and benifits that make
          finding love online simple and enjoyable. With our advanced matching
          algorithm
        </p>
      </div>
      <div className='places-section__cards'>
        <div className='places-section__card'>
          <img src='/images/Qatar-places.png' alt='Qatar'></img>
          <div className='places-section__card-text'>
            <h3 className='places-section__card-title'>Qatar</h3>
            <p>196 Places</p>
          </div>
        </div>
        <div className='places-section__card'>
          <img src='/images/barbados-places.png' alt='Barbados'></img>
          <div className='places-section__card-text'>
            <h3 className='places-section__card-title'>Barbados</h3>
            <p>196 Places</p>
          </div>
        </div>
        <div className='places-section__card'>
          <img src='/images/hungary-places.png' alt='Hungary'></img>
          <div className='places-section__card-text'>
            <h3 className='places-section__card-title'>Hungary</h3>
            <p>196 Places</p>
          </div>
        </div>
        <div className='places-section__card'>
          <img src='/images/netherland-places.png' alt='Netherlands'></img>
          <div className='places-section__card-text'>
            <h3 className='places-section__card-title'>Netherlands</h3>
            <p>196 Places</p>
          </div>
        </div>
        <div className='places-section__card'>
          <img src='/images/uganda-places.png' alt='Uganda'></img>
          <div className='places-section__card-text'>
            <h3 className='places-section__card-title'>Uganda</h3>
            <p>196 Places</p>
          </div>
        </div>
        <div className='places-section__card'>
          <img src='/images/eritrea-places.png' alt='Eritrea'></img>
          <div className='places-section__card-text'>
            <h3 className='places-section__card-title'>Eritrea</h3>
            <p>196 Places</p>
          </div>
        </div>
        <div className='places-section__card'>
          <img src='/images/gambia-places.png' alt='Gambia'></img>
          <div className='places-section__card-text'>
            <h3 className='places-section__card-title'>Gambia</h3>
            <p>196 Places</p>
          </div>
        </div>
        <div className='places-section__card'>
          <img src='/images/lebanon-places.png' alt='Lebanon'></img>
          <div className='places-section__card-text'>
            <h3 className='places-section__card-title'>Lebanon</h3>
            <p>196 Places</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlacesSection;
