import React from 'react';

const TestimonialSection = () => {
  return (
    <section id="testimonial" className="testimonial common py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Players Testimonials</h2>
        </div>
        
        <div className="flex justify-center md:w-[500px] lg:w-[700px]">
          <div className="w-full text-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video width="100%" controls className="mx-auto">
                <source src="/assets/Vid_Testi.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
