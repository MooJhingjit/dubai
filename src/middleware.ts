import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {

  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);
  return response;
}


export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|feeds|seo|_next|_vercel|.*\\..*).*)", "/(en)/:path*"],
};
