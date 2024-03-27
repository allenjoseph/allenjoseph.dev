import { defaultLangKey, ui } from './ui';

export function useI18n(lang: keyof typeof ui = defaultLangKey) {
  const t = ui[lang];
  return t;
}
