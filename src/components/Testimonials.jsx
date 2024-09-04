import testimonialPerson from "../assets/images/testimonialsImages/testimonialPerson.png";

import "../assets/styles/testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonialsContent min-h-[800px] flex flex-col justify-center items-center my-5 ">
      <h3 className="sectionSubTitle font-semibold text-[20px] text-center text-black">Feedback</h3>
      <h2 className="sectionMainTitle text-center mb-6 font-semibold text-[36px]">José Gustavo
      </h2>
      <div className="testimonialsBox flex flex-col justify-center items-center max-w-[1180px] mx-auto p-5">
        <div className="testimonialsBoxImgContent mb-5">
          <img src={testimonialPerson} alt="testimonial Person" className="testimonialsBoxImg" />
        </div>
        <p className="testimonialsDesc font-bold text-[32px] text-center max-lg:text-[25px] max-md:text-[20px]">
          "Sentia muita dor na boca, além de meu sorriso ter várias imporfeições, mas depois da consulta com a Dra. Anna Chiodelli. Estou com o meu sorriso novo, coloquei lentes além de fazer remoção de cáries."
        </p>
        <div className="testimonialsBoxPersonInfo text-center mt-5">
          <p className="testimonialsBoxPersonName text-[24px] font-medium text-[#1E1E1E]">David Gahan</p>
          <p className="testimonialsBoxPersonLocation text-[20px] text-[#1E1E1E]">Lages - SC</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
