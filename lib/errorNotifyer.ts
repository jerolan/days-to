import * as Sentry from "@sentry/node";

export function initNotifyer() {
  Sentry.init({ dsn: process.env.SENTRY_DNS });
}

export default function notify(err: Error) {
  Sentry.captureException(err);
}
