"use client";

const EVENTBRITE_URL =
  "https://www.eventbrite.com/e/welcome-to-the-cookout-exploring-life-opportunities-in-kenya-tickets-1991870594568?aff=oddtdtcreator";

const announcementText =
  "🌴 WELCOME TO THE COOKOUT • FIRST FREE VIRTUAL EVENT • REGISTER NOW AT MOVETOKENYA.ORG 🌴";

export default function AnnouncementBar() {
  const segment = `${announcementText}   `;
  const track = segment.repeat(8);

  return (
    <a
      href={EVENTBRITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Register free for Welcome To The Cookout on Eventbrite"
      className="group block w-full overflow-hidden bg-[#111111] py-2.5 transition-colors duration-300 hover:bg-[#1a1a1a] sm:py-3"
    >
      <div className="animate-marquee flex w-max items-center">
        <span className="shrink-0 whitespace-nowrap px-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white sm:text-base sm:tracking-[0.15em]">
          {track}
        </span>
        <span
          aria-hidden="true"
          className="shrink-0 whitespace-nowrap px-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white sm:text-base sm:tracking-[0.15em]"
        >
          {track}
        </span>
      </div>
    </a>
  );
}
