import patientCenteredCare from "../assets/images/aboutUsImages/patientCenteredCare.png";
import contactArrow from "../assets/images/headerImages/headerContactArrow.png";

const AboutUs = () => {
  return (
    <section className="aboutUsContent px-3 flex max-w-[1180px] mx-auto max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-5 max-lg:mb-10">
      <div className="aboutUsImgSide w-full max-lg:order-1">
        <div className="aboutUsImgContent max-w-[500px] max-lg:max-w-[380px]  max-lg:mx-auto">
          <img src={patientCenteredCare} alt="patientCenteredCare" className="aboutUsImg w-full max-lg:text-center" />
        </div>
      </div>
      <div className="aboutUsInfoSide w-full">
        <h3 className="sectionSubTitle font-semibold text-[20px] text-left text-secondary">SOBRE</h3>
        <h2 className="sectionMainTitle text-left mb-6 font-semibold text-[36px]">Anna Flávia Mariot Chiodelli</h2>
        <p className="sectionDesc text-[18px]">
          Meu nome é Anna Flávia Chiodelli, natural de São Joaquim. Sou uma profissional dedicada à área da estética odontológica,
          sempre em busca de aprimoramento e especialização. <br /><br /> Estou preparada para oferecer serviços com qualidade e excelência, incluindo limpeza dental, clareamento em consultório e supervisionado (caseiro), restaurações estéticas simples e complexas, além de atuar como clínica geral.<br /><br /> Atualmente, residente em odontologia estética, que abrange diversas áreas da prática odontológica. Agende uma avaliação e venha conferir nossos serviços.
        </p>

        <div className="bookingButtonContent">
          <button
            className="bookingButton shadow-buttonShadow bg-secondary flex items-center gap-2 px-5 py-2 rounded-[30px] font-semibold h-[50px] mt-5 relative"
            onClick={() => {
              window.open(
                "https://wa.me/554991462420?text=Vim%20do%20site%20e%20preciso%20de%20um%20atendimento.",
                "_blank"
              );
            }}
          >
            ENTRAR EM CONTATO
            <div className="bookingButtonImgContent max-w-[13px] flex items-center justify-center">
              <img src={contactArrow} alt="Arrow" className="bookingButtonImg w-full" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
