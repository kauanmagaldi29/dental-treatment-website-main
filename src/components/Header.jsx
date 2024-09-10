import logo from "../assets/images/headerImages/logo.png";
import contactArrow from "../assets/images/headerImages/headerContactArrow.png";

const Header = () => {
  return (
    <header className="headerContent flex justify-between items-center max-w-[1200px] mx-auto py-5 px-3 mb-5">
      <div className="headerLogoContent">
        <img src={logo} alt="57Dentcare" className="headerLogoImg" />
      </div>
      <div className="headerMenuContent max-lg:hidden">
        <ul className="headerMenuList flex justify-center items-center gap-5">
          <li className="headerMenuListItem font-medium">
            <a href="/" className="headerMenuListItemLink">
              Inicio
            </a>
          </li>
          <li className="headerMenuListItem font-medium">
            <a href="#services" className="headerMenuListItemLink">
              Serviços
            </a>
          </li>
          <li className="headerMenuListItem font-medium">
            <a href="#aboutUs" className="headerMenuListItemLink">
              Sobre
            </a>
          </li>
          <li className="headerMenuListItem font-medium">
            <a href="#whyChooseUs" className="headerMenuListItemLink">
              Clinica
            </a>
          </li>
          <li className="headerMenuListItem font-medium">
            <a href="#testimonials" className="headerMenuListItemLink">
              Feedbacks
            </a>
          </li>
        </ul>
      </div>
      {/* 
<div className="headerContactContent">
  <button className="headerContactButton w-[180px] h-[50px] text-[18px] font-medium text-center flex justify-center items-center gap-2 border-solid border-[#89DB7B] border-[1px] rounded-[50px]">
    Contato
    <div className="headerContactButtonImgContent flex justify-between items-center max-w-[15px]">
      <img src={contactArrow} alt="Contact Us" className="headerContactButtonImg w-full" />
    </div>
  </button>
</div> 
*/}

    </header>
  );
};

export default Header;
