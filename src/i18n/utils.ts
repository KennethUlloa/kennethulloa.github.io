import { labels, defaultLang } from "./ui";

export function useTranslations(lang: keyof typeof labels) {
  return function t(key: keyof typeof labels[typeof defaultLang]) {
    return labels[lang][key] || labels[defaultLang][key];
  }
}
