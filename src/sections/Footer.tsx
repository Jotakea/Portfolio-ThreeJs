import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex items-center gap-2">
                    <img className="size-6" src="/images/favicon.png" alt="logo" />
                    <p>Mohamed Nacer Adhoum</p>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <a key={index} target="_blank" href={socialImg.link} className="icon">
                            <img src={socialImg.imgPath} alt="social icon" />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Mohamed Nacer Adhoum. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;