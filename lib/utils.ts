import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPostDate(postDate: Date): string {
  const now = new Date();
  const hourDiff = (now.getTime() - postDate.getTime()) / 1e3 / 60 / 60;

  return hourDiff < 1
    ? `${Math.floor(hourDiff * 60)} นาที`
    : hourDiff < 24
    ? `${Math.floor(hourDiff)} ชั่วโมง`
    : postDate.getFullYear() === now.getFullYear()
    ? postDate.toLocaleString("th-TH", { dateStyle: "medium" }).slice(0, -4)
    : postDate.toLocaleString("th-TH", { dateStyle: "medium" });
}
