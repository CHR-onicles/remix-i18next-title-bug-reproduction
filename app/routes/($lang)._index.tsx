import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import i18next from "~/localization/i18n.server";
import { json } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { Link } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18next.getFixedT(request);
  const title = t("greeting");
  return json({ title });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    {
      title: data?.title,
    },
  ];
};

export default function Index() {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to <span className="sr-only">Remix</span>
          </h1>
          <div className="h-[144px] w-[434px]">
            <img
              src="/logo-light.png"
              alt="Remix"
              className="block w-full dark:hidden"
            />
            <img
              src="/logo-dark.png"
              alt="Remix"
              className="hidden w-full dark:block"
            />
          </div>
        </header>

        <h1 className="text-2xl">{t("works")}</h1>
        <Link
          to="/en"
          className="inline-block px-4 py-2 bg-blue-500 text-white font-medium text-center rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Change language to English
        </Link>
        <Link
          to="/fr"
          className="inline-block px-4 py-2 bg-green-500 text-white font-medium text-center rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
          Change language to French
        </Link>
      </div>
    </div>
  );
}
