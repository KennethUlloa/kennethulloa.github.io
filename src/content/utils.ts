import { defaultLang, languages } from "@/i18n/ui";
import { personalInfoSchema, globalInfoSchema } from "@/schemas";

export async function getPersonalInfo(lang: keyof typeof languages = defaultLang) {
  const personalInfo = await import(`./personal/${lang}.yml`);
  return personalInfoSchema.parse(personalInfo.default);
}

export async function getGlobalInfo() {
  const globalInfo = await import("./globals.yml");
  return globalInfoSchema.parse(globalInfo.default);
}