import React from "react";
import { TestimonialSectionWrapper } from "./testimonial.styled";

const TestimonialSection = () => {
  return (
    <TestimonialSectionWrapper>
      <div className="container">
        <div className="header">
          <h2>Players Testimonials</h2>
        </div>

        <div className="testimonial-video">
          <div className="video-wrapper">
            <video width="100%" controls className="video">
              <source src="/assets/Vid_Testi.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </TestimonialSectionWrapper>
  );
};

export default TestimonialSection;
