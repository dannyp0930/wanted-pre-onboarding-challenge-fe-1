export default function timeLocale(dateString: string, lang: string) {
  const formatter = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });
  const today = Date.now();
  const date = new Date(dateString).valueOf();
  const secs = Math.ceil((date - today) / 1000);
  if (-secs < 60) {
    return formatter.format(secs, "seconds");
  } else if (-secs < 60 * 60) {
    return formatter.format(Math.ceil(secs / 60), "minutes");
  } else if (-secs < 60 * 60 * 24) {
    return formatter.format(Math.ceil(secs / (60 * 60)), "hours");
  } else if (-secs < 60 * 60 * 24 * 7) {
    return formatter.format(Math.ceil(secs / (60 * 60 * 24)), "days");
  } else if (60 * 60 * 24 * 7 * 365) {
    return formatter.format(Math.ceil(secs / (60 * 60 * 24 * 7)), "weeks");
  } else {
    return formatter.format(
      Math.ceil(secs / (60 * 60 * 24 * 7 * 365)),
      "years"
    );
  }
}
