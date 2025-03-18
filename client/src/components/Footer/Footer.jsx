import facebook from '../../assets/images/Icons/Facebook.svg';
import instagram from '../../assets/images/Icons/instagram.svg';
import pinterest from '../../assets/images/Icons/Pinterest.svg';
import twitter from '../../assets/images/Icons/X_twitter.svg';
import './Footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__text-container">
          <div className="footer__brand">
            <h2 className="footer__title ">Snaps</h2>
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
            <div className="footer__social footer__social--desktop">
              <a href="https://www.facebook.com" className="footer__social-link">
                <img src={facebook} alt="facebook logo" />
              </a>

              <a href="https://wwww.twitter.com" className="footer__social-link">
                <img src={twitter} alt="twitter logo" />
              </a>

              <a href="https://www.instagram.com" className="footer__social-link">
                <img src={instagram} alt="instagram logo" />
              </a>

              <a href="https://www.pinterest.com" className="footer__social-link">
                <img src={pinterest} alt="pinterest logo" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__social footer__social--mobile">
          <a href="https://www.facebook.com" className="footer__social-link">
            <img src={facebook} alt="facebook logo" />
          </a>

          <a href="https://wwww.twitter.com" className="footer__social-link">
            <img src={twitter} alt="twitter logo" />
          </a>

          <a href="https://www.instagram.com" className="footer__social-link">
            <img src={instagram} alt="instagram logo" />
          </a>

          <a href="https://www.pinterest.com" className="footer__social-link">
            <img src={pinterest} alt="pinterest logo" />
          </a>
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
