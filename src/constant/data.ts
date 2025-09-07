import type { BenefitItem, NavigationItem } from "../type/type";

export const navigationItems: NavigationItem[] = [
  {
    id: 1,
    title: "لیست پزشکان",
    to: "/",
  },
  {
    id: 2,
    title: "سوالات متداول",
    to: "/",
  },
  {
    id: 3,
    title: "درباره ما",
    to: "/",
  },
  {
    id: 4,
    title: "تماس با ما",
    to: "/",
  },
];

export const benefitsItems: BenefitItem[] = [
  {
    id: 1,
    icon: "/public/image/benefits/setting.png",
    title: "مدیریت و تغییر نوبت ها به راحتی",
    text: "توانایی لغو، تغییر و مدیریت نوبت ها به راحتی",
  },
  {
    id: 2,
    icon: "/public/image/benefits/comment-01.png",
    title: "اطمینان از انتخاب مجرب‌ترین پزشکان",
    text: "بهترین پزشکان را با توجه به نظرات کاربران انتخاب کنید",
  },
  {
    id: 3,
    icon: "/public/image/benefits/clock-02.png",
    title: "دسترسی ۲۴ ساعته به پزشکان",
    text: "در هر زمانی میتوانید نوبت خود را رزرو کنید ",
  },
];
