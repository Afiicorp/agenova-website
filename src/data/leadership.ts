import type { Leader } from "@/types";

const leader = (index: number, slug: string, name: string, title: string, initials: string): Leader => ({
  slug,
  name,
  title,
  initials,
  photo: `/images/leadership/leader-0${index}.jpg`,
});

export const leadership: Leader[] = [
  leader(1, "mahesh-m-gandhi", "Mahesh M. Gandhi", "President", "MG"),
  leader(2, "michel-buffat", "Michel Buffat", "Director", "MB"),
  leader(3, "vivek-panwar", "Vivek Panwar", "Director", "VP"),
  leader(4, "sidhartha-s-gandhi", "Sidhartha S. Gandhi", "Director – Government Business", "SG"),
];
