import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  // We exclude /admin and /api and static files
  matcher: ['/', '/(id|en)/:path*', '/((?!admin|api|_next|_vercel|.*\\..*).*)']
};
