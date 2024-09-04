import consultationPerson from "../assets/images/consultationImages/consultationPerson.png";
import contactArrow from "../assets/images/headerImages/headerContactArrow.png";
import "../assets/styles/consultation.css";
const Consultation = () => {
  return (
    <section className="consultationContent grid grid-cols-[0.4fr_0.6fr] place-items-center max-w-[1140px] mx-auto my-10 gap-5 rounded-[50px] max-lg:flex max-lg:flex-col max-lg:w-fit max-lg:p-5">
      <div className="consultationImgSide max-lg:p-5 max-md:p-0">
        <img src={consultationPerson} alt="Dentist" className="consultationImg w-full max-w-[484px] max-h-[502px] max-lg:rounded-[50px]" />
      </div>
      <div className="consultationFormSide max-lg:p-5 max-md:p-0">
        <h2 className="sectionMainTitle text-center mb-6 font-semibold text-[36px]">Entre em Contato</h2>
        <form action="POST" className="consultationForm">
          <div
            className="consultationFormInputs grid grid-cols-2 gap-5
          max-md:grid-cols-1
          "
          >
            <input type="text" placeholder="Nome Completo*" className="consultationInput max-md:w-full" />
            <input type="text" placeholder="Sua mensagem" className="consultationInput max-md:w-full" />
            <input type="email" placeholder="Email" className="consultationInput max-md:w-full" />
            <input type="tel" placeholder="Contato" className="consultationInput max-md:w-full" />
          </div>

          <div
            className="consultationFormButtonContent w-full shadow-buttonShadow bg-secondary flex justify-center items-center gap-2 px-5 py-2
           rounded-[30px] font-semibold h-[50px] mt-8"
          >
            <input className="consultationFormButton text-[20px]" type="submit" value="Marcar Consulta" />
            <div className="bookingButtonImgContent max-w-[15px] flex items-center justify-center">
              <img src={contactArrow} alt="Arrow" className="bookingButtonImg w-full" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Consultation;
