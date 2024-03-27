export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLangKey = 'en';

const defaultLang = {
  rss: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fgizmodo.com%2Frss',
  header: {
    title: 'Allen Joseph',
    description:
      'Computer Engineer and FrontEnd Developer, hugely interested in web design and development as well as innovative, creative and fun programming languages. Virtual lover of adventure sports, committed to what he does and aware that every day is perfect to learn something new.',
    slogan: 'Let your passion speak!',
    email: 'allenjosephva@gmail.com',
    address: 'Lima, Perú.',
    github: 'https://github.com/allenjoseph',
  },
  footer: {
    copyright: 'Allen Joseph - 2024',
  },
};

export const ui = {
  en: defaultLang,
  es: Object.assign({}, defaultLang, {
    rss: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fes.gizmodo.com%2Frss',
    header: Object.assign({}, defaultLang.header, {
      description:
        'Ingeniero en Computación y Desarrollador FrontEnd, enormemente interesado en el diseño y desarrollo web así como en lenguajes de programación innovadores, creativos y divertidos. Amante virtual de los deportes de aventura, comprometido con lo que hace y consciente de que cada día es perfecto para aprender algo nuevo.',
      slogan: 'Deja que tu pasión hable!',
    }),
  }),
} as const;
