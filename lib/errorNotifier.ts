import * as Sentry from "@sentry/node";

export function initNotifier() {
  Sentry.init({ dsn: process.env.SENTRY_DNS });
}

export default function notify(err: Error) {
  Sentry.captureException(err);
  console.error(err)
}
