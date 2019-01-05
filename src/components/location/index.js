import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.051730544187!2d-90.1869649850891!3d38.62469097961362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f0607541e5b5%3A0x79ed2889c696a834!2sThe+Gateway+Arch!5e0!3m2!1sen!2sus!4v1546691753387" 
          width="100%" 
          height="500px" 
          frameBorder="0" 
          allowFullScreen
          title="The Arch"
      >
      </iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>  

  );

};

export default Location;

