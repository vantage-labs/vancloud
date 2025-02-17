import React from "react";

const Testimonial2 = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 offset-lg-3 text-center">
          <h5 className="s2">Testimonials</h5>
          <h2>
            Trusted by over 5,000 happy customers{" "}
            <span className="id-color">worldwide</span>
          </h2>
          <div className="spacer-20"></div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="de-image-text">
            <div className="d-text">
              <div className="d-rating mb10">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>Excellent Hosting Service!</h4>
              <blockquote>
                I have been using vntagelabs for my web hosting needs for over 5
                years now. I have never had any problems with their service.
                Their customer support is always responsive and helpful. I would
                recommend vntagelabs to anyone looking for a reliable web hosting
                provider.
                <span className="by">Stepanie Hutchkiss</span>
              </blockquote>
            </div>
            <img src="../../images/misc/p1.jpg" className="img-fluid" alt="Testimonial" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="de-image-text">
            <div className="d-text">
              <div className="d-rating mb10">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>Excellent Hosting Service!</h4>
              <blockquote>
                We have been using vntagelabs for our web hosting needs for several
                years now and have always been happy with their service. Their
                customer support is excellent and they are always available to
                help with any issues we have. Their prices are also very
                competitive.
                <span className="by"> Jovan Reels</span>
              </blockquote>
            </div>
            <img src="../../images/misc/p2.jpg" className="img-fluid" alt="Testimonial" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="de-image-text">
            <div className="d-text">
              <div className="d-rating mb10">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>Excellent Hosting Service!</h4>
              <blockquote>
                Endorsed by industry experts, vntagelabs is the web hosting solution
                you can trust. With years of experience in the field, we provide
                fast, reliable and secure web hosting services.
                <span className="by"> Kanesha Keyton</span>
              </blockquote>
            </div>
            <img src="../../images/misc/p3.jpg" className="img-fluid" alt="Testimonial" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Testimonial2;
