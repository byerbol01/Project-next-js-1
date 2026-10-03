"use client";
import React, { useEffect, useRef, useState } from "react";

/* =========================================================
   RASMLAR (public papkasi)
   ========================================================= */
const BOTTLE_19L = encodeURI("/19 литров 1 (1).png");
const IMAGE_29 = encodeURI("/image 29.png");
// Har bir mahsulot uchun alohida rasm bo'lsa shu yerda almashtiring:
const IMG_5L = IMAGE_29;
const IMG_15L = IMAGE_29;
const IMG_10L = IMAGE_29;

const MOUNTAIN =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80";

/* =========================================================
   RANGLAR
   ========================================================= */
const BLUE = "#1b7aa8";
const GREEN = "#146654";
const RED = "#c8102e";
const TEXT = "#2b2f33";

/* =========================================================
   MA'LUMOTLAR
   ========================================================= */
const products = [
  { id: 1, title: "Питьевая вода негазированная 18.9 л", pack: "1 шт", min: "2 бутыли", price: "9.00 р.", image: BOTTLE_19L },
  { id: 2, title: "Питьевая вода негазированная 5.0 л", pack: "2 шт", min: "4 упаковки", price: "5.60 р.", image: IMG_5L },
  { id: 3, title: "Питьевая вода негазированная 1.5 л", pack: "2 шт", min: "4 упаковки", price: "8.40 р.", image: IMG_15L },
  { id: 4, title: "Питьевая вода негазированная 1.0 л", pack: "6 шт", min: "4 упаковки", price: "7.20 р.", image: IMG_10L },
];

const categories = [
  { label: "Для школ и садов", src: "/Rectangle%2017.png" },
  { label: "Для дома", src: "/Rectangle%2018.png" },
  { label: "Для офиса", src: "/Rectangle%2019.png" },
];

// Stage (1280 x 680) koordinatalari: kartochka (x, y) va nuqta markazi (dx, dy)
const benefits = [
  { lines: ["Самая экологически", "чистая вода в РБ"], x: 103, y: 68, dx: 377, dy: 134 },
  { lines: ["Без железа и", "примесей солей"], x: 7, y: 284, dx: 281, dy: 351 },
  { lines: ["Не проходит", "обратный осмос"], x: 130, y: 499, dx: 406, dy: 564 },
  { lines: ["Способствует", "очищению организма"], x: 863, y: 86, dx: 832, dy: 153 },
  { lines: ["Способствует", "очищению организма"], x: 1034, y: 326, dx: 1001, dy: 392 },
  { lines: ["Способствует", "очищению организма"], x: 877, y: 532, dx: 845, dy: 600 },
];

const reviews = [
  { company: ["ОАО МИНСКИЙ", "ТРАКТОРНЫЙ ЗАВОД"], greeting: "Уважаемый Максим Борисович!", text: "Администрация ОАО «Минский тракторный завод» выражает глубокую признательность и искреннюю благодарность Вам и всему коллективу за многолетнее сотрудничество." },
  { company: ["ООО ФАРМТЕХНОЛОГИЯ"], greeting: "Уважаемый Максим Борисович!", text: "Коллектив ООО «Фармтехнология» выражает благодарность Вам и всему коллективу Государственного предприятия «Беларусьторг» за качественную воду." },
  { company: ["ОАО ЗСКА"], text: "ОАО «ЗСКА» выражает глубокую признательность и искреннюю благодарность компании ГП «Беларусьторг» за бесперебойную и своевременную поставку питьевой воды на наше предприятие." },
  { company: ["МИНСКИНЖПРОЕКТ"], text: "Коллектив УП \"МИНСКИНЖПРОЕКТ\" выражает глубокую признательность и искреннюю благодарность Вам и всему коллективу ГП \"Беларусьторг\" за обеспечения нашего предприятия питьевой водой. Приятно отметить со..." },
];

const newsTop = [
  { title: 'АКЦИЯ "БЫВШИХ НЕ БЫВАЕТ"', date: "19 августа 2022", views: 28, badge: "light" },
  { title: 'АКЦИЯ "ВЫГОДНОЕ ЗНАКОМСТВО С "БОРОВОЙ"!"', date: "19 августа 2022", views: 49, badge: "dark" },
];
const newsBottom = [
  { title: "АКЦИЯ ДЛЯ ШКОЛ И ДОШКОЛЬНЫХ УЧРЕЖДЕНИЙ!", date: "26 августа 2021", views: 762, badge: "bottle" },
  { title: "ВОДА БОРОВАЯ НА ПОРТАЛЕ РЕЙТИНГОВОЙ ОЦЕНКИ", date: "12 января 2021", views: 1087, badge: "quality" },
];

/* =========================================================
   IKONKALAR
   ========================================================= */
function PineCone({ className = "w-5 h-5", color = "currentColor" }) {
  const rows = [
    { y: 4, xs: [12] },
    { y: 7.6, xs: [9, 15] },
    { y: 11.2, xs: [6, 12, 18] },
    { y: 14.8, xs: [9, 15] },
    { y: 18.4, xs: [12] },
  ];
  return (
    <svg className={className} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      {rows.flatMap((r) =>
        r.xs.map((x) => (
          <path key={`${r.y}-${x}`} d={`M${x} ${r.y - 3.2} L${x + 2.8} ${r.y} L${x} ${r.y + 3.2} L${x - 2.8} ${r.y} Z`} />
        ))
      )}
      <rect x="11.2" y="21" width="1.6" height="2.4" rx="0.6" />
    </svg>
  );
}

function ViberIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.39 4.61C17.43 2.65 14.73 1.63 11.96 1.76C6.73 1.99 2.5 6.22 2.27 11.45C2.15 14.22 3.17 16.92 5.13 18.88L4.35 22.18L7.84 21.05C9.09 21.68 10.51 22 12 22C17.52 22 22 17.52 22 12C22 9.27 20.98 6.57 19.39 4.61ZM16.47 15.11C16.27 15.65 15.35 16.09 14.82 16.14C14.47 16.17 14.02 16.19 12.41 15.53C10.36 14.69 9.04 12.61 8.94 12.47C8.84 12.33 8.11 11.36 8.11 10.36C8.11 9.36 8.62 8.87 8.82 8.66C9.02 8.45 9.26 8.41 9.46 8.41C9.62 8.41 9.77 8.42 9.9 8.43C10.05 8.44 10.17 8.46 10.3 8.77C10.45 9.13 10.82 10.04 10.86 10.13C10.91 10.23 10.94 10.35 10.87 10.49C10.8 10.63 10.76 10.71 10.66 10.83C10.55 10.95 10.44 11.09 10.34 11.2C10.22 11.32 10.1 11.45 10.24 11.69C10.38 11.93 10.86 12.72 11.57 13.35C12.48 14.16 13.23 14.42 13.5 14.53C13.74 14.63 13.88 14.61 14.02 14.45C14.16 14.29 14.62 13.75 14.78 13.53C14.94 13.31 15.1 13.35 15.32 13.43C15.54 13.51 16.72 14.09 16.96 14.21C17.2 14.33 17.36 14.39 17.42 14.49C17.48 14.59 17.48 15.01 16.47 15.11Z" />
    </svg>
  );
}

function EyeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12C4 8 7.6 5.5 12 5.5S20 8 21.5 12C20 16 16.4 18.5 12 18.5S4 16 2.5 12z" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

