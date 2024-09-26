import teethWhitening from "../assets/images/servicesImages/teethWhitening.png";
import dentalImplant from "../assets/images/servicesImages/dentalImplant.png";
import teethFillings from "../assets/images/servicesImages/teethFillings.png";
import oralSurgery from "../assets/images/servicesImages/oralSurgery.png";
import crownAndBridges from "../assets/images/servicesImages/crownAndBridges.png";
import periodontalCare from "../assets/images/servicesImages/periodontalCare.png";

import "../assets/styles/services.css";

const Services = () => {
  return (
    <section className="serviceContent max-w-[1200px] mx-auto my-10">
      <h3 className="sectionSubTitle font-semibold text-[20px] text-center text-ndary">SERVIÇOS</h3>
      <h2 className="sectionMainTitle text-center mb-6 font-semibold text-[36px]">Nossas Especialidades</h2>
      <div className="serviceBoxes flex items-center justify-center flex-wrap gap-5">
        {/* Teeth Whitening */}
        <div className="serviceBox" style={{ backgroundColor: '#800000' }}>
          <div className="serviceBoxImgContent">
            <img src={teethWhitening} alt="Teeth Whitening" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle text-white">Clínico Geral</h3>
          <p className="serviceBoxDesc text-white">Cuidados odontológicos de rotina essenciais.</p>
          <a href="https://wa.me/554991462420?text=Olá%20,vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20atendimento." className="serviceButton text-black">
            MARCAR CONSULTA
          </a>
        </div>

        {/* Dental Implant */}
        <div className="serviceBox" style={{ backgroundColor: '#800000' }}>
          <div className="serviceBoxImgContent">
            <img src={dentalImplant} alt="Dental Implant" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle text-white">Extração de Sisos</h3>
          <p className="serviceBoxDesc text-white">Remoção de dentes siso pelo Dr. Gustavo José</p>
          <a href="https://wa.me/554991462420?text=Olá%20,vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20atendimento." className="serviceButton text-black">
            MARCAR CONSULTA
          </a>
        </div>

        {/* Teeth Fillings */}
        <div className="serviceBox" style={{ backgroundColor: '#800000' }}>
          <div className="serviceBoxImgContent">
            <img src={teethFillings} alt="Teeth Fillings" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle text-white">Clareamento Dentário</h3>
          <p className="serviceBoxDesc text-white">
            Clareamento para dentes mais brancos.
          </p>
          <a href="https://wa.me/554991462420?text=Olá%20,vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20atendimento." className="serviceButton text-black">
            MARCAR CONSULTA
          </a>
        </div>

        {/* Oral Surgery */}
        <div className="serviceBox" style={{ backgroundColor: '#800000' }}>
          <div className="serviceBoxImgContent">
            <img src={oralSurgery} alt="Oral Surgery" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle text-white">Restaurações estéticas</h3>
          <p className="serviceBoxDesc text-white">Reparos dentários com aparência natural.</p>
          <a href="https://wa.me/554991462420?text=Olá%20,vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20atendimento." className="serviceButton text-black">
            MARCAR CONSULTA
          </a>
        </div>


        {/* Crown And Bridges */}
        <div className="serviceBox" style={{ backgroundColor: '#800000' }}>
          <div className="serviceBoxImgContent">
            <img src={crownAndBridges} alt="Crown And Bridges" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle text-white">Facetas Dentárias</h3>
          <p className="serviceBoxDesc text-white">
            Correção estética de dentes danificados.
          </p>
          <a href="https://wa.me/554991462420?text=Olá%20,vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20atendimento." className="serviceButton text-black">
            MARCAR CONSULTA
          </a>
        </div>


        {/* Periodontal Care */}
        {/* Periodontal Care */}
        <div className="serviceBox" style={{ backgroundColor: '#800000' }}>
          <div className="serviceBoxImgContent">
            <img src={periodontalCare} alt="Periodontal Care" className="serviceBoxImg" />
          </div>
          <h3 className="serviceBoxTitle text-white">Lentes de Contato</h3>
          <p className="serviceBoxDesc text-white">
            Fina camada estética para dentes.
          </p>
          <a href="https://wa.me/554991462420?text=Olá%20,vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20atendimento." className="serviceButton text-black">
            MARCAR CONSULTA
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
