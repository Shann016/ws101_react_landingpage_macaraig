import React from 'react';

const Info = () => {
  return (
    <section id="info" className="info-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="title">Web Development in Today's Generation</h1>
            <p className="description">Web development is crucial in today's generation as it enables individuals and businesses to create online presence, reach a wider audience, and provide services and products to customers worldwide.</p>
            <h2 className="subtitle">Why is Web Development Important?</h2>
            <p className="description">Web development is important because it:</p>
            <ul className="list">
              <li>Enables businesses to reach a global audience</li>
              <li>Provides a platform for individuals to showcase their skills and talents</li>
              <li>Facilitates online transactions and e-commerce</li>
              <li>Enhances customer experience and engagement</li>
            </ul>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;