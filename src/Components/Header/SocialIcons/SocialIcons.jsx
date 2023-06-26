import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faViber, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './SocialIcons.scss'; // Подключение файла стилей

const SocialIcons = () => {
    return (
        <ul className="social-icons">
            <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                </a>
            </li>
            <li>
                <a href="viber://chat?number=YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faViber} className="social-icon" />
                </a>
            </li>
            <li>
                <a href="https://telegram.me/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegram} className="social-icon" />
                </a>
            </li>
            <li>
                <a href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
                </a>
            </li>
        </ul>
    );
};

export default SocialIcons;
