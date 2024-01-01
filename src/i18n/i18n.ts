import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend, { HttpBackendOptions } from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const options = {
    order: ['cookie', 'localStorage'],
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init<HttpBackendOptions>({
        backend: {
            loadPath: './locales/{{lng}}/{{ns}}.json',
        },
        debug: false,
        ns: 'general',
        defaultNS: 'general',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        supportedLngs: [
            'en',
            'vi',
        ],
        keySeparator: '.',
        nsSeparator: ':',
        pluralSeparator: '_',
        contextSeparator: '_',
        detection: options,
    }).then();


export default i18n;