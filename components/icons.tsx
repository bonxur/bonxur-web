import type { SVGProps } from "react";

export type IconName =
  | "arrow"
  | "check"
  | "droplet"
  | "leaf"
  | "layers"
  | "sun"
  | "clock"
  | "ruler"
  | "zap"
  | "sprout"
  | "users"
  | "building"
  | "home"
  | "school"
  | "hotel"
  | "restaurant"
  | "mail"
  | "phone"
  | "map"
  | "menu"
  | "close";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  droplet: <path d="M12 2.7S5.5 9.2 5.5 14.4a6.5 6.5 0 0 0 13 0C18.5 9.2 12 2.7 12 2.7Z" />,
  leaf: <><path d="M20.8 3.2C12.5 3.1 5.2 6.4 4 13.2c-.6 3.5 2 6.4 5.7 5.7 6.8-1.2 10.1-8.5 11.1-15.7Z" /><path d="M4.8 20c2.4-4.7 6.5-8.6 11.6-11.2" /></>,
  layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  ruler: <><path d="m4 16 12-12 4 4L8 20H4v-4Z" /><path d="m13 7 4 4M10 10l2 2M7 13l2 2" /></>,
  zap: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />,
  sprout: <><path d="M12 22V12" /><path d="M12 16c-5 0-8-3-8-8 5 0 8 3 8 8Z" /><path d="M12 12c0-5 3-8 8-8 0 5-3 8-8 8Z" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
  building: <><path d="M4 22V4h11v18M15 9h5v13M8 8h3M8 12h3M8 16h3M18 13h.01M18 17h.01M2 22h20" /></>,
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v11h14V10M9 21v-7h6v7" /></>,
  school: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 12v5c3 3 9 3 12 0v-5M22 9v7" /></>,
  hotel: <><path d="M4 22V3h12v19M16 8h4v14M8 7h4M8 11h4M8 15h4M2 22h20" /></>,
  restaurant: <><path d="M7 2v8M4 2v5c0 2 1 3 3 3s3-1 3-3V2M7 10v12M17 2v20M17 2c3 2 4 5 4 8h-4" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />,
  map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export function Icon({
  name,
  size = 22,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