function ArrowLong({ className = "w-7 h-3" }) {
  return (
    <svg className={className} viewBox="0 0 28 12" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M0 6h26M21 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Leaf({ className = "", rotate = 0 }) {
  return (
    <svg className={className} viewBox="0 0 40 40" style={{ transform: `rotate(${rotate}deg)` }} aria-hidden="true">
      <path d="M4 36C4 16 16 4 36 4C36 24 24 36 4 36Z" fill="#58b560" />
      <path d="M6 34C14 24 22 16 32 8" stroke="#2f8a43" strokeWidth="1.4" fill="none" />
    </svg>
  );
}

// "ВОДА из заповедного ЛЕСА" nishoni
function ForestBadge({ size = 120, className = "" }) {
  const id = `fb-${size}`;
  return (
    <div className={`shrink-0 ${className}`} style={{ width: size, height: size }}>
      <div className="relative w-full h-full">
        <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#1b7aa8" />
              <stop offset="0.5" stopColor="#1b7aa8" />
              <stop offset="1" stopColor="#2f9c5c" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="49" fill="rgba(255,255,255,0.94)" stroke={`url(#${id})`} strokeWidth="6" />
          <g fill="#146654" opacity="0.92">
            <path d="M12 38l15-7-9 11zM8 50l16-3-10 9zM17 25l13-9-7 13z" />
            <path d="M106 40l-15-5 9 11zM110 53l-16-1 10 9z" />
          </g>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-none">
          <span className="font-black" style={{ color: BLUE, fontSize: size * 0.2 }}>ВОДА</span>
          <span className="font-semibold" style={{ color: GREEN, fontSize: size * 0.09, margin: `${size * 0.025}px 0` }}>из заповедного</span>
          <span className="font-black" style={{ color: GREEN, fontSize: size * 0.2 }}>ЛЕСА</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   UMUMIY ELEMENTLAR
   ========================================================= */
function PillButton({ children, className = "", upper = false }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#1b7aa8] text-white font-semibold transition-colors hover:bg-[#15658c] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b7aa8] ${upper ? "uppercase tracking-[0.02em]" : ""} ${className}`}
    >
      {children}
    </button>
  );
}

function SliderArrow({ side }) {
  return (
    <button
      type="button"
      aria-label={side === "left" ? "Oldingi" : "Keyingi"}
      className={`absolute top-1/2 -translate-y-1/2 z-30 w-[19px] h-[26px] rounded-[3px] bg-[#8d9ba6]/75 hover:bg-[#6c7b87] text-white flex items-center justify-center transition-colors ${side === "left" ? "left-[3px]" : "right-[3px]"}`}
    >
      <svg width="7" height="11" viewBox="0 0 8 12" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d={side === "left" ? "M6 1L1.5 6L6 11" : "M2 1L6.5 6L2 11"} />
      </svg>
    </button>
  );
}

function SectionTitle({ children, light = false, bold = false }) {
  return (
    <div className="flex items-center gap-3">
      <PineCone className="w-[22px] h-[22px] shrink-0" color={light ? "#ffffff" : GREEN} />
      <h2
        className={`text-[20px] sm:text-[24px] uppercase leading-none ${bold ? "font-bold" : "font-medium"}`}
        style={{ color: light ? "#fff" : TEXT }}
      >
        {children}
      </h2>
    </div>
  );
}

function NewsCard({ title, date, views, badge }) {
  return (
    <a
      href="#news"
      className="group flex flex-col bg-[#f4f5f7] px-6 pt-8 pb-7 min-h-[280px] hover:bg-[#eceff2] transition-colors"
    >
      <div className="w-[104px] h-[104px] shrink-0">
        {badge === "light" && (
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <span className="font-black italic text-[22px] -rotate-3" style={{ color: BLUE }}>АКЦИЯ!</span>
          </div>
        )}
        {badge === "dark" && (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0e7aa8] to-[#06527a] flex items-center justify-center">
            <span className="font-black italic text-[22px] text-white -rotate-3">АКЦИЯ!</span>
          </div>
        )}
        {badge === "bottle" && (
          <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center border border-[#e3ecf1]">
            <img src={BOTTLE_19L} alt="Бутыль 18.9 л" className="h-[92%] w-auto object-contain" />
          </div>
        )}
        {badge === "quality" && (
          <div className="w-full h-full rounded-full bg-[#bde3f7] flex flex-col items-center justify-center text-center">
            <svg className="w-11 h-8" viewBox="0 0 32 24" fill="none" stroke="#2b3a44" strokeWidth="1.5" aria-hidden="true">
              <path d="M2 22h28M5 22V9h7v13M14 22V3h8v19M24 22V12h5v10" />
            </svg>
            <span className="mt-1 text-[9px] font-extrabold text-[#2b3a44] leading-none">КАЧЕСТВО</span>
            <span className="text-[8.5px] font-bold text-[#2b3a44] leading-none mt-[3px]">УСЛУГ.БЕЛ</span>
          </div>
        )}
      </div>
      <h3 className="mt-9 font-['Roboto',sans-serif] font-normal text-[18px] uppercase leading-[1.35]" style={{ color: TEXT }}>
        {title}
      </h3>
      <div className="mt-auto pt-5 flex items-center gap-5 text-[15px]" style={{ color: "#2a7a58" }}>
        <span>{date}</span>
        <span className="flex items-center gap-1.5">
          <EyeIcon className="w-[17px] h-[17px]" />
          {views}
        </span>
      </div>
    </a>
  );
}

/* =========================================================
   ASOSIY SAHIFA
   ========================================================= */
export default function Home() {
  const [quantities, setQuantities] = useState({ 1: 1, 2: 1, 3: 1, 4: 1 });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleQuantity = (id, delta) =>
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, (prev[id] || 1) + delta) }));

  // Otzyvlar slayderi
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const syncArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };
  useEffect(() => {
    syncArrows();
    window.addEventListener("resize", syncArrows);
    return () => window.removeEventListener("resize", syncArrows);
  }, []);
  const slide = (dir) => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return;
    el.scrollBy({ left: dir * (el.firstElementChild.getBoundingClientRect().width + 31), behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white font-['Open_Sans',sans-serif] antialiased min-h-screen overflow-x-hidden" style={{ color: TEXT }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Open+Sans:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap');
        .no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>

      <div className="w-full max-w-[1328px] mx-auto px-4 sm:px-6">
        {/* =====================================================
            1. HERO
           ===================================================== */}
        <section className="pt-6 grid grid-cols-1 lg:grid-cols-[849fr_413fr] gap-[18px] font-['Montserrat',sans-serif]">
          {/* ---- Katta banner ---- */}
          <div className="relative overflow-hidden rounded-[8px] bg-[#f4f5f7] h-[524px]">
            {/* Tog' rasmi */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[29%] overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${MOUNTAIN}')` }} />
              <div className="absolute inset-0 bg-[#6f8fa6]/45 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-transparent" />
              <span
                className="absolute right-[42px] top-1/2 -translate-y-1/2 text-white/40 font-extrabold text-[64px] leading-none select-none"
                style={{ writingMode: "vertical-rl" }}
              >
                БОРОВАЯ
              </span>
            </div>

            {/* Oq doira */}
            <div className="hidden md:block absolute left-[52%] -bottom-[160px] w-[300px] h-[300px] rounded-full bg-white/80" />

            {/* Xira orqa butilka */}
            <img
              src={BOTTLE_19L}
              alt=""
              aria-hidden="true"
              className="hidden md:block absolute left-[54%] top-[150px] w-[110px] h-[220px] object-contain opacity-75 blur-[4px]"
            />

            {/* Asosiy butilka + Akciya */}
            <div className="absolute z-10 left-[62%] md:left-[61%] max-md:right-3 max-md:left-auto top-[250px] md:top-[99px] w-[110px] h-[200px] md:w-[170px] md:h-[319px] drop-shadow-[0_18px_22px_rgba(10,50,80,0.22)]">
              <img src={BOTTLE_19L} alt="Бутыль воды Боровая" className="w-full h-full object-contain" />
              <div className="hidden md:flex absolute left-[97px] top-[19px] w-[72px] h-[72px] rounded-full bg-[#4b8fb5]/90 text-white items-center justify-center font-semibold text-[16px]">
                Акция
              </div>
            </div>

            {/* Sarlavha + tugma */}
            <div className="relative z-20 pt-[72px] pl-[30px] max-md:max-w-[62%]">
              <h1 className="text-[24px] sm:text-[31px] font-bold text-[#1b7aa8] leading-[1.4] tracking-[-0.01em]">
                Выгодное знакомство<br />с «Боровой»
              </h1>
              <PillButton upper className="mt-[34px] h-[42px] w-[141px] text-[15px]">Заказать</PillButton>
            </div>

            {/* Aksiya matni */}
            <div className="absolute z-20 left-[30px] bottom-[26px] w-[300px] max-md:w-[56%] text-[11px] leading-[1.55] text-[#3f444a]">
              <p className="mb-2.5">Акция для новых клиентов (физических лиц)</p>
              <p className="mb-2.5">
                Сделайте заказ с 01.08.2022 до 31.10.2022 и получайте воду "Боровая" по акционной цене последующие 3 месяца:
              </p>
              <p className="font-bold">1-й месяц - <span className="font-medium">4.40 руб.</span></p>
              <p className="font-bold">2-й месяц - <span className="font-medium">6.00 руб.</span></p>
              <p className="font-bold mb-2.5">3-й месяц - <span className="font-medium">7.00 руб.</span></p>
              <p className="italic">Оплата наличными при доставке воды курьером</p>
            </div>

            {/* Nishon (faqat katta ekranda) */}
            <ForestBadge size={131} className="hidden xl:block absolute z-20 left-[352px] bottom-[26px]" />
          </div>

          {/* ---- O'ng banner(lar) ---- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-6 lg:gap-6">
            {/* Banner 1 */}
            <div className="relative overflow-hidden rounded-[8px] bg-gradient-to-br from-[#bfdff1] via-[#d8ecf7] to-[#e4f1f9] h-[250px]">
              <SliderArrow side="left" />
              <SliderArrow side="right" />
              <Leaf className="absolute right-2 top-10 w-8 h-8" rotate={60} />
              <Leaf className="absolute left-[44%] bottom-14 w-7 h-7" rotate={115} />
              <img src={BOTTLE_19L} alt="" aria-hidden="true" className="absolute left-[312px] top-[43px] w-[87px] h-[177px] object-contain max-xl:hidden" />
              <img src={BOTTLE_19L} alt="Бутыли" className="absolute right-[34px] xl:right-auto xl:left-[223px] top-[43px] w-[87px] h-[177px] object-contain drop-shadow-[0_8px_10px_rgba(10,50,80,0.18)]" />
              <div className="absolute z-10 left-[30px] top-[40px] w-[180px]">
                <h2 className="text-[21px] font-bold text-[#1b7aa8] leading-[1.25]">Живая сила природы!</h2>
                <p className="mt-[18px] text-[13px] font-medium text-[#3a4650] leading-[1.35]">
                  Закажите воду с<br />бесплатной доставкой!
                </p>
              </div>
              <PillButton upper className="absolute left-[31px] top-[150px] h-[36px] w-[113px] text-[13px]">Заказать</PillButton>
              <ForestBadge size={62} className="absolute left-[156px] top-[176px]" />
            </div>

            {/* Banner 2 */}
            <div className="relative overflow-hidden rounded-[8px] bg-gradient-to-br from-[#e0eef7] via-[#e9f3f9] to-[#d5e8f4] h-[250px]">
              <SliderArrow side="left" />
              <SliderArrow side="right" />
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 30%, rgba(27,122,168,0.12) 0 2px, transparent 3px), radial-gradient(circle at 70% 70%, rgba(27,122,168,0.12) 0 2px, transparent 3px)",
                  backgroundSize: "34px 34px, 46px 46px",
                }}
              />
              <img src={BOTTLE_19L} alt="Бутыль" className="absolute right-[34px] xl:right-auto xl:left-[278px] top-[20px] w-[98px] h-[215px] object-contain drop-shadow-[0_8px_10px_rgba(10,50,80,0.18)]" />
              <div className="absolute z-10 left-[205px] top-[84px] w-[70px] bg-[#1b6e9c] text-white rounded-[3px] py-[7px] text-center leading-none shadow-md max-xl:hidden">
                <div className="text-[8px] font-semibold tracking-wide opacity-90">ЦЕНА ОТ</div>
                <div className="text-[13px] font-extrabold my-[5px]">5.50 РУБ</div>
                <div className="text-[8px] opacity-85">за 1 шт</div>
              </div>
              <div className="absolute z-10 left-[28px] top-[34px] w-[190px]">
                <h2 className="text-[21px] font-bold text-[#1b7aa8] leading-[1.25]">Учимся вместе<br />с "Боровой"</h2>
              </div>
              <PillButton upper className="absolute left-[28px] top-[105px] h-[42px] w-[116px] text-[13px]">Заказать</PillButton>
              <ForestBadge size={64} className="absolute left-[142px] top-[164px]" />
            </div>
          </div>
        </section>

        {/* =====================================================
            2. ВОДА ДЛЯ КАЖДОГО
           ===================================================== */}
        <section className="mt-16 lg:mt-[90px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div>
            <h2 className="text-[38px] sm:text-[49px] font-medium leading-[1.2] tracking-[-0.01em]" style={{ color: "#222" }}>
              Вода<br />для каждого!
            </h2>
            <PillButton className="mt-[34px] h-[40px] px-[26px] text-[16px] font-medium">Перейти в каталог</PillButton>
          </div>

          <div className="flex gap-[30px] overflow-x-auto no-scrollbar lg:overflow-visible pb-2 lg:pb-0">
            {categories.map((c) => (
              <a
                key={c.label}
                href="#catalog"
                className="relative shrink-0 w-[200px] sm:w-[230px] h-[260px] sm:h-[300px] rounded-[11px] overflow-hidden bg-slate-200 shadow-[0_4px_14px_rgba(0,0,0,0.14)]"
              >
                <img src={c.src} alt={c.label} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/75 to-transparent" />
                <span className="absolute left-[22px] bottom-[20px] text-white text-[15px] leading-none">{c.label}</span>
              </a>
            ))}
          </div>
        </section>

        {/* =====================================================
            3. ПОПУЛЯРНЫЕ ТОВАРЫ
           ===================================================== */}
        <section id="catalog" className="mt-20 lg:mt-[170px]">
          <div className="flex items-center justify-between mb-[44px]">
            <SectionTitle>Популярные товары</SectionTitle>
            <a href="#catalog" className="flex items-center gap-3 text-[15px] font-medium hover:opacity-75 transition-opacity" style={{ color: GREEN }}>
              <span>Весь каталог</span>
              <ArrowLong className="w-[30px] h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-[#e5e7e9]">
            {products.map((p) => (
              <div key={p.id} className="border-r border-b border-[#e5e7e9] bg-white px-[18px] pt-[25px] pb-[23px] flex flex-col">
                <div className="h-[253px] w-full flex items-center justify-center">
                  <img src={p.image} alt={p.title} className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="mt-[34px] text-[15px] leading-[1.3] min-h-[40px]" style={{ color: TEXT }}>{p.title}</h3>
                <div className="mt-[6px] text-[13px] leading-[1.6] text-[#707579]">
                  <div>Кол-во шт в упаковке: <span style={{ color: BLUE }}>{p.pack}</span></div>
                  <div>Минимальный заказ: <span style={{ color: BLUE }}>{p.min}</span></div>
                </div>
                <div className="mt-[14px] font-bold text-[17px] leading-none" style={{ color: RED }}>{p.price}</div>
                <div className="mt-[18px] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-[10px]">
                    <button
                      type="button"
                      aria-label="Kamaytirish"
                      onClick={() => handleQuantity(p.id, -1)}
                      className="w-[20px] h-[20px] rounded-full border flex items-center justify-center text-[14px] leading-none pb-[1px] transition-colors hover:bg-[#146654] hover:text-white"
                      style={{ borderColor: GREEN, color: GREEN }}
                    >
                      &minus;
                    </button>
                    <span className="text-[14px] w-3 text-center">{quantities[p.id] || 1}</span>
                    <button
                      type="button"
                      aria-label="Ko'paytirish"
                      onClick={() => handleQuantity(p.id, 1)}
                      className="w-[20px] h-[20px] rounded-full border flex items-center justify-center text-[14px] leading-none pb-[1px] transition-colors hover:bg-[#146654] hover:text-white"
                      style={{ borderColor: GREEN, color: GREEN }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="h-[30px] px-[18px] rounded-full border text-[13.5px] whitespace-nowrap transition-colors hover:text-white hover:bg-[#146654] active:scale-[0.97]"
                    style={{ borderColor: GREEN, color: GREEN }}
                  >
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            4. ПОЧЕМУ СТОИТ ВЫБРАТЬ ВОДУ «БОРОВАЯ»?
           ===================================================== */}
        <section className="mt-20 lg:mt-[140px]">
          <SectionTitle>Почему стоит выбрать воду «Боровая»?</SectionTitle>

          {/* Desktop: 1280 x 680 stage (foizlarda) */}
          <div className="hidden xl:block relative mt-[10px] w-full" style={{ aspectRatio: "1280 / 680" }}>
            {/* Konsentrik doiralar */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[470, 720, 980].map((d, i) => (
                <div
                  key={d}
                  className="absolute rounded-full border border-[#e8ecef]"
                  style={{
                    width: `${(d / 1280) * 100}%`,
                    aspectRatio: "1 / 1",
                    left: `${((640 - d / 2) / 1280) * 100}%`,
                    top: `${((370 - d / 2) / 680) * 100}%`,
                    opacity: 1 - i * 0.25,
                  }}
                />
              ))}
            </div>

            <img
              src={BOTTLE_19L}
              alt="Бутыль воды Боровая"
              className="absolute object-contain drop-shadow-[0_24px_28px_rgba(27,122,168,0.14)]"
              style={{ left: `${(486 / 1280) * 100}%`, top: `${(71 / 680) * 100}%`, width: `${(306 / 1280) * 100}%`, height: `${(593 / 680) * 100}%` }}
            />

            {benefits.map((b, i) => (
              <React.Fragment key={i}>
                <div
                  className="absolute bg-white rounded-[6px] shadow-[0_6px_24px_rgba(20,50,80,0.07)] pl-[28px] pt-[24px]"
                  style={{
                    left: `${(b.x / 1280) * 100}%`,
                    top: `${(b.y / 680) * 100}%`,
                    width: `${(244 / 1280) * 100}%`,
                    height: `${(134 / 680) * 100}%`,
                  }}
                >
                  <PineCone className="w-[20px] h-[20px] mb-[10px]" color={BLUE} />
                  <p className="text-[15px] leading-[1.4]" style={{ color: TEXT }}>
                    {b.lines[0]}<br />{b.lines[1]}
                  </p>
                </div>
                <span
                  className="absolute w-[13px] h-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    left: `${(b.dx / 1280) * 100}%`,
                    top: `${(b.dy / 680) * 100}%`,
                    background: BLUE,
                    boxShadow: "0 0 0 7px rgba(27,122,168,0.15)",
                  }}
                />
              </React.Fragment>
            ))}
          </div>

          {/* Kichik ekranlar */}
          <div className="xl:hidden mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
            <div className="space-y-4">
              {benefits.slice(0, 3).map((b, i) => (
                <div key={i} className="bg-white rounded-[6px] shadow-[0_6px_24px_rgba(20,50,80,0.07)] px-6 py-5">
                  <PineCone className="w-[20px] h-[20px] mb-2.5" color={BLUE} />
                  <p className="text-[15px] leading-[1.4]">{b.lines.join(" ")}</p>
                </div>
              ))}
            </div>
            <img src={BOTTLE_19L} alt="Бутыль воды Боровая" className="mx-auto w-[200px] h-[360px] object-contain order-first md:order-none" />
            <div className="space-y-4">
              {benefits.slice(3).map((b, i) => (
                <div key={i} className="bg-white rounded-[6px] shadow-[0_6px_24px_rgba(20,50,80,0.07)] px-6 py-5">
                  <PineCone className="w-[20px] h-[20px] mb-2.5" color={BLUE} />
                  <p className="text-[15px] leading-[1.4]">{b.lines.join(" ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* =====================================================
          5. НАМ ДОВЕРЯЮТ + ОТЗЫВЫ
         ===================================================== */}
      <div className="relative mt-20 lg:mt-[100px] bg-[#f4f5f7] pb-[63px]">
        <div className="absolute inset-x-0 top-0 h-[271px]" style={{ background: "linear-gradient(135deg,#1582b0 0%,#0d71a0 55%,#08648f 100%)" }} />

        <div className="relative w-full max-w-[1328px] mx-auto px-4 sm:px-6 pt-[100px]">
          <SectionTitle light bold>Нам доверяют</SectionTitle>

          <div className="mt-[34px] bg-white shadow-[0_8px_28px_rgba(0,30,60,0.12)] px-6 sm:px-12 py-8 lg:py-0 lg:h-[175px]">
            <div className="h-full grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between gap-x-8 gap-y-8 items-center justify-items-center">
              {/* Gazprom Neft */}
              <div className="flex items-center gap-2.5 select-none">
                <svg className="w-9 h-12" viewBox="0 0 24 32" aria-hidden="true">
                  <path d="M12 1C7 7 4 12 4 18c0 6 3.6 11 8 13 4.4-2 8-7 8-13C20 12 17 7 12 1Z" fill="#1b7de0" />
                  <path d="M12 9c-2.6 3.4-4 6-4 9 0 3 1.6 5.4 4 6.8 2.4-1.4 4-3.8 4-6.8 0-3-1.4-5.6-4-9Z" fill="#fff" />
                </svg>
                <div className="leading-none">
                  <div className="text-[#1b7de0] font-black text-[24px] tracking-tight">ГАЗПРОМ</div>
                  <div className="mt-1 bg-[#1b7de0] text-white font-black text-[11px] tracking-[0.4em] text-center py-[1px]">НЕФТЬ</div>
                </div>
              </div>
              {/* Alfa-Bank */}
              <div className="flex flex-col items-center select-none leading-none">
                <svg className="w-10 h-10" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M16 2L4 30h6l2-5h8l2 5h6L16 2Zm0 11.5L18.4 20h-4.8L16 13.5Z" fill="#ef3124" />
                </svg>
                <span className="mt-1 text-[#2b2f33] text-[13px] font-bold">Альфа-Банк</span>
              </div>
              {/* RKMC */}
              <div className="flex items-center gap-2 select-none">
                <div className="w-11 h-11 border border-[#333] grid grid-cols-2 text-[11px] font-bold leading-none shrink-0">
                  <span className="border-r border-b border-[#333] flex items-center justify-center">Р</span>
                  <span className="border-b border-[#333] flex items-center justify-center">К</span>
                  <span className="border-r border-[#333] flex items-center justify-center">М</span>
                  <span className="flex items-center justify-center">Ц</span>
                </div>
                <div className="text-[9px] font-bold text-[#333] leading-[1.2]">
                  ГУ РЕСПУБЛИКАНСКИЙ<br />КЛИНИЧЕСКИЙ<br />МЕДИЦИНСКИЙ ЦЕНТР
                  <div className="text-[7px] font-normal text-[#666] mt-0.5">Управления делами Президента<br />Республики Беларусь</div>
                </div>
              </div>
              {/* Beltelecom */}
              <div className="flex items-center gap-2 select-none">
                <svg className="w-11 h-11" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <circle cx="18" cy="18" r="14" stroke="#58b8e8" strokeWidth="3" />
                  <path d="M10 26C14 14 22 10 30 10" stroke="#1b7aa8" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <span className="text-[#1b7aa8] font-black italic text-[20px] tracking-tight">БЕЛТЕЛЕКОМ</span>
              </div>
              {/* Farmtechnology */}
              <div className="select-none border-[2px] border-[#1b3d8f] rounded-[50%] px-6 py-2.5 text-center leading-none">
                <div className="text-[#1b3d8f] font-black italic text-[18px]">ФАРМ</div>
                <div className="text-[#1b3d8f] text-[8px] font-semibold tracking-wide mt-1">ТЕХНОЛОГИЯ</div>
              </div>
              {/* Technobank */}
              <div className="flex flex-col items-center select-none leading-none">
                <svg className="w-10 h-4" viewBox="0 0 32 12" fill="#1b3d8f" aria-hidden="true">
                  <path d="M0 12L6 0h4L4 12H0Zm8 0L14 0h4l-6 12H8Zm8 0L22 0h4l-6 12h-4Zm8 0L30 0h2l-6 12h-2Z" />
                </svg>
                <span className="mt-1.5 text-[#1b3d8f] font-bold text-[19px] tracking-wide">ТЕХНОБАНК</span>
              </div>
            </div>
          </div>

          {/* Отзывы */}
          <div className="mt-[90px] lg:mt-[185px] flex items-center justify-between">
            <SectionTitle bold>Отзывы</SectionTitle>
            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Oldingi fikr"
                disabled={!canPrev}
                onClick={() => slide(-1)}
                className="p-1 transition-colors disabled:cursor-not-allowed disabled:text-[#c6ccd1]"
                style={{ color: GREEN }}
              >
                <ArrowLong className="w-[30px] h-3 rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Keyingi fikr"
                disabled={!canNext}
                onClick={() => slide(1)}
                className="p-1 transition-colors disabled:cursor-not-allowed disabled:text-[#c6ccd1]"
                style={{ color: GREEN }}
              >
                <ArrowLong className="w-[30px] h-3" />
              </button>
            </div>
          </div>

          {/* Slayder o'ngda ekran chetigacha chiqadi */}
          <div style={{ marginRight: "calc(50% - 50vw)" }} className="mt-[46px]">
            <div ref={trackRef} onScroll={syncArrows} className="no-scrollbar flex gap-[31px] overflow-x-auto snap-x snap-mandatory scroll-smooth">
              {reviews.map((r, i) => (
                <article
                  key={i}
                  className="snap-start shrink-0 w-[84%] sm:w-[336px] h-[384px] bg-white px-[41px] pt-[42px] pb-[28px] text-center flex flex-col"
                >
                  <h3 className="font-['Roboto',sans-serif] font-medium text-[17px] uppercase leading-[1.3]" style={{ color: TEXT }}>
                    {r.company.map((l, k) => (
                      <React.Fragment key={k}>
                        {l}
                        {k < r.company.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <PineCone className="w-[20px] h-[20px] mx-auto my-[14px] shrink-0" color={GREEN} />
                  <div className="relative flex-1 overflow-hidden text-[13.5px] leading-[1.6] text-[#7b8086]">
                    {r.greeting && <p className="mb-4">{r.greeting}</p>}
                    <p>{r.text}</p>
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white to-transparent" />
                  </div>
                  <button type="button" className="mt-4 text-[14.5px] hover:underline" style={{ color: BLUE }}>
                    Посмотреть отзыв
                  </button>
                </article>
              ))}
              <div className="shrink-0 w-6 sm:w-[1px]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1328px] mx-auto px-4 sm:px-6">
        {/* =====================================================
            6. VIBER CTA
           ===================================================== */}
        <section className="mt-16 lg:mt-[60px] lg:pt-[74px]">
          <div className="relative rounded-[14px] bg-[#f4f5f8] lg:h-[352px] flex flex-col lg:block px-6 sm:px-[131px] max-lg:py-12">
            <ViberIcon className="absolute left-[15px] top-0 w-[117px] h-[130px] text-[#7360f2]/[0.11] pointer-events-none" />
            <ViberIcon className="absolute right-[52px] top-0 w-[80px] h-[80px] text-[#7360f2]/[0.11] pointer-events-none max-lg:hidden" />

            <div className="relative z-10 lg:absolute lg:left-[131px] lg:top-1/2 lg:-translate-y-1/2">
              <h2 className="text-[26px] sm:text-[28px] font-medium leading-tight" style={{ color: "#2b2f33" }}>Закажите воду сейчас</h2>
              <p className="mt-[16px] text-[16px] text-[#3f444a]">Просто напишите нам в Viber</p>
              <PillButton className="mt-[28px] h-[40px] w-[118px] text-[16px] font-medium">Написать</PillButton>
            </div>

            {/* Telefon */}
            <div className="relative z-10 mt-12 mx-auto w-[329px] h-[426px] lg:mt-0 lg:absolute lg:right-[178px] lg:-top-[74px] lg:bottom-0 lg:h-auto lg:mx-0">
              <div className="relative w-full h-full bg-black rounded-t-[48px] p-[7px] pb-0">
                <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[112px] h-[27px] bg-black rounded-full z-30" />
                <div className="w-full h-full bg-white rounded-t-[42px] overflow-hidden flex flex-col">
                  <div className="px-7 pt-3 pb-1.5 flex items-center justify-between text-[13px] font-semibold text-black">
                    <span>15:22</span>
                    <span className="text-[10px] tracking-wide">LTE ▮</span>
                  </div>
                  <div className="px-4 py-2.5 flex items-center justify-between" style={{ color: "#7360f2" }}>
                    <span className="text-[20px] leading-none">&lsaquo;</span>
                    <span className="font-semibold text-[14px] text-[#222]">VodaBorovaya &#9662;</span>
                    <span className="text-[15px] tracking-widest">&#9742;&#9635;</span>
                  </div>
                  <div className="flex-1 p-4 space-y-3.5 min-h-0">
                    <div className="bg-[#e9eaef] rounded-[10px] py-3 px-4 text-center text-[12px] leading-snug text-[#444]">
                      Данный номер отсутствует в списке ваших контактов
                      <div className="mt-2.5">
                        <span className="inline-block px-6 py-1 rounded-full bg-[#7360f2] text-white text-[12px] font-medium">Добавить</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-3 text-[11.5px] leading-snug text-[#555]">
                      &#128274; Сообщения, которые вы отправляете в этот чат, защищены сквозным шифрованием Viber.{" "}
                      <span className="underline font-semibold text-[#222]">Подробнее</span>
                    </div>
                  </div>
                  <div className="bg-white border-t border-[#ececf2] px-4 pt-3 pb-3.5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-[13px] leading-snug text-[#222]">
                        Здравствуйте! Хочу заказать воду для офиса...<span className="text-[#7360f2] animate-pulse">|</span>
                      </span>
                      <span className="shrink-0 w-8 h-8 rounded-full bg-[#7360f2] text-white flex items-center justify-center text-[13px]">&#10148;</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[#9a9aa8] text-[15px] px-1">
                      <span>&#9786;</span><span>&#9787;</span><span>&#128247;</span><span className="text-[11px] font-bold">GIF</span><span>&#9201;</span><span>&#128206;</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-[78px] bottom-[21px] w-[100px] h-[100px] rounded-full bg-[#7a5fb0] border-[4px] border-white/70 flex items-center justify-center shadow-lg max-lg:hidden">
                <ViberIcon className="w-14 h-14 text-white" />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            7. НАШИ НОВОСТИ
           ===================================================== */}
        <section id="news" className="mt-20 lg:mt-[110px]">
          <SectionTitle>Наши новости</SectionTitle>
          <div className="mt-[34px] flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-[440fr_806fr] gap-8">
              {newsTop.map((n) => <NewsCard key={n.title} {...n} />)}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[807fr_440fr] gap-8">
              {newsBottom.map((n) => <NewsCard key={n.title} {...n} />)}
            </div>
          </div>
        </section>

        {/* =====================================================
            8. SEO MATNI
           ===================================================== */}
        <section className="mt-20 lg:mt-[150px] pb-24 lg:pb-[120px]">
          <h2 className="text-[20px] sm:text-[22px] font-medium leading-[1.5] max-w-[1240px]" style={{ color: "#222" }}>
            Природная питьевая бутилированная вода «БОРОВАЯ» – это лучший выбор для дома или офиса! Ваше здоровье и комфорт – наша главная задача!
          </h2>
          <p className="mt-[26px] text-[14px] leading-[1.75] text-[#3f444a]">
            Вода – главный источник жизни на земле. Благодаря ей осуществляются практически все биологические процессы организма. Поэтому мы, люди, не можем обходиться без воды.
          </p>
          <p className="mt-[22px] text-[14px] leading-[1.75] text-[#3f444a]">
            Постоянную нехватку жидкости в организме приходится восполнять самостоятельно. Но выбирать питьевую воду надо с умом, чтобы она была действительно чистой и полезной. Наша компания предоставляет возможность купить питьевую бутилированную воду в Минске с бесплатной доставкой для физических лиц! А для юридических лиц питьевую бутилированную воду доставляем по всей Республике Беларусь.
          </p>

          {isExpanded && (
            <p className="mt-[22px] text-[14px] leading-[1.75] text-[#3f444a]">
              Вода добывается из артезианских скважин, расположенных в экологически чистом районе, окруженном сосновыми лесами. Природная фильтрация через песчаные слои обеспечивает естественную чистоту, идеальный минеральный баланс и мягкий приятный вкус.
            </p>
          )}

          <button
            type="button"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((v) => !v)}
            className="mt-[18px] flex items-center gap-2 text-[15px] font-medium hover:opacity-75 transition-opacity"
            style={{ color: GREEN }}
          >
            <span>{isExpanded ? "Свернуть" : "Читать подробнее"}</span>
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
            </svg>
          </button>
        </section>
      </div>
    </div>
  );
}