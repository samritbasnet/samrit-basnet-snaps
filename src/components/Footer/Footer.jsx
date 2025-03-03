import facebook from "../../assets/images/Icons/Facebook.svg";
import twitter from "../../assets/images/Icons/X_twitter.svg";
import instagram from "../../assets/images/Icons/instagram.svg";
// import pinterest from "."
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__text-container">
          <div className="footer__brand">
            <h1 className="footer__title ">Snaps</h1>
          </div>
          <div className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  For photographers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Hire talent
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Inspiration
                </a>
              </li>
            </ul>

            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  About
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__social">
          <a href="www.facebook.com" className="footer__social-link">
            <img src={facebook} alt="facebook logo" />
          </a>
          {/* x twiiter */}
          <a href="#" className="footer__social-link">
            <img src={twitter} alt="twitter logo" />
          </a>
          {/* Instagram */}
          <a href="#" className="footer__social-link">
            <img src={instagram} alt="instagram logo" />
          </a>
          {/* Pinterest

          <a href="#" className="footer__social-link">
            <img src={pinterest} alt="pinterest logo"/>
          </a> */}
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">© 2024 Snaps</span>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">
              Terms
            </a>
            <a href="#" className="footer__legal-link">
              Privacy
            </a>
            <a href="#" className="footer__legal-link">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
