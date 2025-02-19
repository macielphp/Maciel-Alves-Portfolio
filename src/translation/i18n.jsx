import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: "Welcome to my site!",
            projects: "Projects",
            skills: "Skills",
            aboutMe: "About Me",
            contactMe: "Contact Me"
        }
    },
    pt: {
        translation: {
          welcome: "Bem-vindo ao meu site!",
          projects: "Projetos",
          skills: "Habilidades",
          aboutMe: "Sobre Mim",
          contactMe: "Entre em Contato"
        }
    },
    es: {
    translation: {
        welcome: "¡Bienvenido a mi sitio!",
        projects: "Proyectos",
        skills: "Habilidades",
        aboutMe: "Sobre Mí",
        contactMe: "Contáctame"
        }
    },
    fr: {
    translation: {
        welcome: "Bienvenue sur mon site!",
        projects: "Projets",
        skills: "Compétences",
        aboutMe: "À propos de moi",
        contactMe: "Contactez-moi"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;