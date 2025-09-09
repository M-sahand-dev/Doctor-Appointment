import type {
  BenefitItem,
  Doctor,
  NavigationItem,
  SkillItem,
} from "../type/type";

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

export const skillsList: SkillItem[] = [
  {
    id: 1,
    image: "/public/image/skils/heart.png",
    title: " قلب و عروق",
  },
  {
    id: 2,
    image: "/public/image/skils/orthopedics 1.png",
    title: "ارتوپد",
  },
  {
    id: 3,
    image: "/public/image/skils/brain.png",
    title: " مغزواعصاب",
  },
  {
    id: 4,
    image: "/public/image/skils/pulmonology 1.png",
    title: " دستگاه تنفسی",
  },
  {
    id: 5,
    image: "/public/image/skils/eye-test 1.png",
    title: " چشم پزشکی",
  },
  {
    id: 6,
    image: "/public/image/skils/pediatric 1.png",
    title: " اطفال",
  },
  {
    id: 7,
    image: "/public/image/skils/dental-floss 1.png",
    title: "گوش حلق.بینی",
  },
];

export const drsData: Doctor[] = [
  {
    id: 1,
    name: "زهرا وارسته",
    image: "/public/image/drs/1.png",
    specialization: "متخصص قلب و عروق",
    city: "تهران",
    distinction: 3.5,
    doctorNumber: 40223,
    address: "تهران، ستارخان، خیابان هفتم، پلاک ۴۰",
    description:
      "رای بورد تخصصی بیماری های نوزادان و کودکان درمان اختلالات گوارشی و الرژیک نوزادان و کودکان اختلالات رشد و نمو نوزادان و کودکان اختلال رشد و بلوغ نوجواناندر مطب سونوگرافی شکم، تست حساسیت به کازیین شیر، تست حساسیت به لاکتوز شیر، تست تنفسی ( اسپیرومتری )، حضور دستیار کارشناس ارشد مشاور کودکان و نوجوانان جهت راهنمایی های تکمیلی و پاسخدهی به پرسش های مراجعین انجام می شودسابقه فعالیت بیش از 20  ",
    phoneNumber: "۰۲۱-۱۲۳۴ ۵۶۷۶۷",
    linkSite: "drZahravaraste.ir",
    linkInstagramAcc: "instagram.com/dr.zahravaraste",
    comments: [
      {
        id: 1,
        name: "فاطمه",
        image: "/public/image/user-photo/Ellipse 39 (1).png",
        distinction: 4,
        date: "۱۴۰۳/۱۰/۲۰",
        description:
          "دکتر وارسته رو از اینستاگرام میشناختم و اینجا تونستم به راحتی نوبت رزرو کنم.",
      },
    ],
  },
  {
    id: 2,
    name: "علی وارسته",
    image: "/public/image/drs/2.png",
    specialization: "متخصص قلب و عروق",
    city: "تهران",
    distinction: 3.5,
    doctorNumber: 53333,
    address: "تهران، ستارخان، خیابان هفتم، پلاک ۴۰",
    description:
      "رای بورد تخصصی بیماری های نوزادان و کودکان درمان اختلالات گوارشی و الرژیک نوزادان و کودکان اختلالات رشد و نمو نوزادان و کودکان اختلال رشد و بلوغ نوجواناندر مطب سونوگرافی شکم، تست حساسیت به کازیین شیر، تست حساسیت به لاکتوز شیر، تست تنفسی ( اسپیرومتری )، حضور دستیار کارشناس ارشد مشاور کودکان و نوجوانان جهت راهنمایی های تکمیلی و پاسخدهی به پرسش های مراجعین انجام می شودسابقه فعالیت بیش از 20  ",
    phoneNumber: "۰۲۱-۱۲۳۴ ۵۶۷۶۷",
    linkSite: "drAlivaraste.ir",
    linkInstagramAcc: "instagram.com/dr.alivaraste",
    comments: [
      {
        id: 1,
        name: "فاطمه",
        image: "/public/image/user-photo/Ellipse 39 (1).png",
        distinction: 4,
        date: "۱۴۰۳/۱۰/۲۰",
        description:
          "دکتر وارسته رو از اینستاگرام میشناختم و اینجا تونستم به راحتی نوبت رزرو کنم.",
      },
    ],
  },
  {
    id: 3,
    name: " بهنوش حسینی",
    image: "/public/image/drs/3.png",
    specialization: "جراح گوش حلق بینی",
    city: "تهران",
    distinction: 3.5,
    doctorNumber: 44333,
    address: "تهران، نیاوران ، خیابان هفتم، پلاک ۵۰",
    description:
      "رای بورد تخصصی بیماری های نوزادان و کودکان درمان اختلالات گوارشی و الرژیک نوزادان و کودکان اختلالات رشد و نمو نوزادان و کودکان اختلال رشد و بلوغ نوجواناندر مطب سونوگرافی شکم، تست حساسیت به کازیین شیر، تست حساسیت به لاکتوز شیر، تست تنفسی ( اسپیرومتری )، حضور دستیار کارشناس ارشد مشاور کودکان و نوجوانان جهت راهنمایی های تکمیلی و پاسخدهی به پرسش های مراجعین انجام می شودسابقه فعالیت بیش از 20  ",
    phoneNumber: "۰۲۱-۱۲۳۴ ۵۶۷۶۷",
    linkSite: "drBehnoshHosseinie.ir",
    linkInstagramAcc: "instagram.com/dr.behnoshHosseinie",
    comments: [
      {
        id: 1,
        name: "فاطمه",
        image: "/public/image/user-photo/Ellipse 39 (1).png",
        distinction: 4,
        date: "۱۴۰۳/۱۰/۲۰",
        description:
          "دکتر وارسته رو از اینستاگرام میشناختم و اینجا تونستم به راحتی نوبت رزرو کنم.",
      },
    ],
  },
  {
    id: 4,
    name: "علی راد",
    image: "/public/image/drs/4.png",
    specialization: "متخصص ریه",
    city: "تهران",
    distinction: 3.5,
    doctorNumber: 44555,
    address: "تهران، نیاوران ، خیابان هفتم، پلاک ۵۰",
    description:
      "رای بورد تخصصی بیماری های نوزادان و کودکان درمان اختلالات گوارشی و الرژیک نوزادان و کودکان اختلالات رشد و نمو نوزادان و کودکان اختلال رشد و بلوغ نوجواناندر مطب سونوگرافی شکم، تست حساسیت به کازیین شیر، تست حساسیت به لاکتوز شیر، تست تنفسی ( اسپیرومتری )، حضور دستیار کارشناس ارشد مشاور کودکان و نوجوانان جهت راهنمایی های تکمیلی و پاسخدهی به پرسش های مراجعین انجام می شودسابقه فعالیت بیش از 20  ",
    phoneNumber: "۰۲۱-۱۲۳۴ ۵۶۷۶۷",
    linkSite: "drAliRad.ir",
    linkInstagramAcc: "instagram.com/dr.aliRad",
    comments: [
      {
        id: 1,
        name: "فاطمه",
        image: "/public/image/user-photo/Ellipse 39 (1).png",
        distinction: 4,
        date: "۱۴۰۳/۱۰/۲۰",
        description:
          "دکتر وارسته رو از اینستاگرام میشناختم و اینجا تونستم به راحتی نوبت رزرو کنم.",
      },
    ],
  },
  {
    id: 5,
    name: "لعیا زنگنه",
    image: "/public/image/drs/5.png",
    specialization: "متخصص قلب و عروق",
    city: "تهران",
    distinction: 3.5,
    doctorNumber: 35687,
    address: "تهران، نیاوران ، خیابان هفتم، پلاک ۵۰",
    description:
      "رای بورد تخصصی بیماری های نوزادان و کودکان درمان اختلالات گوارشی و الرژیک نوزادان و کودکان اختلالات رشد و نمو نوزادان و کودکان اختلال رشد و بلوغ نوجواناندر مطب سونوگرافی شکم، تست حساسیت به کازیین شیر، تست حساسیت به لاکتوز شیر، تست تنفسی ( اسپیرومتری )، حضور دستیار کارشناس ارشد مشاور کودکان و نوجوانان جهت راهنمایی های تکمیلی و پاسخدهی به پرسش های مراجعین انجام می شودسابقه فعالیت بیش از 20  ",
    phoneNumber: "۰۲۱-۱۲۳۴ ۵۶۷۶۷",
    linkSite: "drLaiazengh.ir",
    linkInstagramAcc: "instagram.com/dr.Laiazengh",
    comments: [
      {
        id: 1,
        name: "فاطمه",
        image: "/public/image/user-photo/Ellipse 39 (1).png",
        distinction: 4,
        date: "۱۴۰۳/۱۰/۲۰",
        description:
          "دکتر وارسته رو از اینستاگرام میشناختم و اینجا تونستم به راحتی نوبت رزرو کنم.",
      },
    ],
  },
  {
    id: 6,
    name: " یاشار پناهی",
    image: "/public/image/drs/6.png",
    specialization: "متخصص روانشناس بالینی",
    city: "تهران",
    distinction: 3.5,
    doctorNumber: 78928,
    address: "تهران، نیاوران ، خیابان هفتم، پلاک ۵۰",
    description:
      "رای بورد تخصصی بیماری های نوزادان و کودکان درمان اختلالات گوارشی و الرژیک نوزادان و کودکان اختلالات رشد و نمو نوزادان و کودکان اختلال رشد و بلوغ نوجواناندر مطب سونوگرافی شکم، تست حساسیت به کازیین شیر، تست حساسیت به لاکتوز شیر، تست تنفسی ( اسپیرومتری )، حضور دستیار کارشناس ارشد مشاور کودکان و نوجوانان جهت راهنمایی های تکمیلی و پاسخدهی به پرسش های مراجعین انجام می شودسابقه فعالیت بیش از 20  ",
    phoneNumber: "۰۲۱-۱۲۳۴ ۵۶۷۶۷",
    linkSite: "drYasharePanahi.ir",
    linkInstagramAcc: "instagram.com/dr.yasharePanahi",
    comments: [
      {
        id: 1,
        name: "فاطمه",
        image: "/public/image/user-photo/Ellipse 39 (1).png",
        distinction: 4,
        date: "۱۴۰۳/۱۰/۲۰",
        description:
          "دکتر وارسته رو از اینستاگرام میشناختم و اینجا تونستم به راحتی نوبت رزرو کنم.",
      },
    ],
  },
  {
    id: 7,
    name: "زهرا سعادتی",
    image: "/public/image/drs/7.png",
    specialization: "متخصص گوش و حلق و بینی",
    city: "تهران",
    distinction: 3.5,
    doctorNumber: 58635,
    address: "تهران، نیاوران ، خیابان هفتم، پلاک ۵۰",
    description:
      "رای بورد تخصصی بیماری های نوزادان و کودکان درمان اختلالات گوارشی و الرژیک نوزادان و کودکان اختلالات رشد و نمو نوزادان و کودکان اختلال رشد و بلوغ نوجواناندر مطب سونوگرافی شکم، تست حساسیت به کازیین شیر، تست حساسیت به لاکتوز شیر، تست تنفسی ( اسپیرومتری )، حضور دستیار کارشناس ارشد مشاور کودکان و نوجوانان جهت راهنمایی های تکمیلی و پاسخدهی به پرسش های مراجعین انجام می شودسابقه فعالیت بیش از 20  ",
    phoneNumber: "۰۲۱-۱۲۳۴ ۵۶۷۶۷",
    linkSite: "drZahraSaeedat.ir",
    linkInstagramAcc: "instagram.com/dr.zahraSaeedat",
    comments: [
      {
        id: 1,
        name: "فاطمه",
        image: "/public/image/user-photo/Ellipse 39 (1).png",
        distinction: 4,
        date: "۱۴۰۳/۱۰/۲۰",
        description:
          "دکتر وارسته رو از اینستاگرام میشناختم و اینجا تونستم به راحتی نوبت رزرو کنم.",
      },
    ],
  },
  {
    id: 8,
    name: " ماهان گروسی",
    image: "/public/image/drs/8.png",
    specialization: "فوق متخصص دنداپزشکی",
    city: "تهران",
    distinction: 3.5,
    doctorNumber: 85263,
    address: "تهران، نیاوران ، خیابان هفتم، پلاک ۵۰",
    description:
      "رای بورد تخصصی بیماری های نوزادان و کودکان درمان اختلالات گوارشی و الرژیک نوزادان و کودکان اختلالات رشد و نمو نوزادان و کودکان اختلال رشد و بلوغ نوجواناندر مطب سونوگرافی شکم، تست حساسیت به کازیین شیر، تست حساسیت به لاکتوز شیر، تست تنفسی ( اسپیرومتری )، حضور دستیار کارشناس ارشد مشاور کودکان و نوجوانان جهت راهنمایی های تکمیلی و پاسخدهی به پرسش های مراجعین انجام می شودسابقه فعالیت بیش از 20  ",
    phoneNumber: "۰۲۱-۱۲۳۴ ۵۶۷۶۷",
    linkSite: "drMahamGrosi.ir",
    linkInstagramAcc: "instagram.com/dr.mahamGrosi",
    comments: [
      {
        id: 1,
        name: "فاطمه",
        image: "/public/image/user-photo/Ellipse 39 (1).png",
        distinction: 4,
        date: "۱۴۰۳/۱۰/۲۰",
        description:
          "دکتر وارسته رو از اینستاگرام میشناختم و اینجا تونستم به راحتی نوبت رزرو کنم.",
      },
    ],
  },
];
