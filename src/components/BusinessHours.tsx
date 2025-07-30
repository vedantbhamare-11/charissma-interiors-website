import { useState } from "react";

const businessHours = [
  { day: "Monday", hours: "09:00 am – 05:00 pm" },
  { day: "Tuesday", hours: "09:00 am – 05:00 pm" },
  { day: "Wednesday", hours: "09:00 am – 05:00 pm" },
  { day: "Thursday", hours: "09:00 am – 05:00 pm" },
  { day: "Friday", hours: "09:00 am – 05:00 pm" },
  { day: "Saturday", hours: "By Appointment" },
  { day: "Sunday", hours: "By Appointment" },
];

// Utility to get the current day, supporting SSR and client rendering.
function getCurrentDayName() {
  if (typeof window !== "undefined") {
    return new Date().toLocaleDateString("en-US", { weekday: "long" });
  } else {
    return "Wednesday";
  }
}

export function BusinessHours() {
  const [open, setOpen] = useState(false);
  const currentDay = getCurrentDayName();

  return (
    <div className="w-full">
      {/* Summary shown when closed and toggle trigger */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls="business-hours-list"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 text-base text-muted-foreground hover:text-foreground font-semibold focus:outline-none"
      >
        <span>
          Open today{" "}
          <span className="font-bold text-foreground">
            {businessHours.find((d) => d.day === currentDay)?.hours}
          </span>
        </span>
        <span className="ml-2 text-xs text-accent-foreground">
          {open ? "▲" : "▼"}
        </span>
      </button>

      {/* Dropdown list */}
      <div
        id="business-hours-list"
        className={`${open ? "block" : "hidden"} mt-2`}
      >
        <div className="mb-2 flex items-center justify-between">
          {/* Optional close button if you'd like */}
          {/* <button onClick={() => setOpen(false)} aria-label="Close hours list" className="text-muted-foreground">×</button> */}
        </div>
        <ul className="p-2">
          {businessHours.map(({ day, hours }) => (
            <li
              key={day}
              className={`flex justify-between px-2 py-1 text-base ${
                day === currentDay
                  ? "font-bold text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <span>{day}</span>
              <span>{hours}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
