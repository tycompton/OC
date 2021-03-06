import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMobile } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  return (
    <section className="location" id="directions">
      <div className="parallax-image2">
        <div className="location-wrapper">
          <div className="info">
            <div className="address">
              <div className="fontawesome-location">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <p className="address-paragraph">Roding Lane</p>
              <p className="address-paragraph">Chigwell</p>
              <p className="address-paragraph">Essex</p>
              <p className="address-paragraph">IG7 6BE</p>
            </div>
            <div className="telephone">
              <div className="fontawesome-location">
                <FontAwesomeIcon icon={faMobile} />
              </div>
                <p>020 8500 2477</p>
            </div>
          </div>
          <div className="map">      
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.718307882916!2d0.07191011554481565!3d51.62836907965519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a16cc011667f%3A0x8e52962f6e69cd79!2sOld+Chigwellians+Clubhouse!5e0!3m2!1sen!2suk!4v1539948372592"
              width="100%"
              height="400px"
              frameBorder="0"
              allowFullScreen="" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;