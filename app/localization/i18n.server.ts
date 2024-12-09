import { createCookie } from "@remix-run/node";
import { RemixI18Next } from "remix-i18next/server";

import i18n from "~/localization/i18n"; // your i18n configuration file

export const localeCookie = createCookie("_lng", {
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 30, // 1 month
});

const i18next = new RemixI18Next({
  detection: {
    supportedLanguages: i18n.supportedLngs,
    fallbackLanguage: i18n.fallbackLng,
    cookie: localeCookie,

    async findLocale(request) {
      const { pathname } = new URL(request.url);
      const locale = pathname.split("/").at(1) || null;
      return locale;
    },
  },
  // This is the configuration for i18next used
  // when translating messages server-side only
  i18next: {
    ...i18n,
  },
});

export default i18next;
