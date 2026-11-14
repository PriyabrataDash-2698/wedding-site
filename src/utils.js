export const mapsUrl = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);

const stamp = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, "");
const range = (ev) => {
  const s = new Date(ev.start);
  return [s, new Date(s.getTime() + ev.hours * 3600000)];
};

export function googleCalUrl(ev, title, place) {
  const [s, e] = range(ev);
  const p = new URLSearchParams({ action: "TEMPLATE", text: title, dates: `${stamp(s)}/${stamp(e)}`, location: place });
  return "https://calendar.google.com/calendar/render?" + p;
}

export function downloadIcs(ev, title, place) {
  const [s, e] = range(ev);
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Wedding//EN", "BEGIN:VEVENT",
    `UID:${ev.id}@wedding-site`, `DTSTAMP:${stamp(new Date())}`, `DTSTART:${stamp(s)}`, `DTEND:${stamp(e)}`,
    `SUMMARY:${title}`, `LOCATION:${place}`, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  a.download = `${ev.id}.ics`;
  a.click();
  URL.revokeObjectURL(a.href);
}
