import React from 'react';

const AboutPhotos: React.FC = () => {
  return (
    <section className="sec-sm bg-g" id="team-photos">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-right">
            <div className="sec-img">
              <img src="/team-working.jpeg" alt="Team working together" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="sec-img">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=75" alt="Software development" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhotos;
