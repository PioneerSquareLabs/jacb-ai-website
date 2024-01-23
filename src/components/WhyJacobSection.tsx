import React from 'react';

const WhyJacobSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Jacob?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jacob is a seasoned professional with a track record of successful projects. His expertise in modern web technologies and dedication to craftsmanship make him the ideal choice for your next project.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 text-center">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <img src="workflow.png" alt="Efficient Workflow" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Efficient Workflow</h3>
            <p className="text-gray-600">
              Utilizing the latest tools and techniques, Jacob ensures a smooth and efficient workflow from start to finish.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <img src="video.png" alt="Expertise in Motion" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expertise in Motion</h3>
            <p className="text-gray-600">
              With a keen eye for detail, Jacob brings a dynamic and engaging approach to every project.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <img src="example-issue.png" alt="Problem Solver" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
            <p className="text-gray-600">
              No challenge is too great. Jacob excels at finding creative solutions to complex problems.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <img src="logo.svg" alt="Trusted by Brands" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted by Brands</h3>
            <p className="text-gray-600">
              Jacob has earned the trust of numerous brands, delivering exceptional results every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJacobSection;