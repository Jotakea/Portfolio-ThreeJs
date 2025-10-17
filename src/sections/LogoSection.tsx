import TitleHeader from "../components/TitleHeader";
import { logoIconsList1, logoIconsList2 } from "../constants";
import * as SiIcons from "react-icons/si";

interface IconProps {
    icon: {
        iconName: string;
        name: string;
    };
}

const LogoIcon = ({ icon }: IconProps) => {
    const IconComponent = SiIcons[icon.iconName as keyof typeof SiIcons];

    return (
        <div className="flex-none flex-center" title={icon.name}>
            {IconComponent ? <IconComponent size={50} /> : icon.name}
            <p className="text-xl font-semibold px-2 text-center">{icon.name}</p>
        </div>
    );
};

const LogoSection = () => {
    return (
        <div id="techStack" className="md:my-20 my-10 relative">
            <TitleHeader
                title="Skills & Tools"
                sub="💻 Tech Stack"
            />
            {/* First row - scrolls left to right */}
            <div className="marquee h-40">
                <div className="marquee-box md:gap-5 gap-5">
                    {logoIconsList1.map((icon) => (
                        <div key={`first-${icon.iconName}`} className="marquee-item-left">
                            <LogoIcon icon={icon} />
                        </div>
                    ))}
                    {logoIconsList1.map((icon) => (
                        <div key={`first-dup-${icon.iconName}`} className="marquee-item-left">
                            <LogoIcon icon={icon} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Second row - scrolls right to left */}
            <div className="marquee h-40">
                <div className="marquee-box md:gap-5 gap-5" style={{ animationDirection: 'reverse' }}>
                    {logoIconsList2.map((icon) => (
                        <div key={`second-${icon.iconName}`} className="marquee-item-right">
                            <LogoIcon icon={icon} />
                        </div>
                    ))}
                    {logoIconsList2.map((icon) => (
                        <div key={`second-dup-${icon.iconName}`} className="marquee-item-right">
                            <LogoIcon icon={icon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoSection;