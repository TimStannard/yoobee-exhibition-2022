// icons
import { ArrowLeft, Github, Linkedin, BoxArrowUpRight, Instagram, Envelope } from 'react-bootstrap-icons';

export const SocialMediaLinks = ({ student }) => {
    const mappedSocialLinks = student.social_media.map((item, index) => {
        if (item.type === "github") {
            return (
                <a key={index} target="_blank" href={`https://github.com/${item.link}`}>
                    <Github className="social-icon" />
                </a>
            )
        }
        else if (item.type === "linkedin") {
            return (
                <a key={index} target="_blank" href={`https://www.linkedin.com/in/${item.link}`}>
                    <Linkedin className="social-icon" />
                </a>
            )
        }
        else if (item.type === "portfolio") {
            return (
                <a key={index} target="_blank" href={item.link}>
                    <span className="social-tag">Visit Portfolio <BoxArrowUpRight /></span>
                </a>
            )
        }
        else if (item.type === "email") {
            return (
                <a key={index} href={`mailto:${item.link}`}>
                    <Envelope className="social-icon" />
                </a>
            )
        }
        else if (item.type === "instagram") {
            return (
                <a key={index} target="_blank" href={`https://www.instagram.com/${item.link}`}>
                    <Instagram className="social-icon" />
                </a>
            )
        }
    })
    return mappedSocialLinks
}
