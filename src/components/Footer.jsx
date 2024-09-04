import footerLogo from "../assets/images/headerImages/logo.png";
import footerInputArrow from "../assets/images/footerImages/footerInputArrow.png";
import facebookLogo from "../assets/images/footerImages/facebook.png";
import twitterLogo from "../assets/images/footerImages/twitter.png";
import youtubeLogo from "../assets/images/footerImages/youtube.png";
import pinterestLogo from "../assets/images/footerImages/pinterest.png";
import linkedinLogo from "../assets/images/footerImages/linkedin.png";
import tiktokLogo from "../assets/images/footerImages/tiktok.png";
import instagramLogo from "../assets/images/footerImages/instagram.png";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footerContent max-w-[1200px] mx-auto pt-2 pb-10 max-md:px-2">
      {/*
      <div className="footerLogoContent max-w-[120px] mx-auto">
        <img src={footerLogo} alt="57Dentcare" className="footerLogo w-full text-center" />
      </div>
      */}
      <div className="footerColumns mt-5 flex justify-between items-start gap-5 max-xl:flex-wrap max-xl:justify-center">
        {/* Company Column */}
        <div className="footerColumn">
          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3">Company</h3>
          <ul className="footerColumnList">
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink active">
                Inicio
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Serviços
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Sobre
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Clinica
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Feedbacks
              </a>
            </li>
            <li className="footerColumnListItem">
              <a href="/" className="footerColumnListItemLink">
                Contato
              </a>
            </li>
          </ul>
        </div>



        {/* Address Column */}
        <div className="footerColumn">
          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3">Endereço</h3>
          <p className="footerDesc">R. Fausto de Souza, 229 - Centro, Lages</p>
          <a href="/" className="footerLink">
            Ver no Maps
          </a>

          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3 mt-5">Contatos</h3>
          <p className="footerDesc">
            49 9146-2420 <br /> info@gmail.com
          </p>
        </div>

        {/* Social Media Column */}

        <div className="footerColumn">
          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3">Receber Informações</h3>
          <p className="footerDesc mb-2">Preencha para receber informações.</p>
          <div className="footerInputContent relative w-full max-w-[306px] border-[1px] border-black rounded-[30px]">
            <input className="footerInput p-5 w-full max-w-[200px] h-[59px] rounded-[30px]" type="text" name="email" id="email" placeholder="Seu email" />
            <div className="footerInputImgContent absolute top-2 right-2 cursor-pointer">
              <img src={footerInputArrow} alt="Arrow" className="footerInputImg" />
            </div>
          </div>

          <h3 className="footerColumnTitle font-semibold text-[20px] mb-3 mt-3">Redes Sociais</h3>
          <div className="footerSocialMediaList list-none flex justify-start items-center gap-3">
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={facebookLogo} alt="Facebook" className="footerSocialMediaListItemImg" />
              </div>
            </li>
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={twitterLogo} alt="twitter" className="footerSocialMediaListItemImg" />
              </div>
            </li>
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={youtubeLogo} alt="youtube" className="footerSocialMediaListItemImg" />
              </div>
            </li>
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={pinterestLogo} alt="pinterest" className="footerSocialMediaListItemImg" />
              </div>
            </li>
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={linkedinLogo} alt="linkedin" className="footerSocialMediaListItemImg" />
              </div>
            </li>
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={tiktokLogo} alt="tiktok" className="footerSocialMediaListItemImg" />
              </div>
            </li>
            <li className="footerSocialMediaListItem">
              <div className="footerSocialMediaListItemImgContent">
                <img src={instagramLogo} alt="instagram" className="footerSocialMediaListItemImg" />
              </div>
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
