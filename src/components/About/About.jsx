import React from "react";
import missionImage from "../../assets/missionImage.jpg";
import facilityImage from "../../assets/facilityImage.jpg";
import ritikImage from "../../assets/ritikImage.jpeg";
import sahilImage from "../../assets/sahilImage.jpeg";
import motaImage from "../../assets/motaImage.jpeg";
import footer from "../Footer/Footer";
import Footer from "../Footer/Footer";

function About() {
  return (
    <div className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <div className="text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg mb-6 text-gray-400">
                  At Fitpro, our mission is to empower individuals to lead
                  healthier and happier lives through fitness and wellness. We
                  strive to provide personalized and innovative fitness
                  solutions that inspire and motivate our members to achieve
                  their goals.
                </p>
                <p className="text-lg mb-6 text-gray-400">
                  We believe in creating a supportive and inclusive community
                  where everyone feels welcome and valued. Our experienced
                  trainers and staff are committed to helping you unlock your
                  full potential and transform your body, mind, and spirit.
                </p>
              </div>
              <div>
                <img
                  src={missionImage}
                  alt="Our Mission"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <img
                  src={facilityImage}
                  alt="Our Facility"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Facility</h2>
                <p className="text-lg mb-6 text-gray-400">
                  Our state-of-the-art facility is equipped with the latest
                  fitness equipment and amenities to support your fitness
                  journey. Whether you prefer cardio, strength training, or
                  group classes, we have everything you need to achieve your
                  fitness goals.
                </p>
                <p className="text-lg mb-6 text-gray-400">
                  Our facility features spacious workout areas, dedicated
                  studios for group fitness classes, locker rooms with showers,
                  and a welcoming lounge area where you can relax and connect
                  with fellow members.
                </p>
              </div>
            </div>

            <div className="my-4 py-8">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-8">
                    Our Trainers and Mentors: Guiding You to Success
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">
                        Why Our Trainers Matter
                      </h3>
                      <p className="text-lg mb-6 text-gray-400">
                        Our trainers are more than just fitness experts –
                        they're mentors, motivators, and supporters, committed
                        to helping you achieve your goals every step of the way.
                      </p>
                      <h3 className="text-2xl font-bold mb-4">
                        Personalized Guidance
                      </h3>
                      <p className="text-lg mb-6 text-gray-400">
                        From personalized workout plans to nutritional advice,
                        our trainers provide the guidance and support you need
                        to succeed. They take the time to understand your unique
                        goals and challenges, crafting a tailored approach that
                        fits your lifestyle and preferences.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">
                        Inspiring Transformations
                      </h3>
                      <p className="text-lg mb-6 text-gray-400">
                        Beyond physical transformations, our trainers inspire
                        confidence, self-belief, and a positive mindset. They
                        believe in you even when you may doubt yourself, pushing
                        you to surpass your limits and achieve things you never
                        thought possible.
                      </p>
                      <h3 className="text-2xl font-bold mb-4">
                        Building a Community
                      </h3>
                      <p className="text-lg mb-6 text-gray-400">
                        At <span className="font-bold">Fitpro</span>, we're more
                        than just a gym – we're a community. Our trainers foster
                        a welcoming and inclusive environment where everyone
                        feels supported and encouraged. Whether you're a
                        beginner or a seasoned athlete, you'll find a place to
                        belong here.
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Join Our Fitness Family
                    </h3>
                    <p className="text-lg mb-6 text-gray-400">
                      Join us at <span className="font-bold">Fitpro</span> and
                      experience the difference our trainers can make in your
                      fitness journey. Together, we'll celebrate your successes,
                      overcome obstacles, and transform your life for the
                      better.
                    </p>
                  </div>
                </div>
              </div>

             
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <img
                    src={ritikImage}
                    alt="Team Member 1"
                    className="w-32 h-32 mx-auto rounded-full mb-4 hover:scale-[1.03] transition-all duration-300"
                  />
                  <h3 className="text-lg font-semibold">Ritik gaur</h3>
                  <p className="text-sm text-gray-400">Founder & CEO</p>
                </div>
                <div className="text-center">
                  <img
                    src={sahilImage}
                    alt="Team Member 2"
                    className="w-32 h-32 mx-auto rounded-full mb-4 hover:scale-[1.03] transition-all duration-300"
                  />
                  <h3 className="text-lg font-semibold">Sahil sharma</h3>
                  <p className="text-sm text-gray-400">Head Trainer</p>
                </div>
                <div className="text-center">
                  <img
                    src={motaImage}
                    alt="Team Member 3"
                    className="w-32 h-32 mx-auto rounded-full mb-4 hover:scale-[1.03] transition-all duration-300"
                  />
                  <h3 className="text-lg font-semibold">
                    Prakhar Pratap Singh
                  </h3>
                  <p className="text-sm text-gray-400">Nutritionist</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default About;
