"use client";
import React, { useState } from "react";

// Brend Shishka Ikonkasi
function PineConeIcon({ className = "w-5 h-5 text-[#146654]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C11.4 2 10.3 3.1 9.7 4.3C10.4 4.8 11.2 5.3 12 5.3C12.8 5.3 13.6 4.8 14.3 4.3C13.7 3.1 12.6 2 12 2ZM8 5.8C7.1 7.1 6.6 8.3 6.6 9C7.5 9.6 8.6 10 9.8 10C10.5 8.7 11.2 7.4 12 6.7C10.6 6.7 9.2 6.3 8 5.8ZM16 5.8C14.8 6.3 13.4 6.7 12 6.7C12.8 7.4 13.5 8.7 14.2 10C15.4 10 16.5 9.6 17.4 9C17.4 8.3 16.9 7.1 16 5.8ZM5.8 10.6C5.1 11.8 4.8 12.8 4.8 13.4C5.7 14 7.1 14.4 8.7 14.4C9.3 13 10.1 11.8 11.1 11C9.1 11 7.3 10.7 5.8 10.6ZM18.2 10.6C16.7 10.7 14.9 11 12.9 11C13.9 11.8 14.7 13 15.3 14.4C16.9 14.4 18.3 14 19.2 13.4C19.2 12.8 18.9 11.8 18.2 10.6ZM7.3 15.4C6.6 16.4 6.4 17.2 6.4 17.5C7.4 18 9 18.4 10.9 18.4C11.1 17.2 11.7 16 12.4 15.2C10.4 15.2 8.7 15.3 7.3 15.4ZM16.7 15.4C15.3 15.3 13.6 15.2 11.6 15.2C12.3 16 12.9 17.2 13.1 18.4C15 18.4 16.6 18 17.6 17.5C17.6 17.2 17.4 16.4 16.7 15.4ZM11 19.8V22H13V19.8C12.7 19.8 12.3 19.8 12 19.8C11.7 19.8 11.3 19.8 11 19.8Z" />
    </svg>
  );
}

export default function Eqiupment() {
  const [city, setCity] = useState("Минск");
  const [street, setStreet] = useState("ул. Левина, 13");

  return (
    <div className="w-full bg-white font-sans text-slate-800 antialiased py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1240px] mx-auto space-y-7">

        {/* 1. Xleb kroxalari (Breadcrumbs) */}
        <div className="text-[11.5px] text-slate-400 flex items-center gap-1.5">
          <a href="/" className="hover:text-slate-600 transition-colors">
            Главная
          </a>
          <span>•</span>
          <span className="text-slate-500 font-medium">Самовывоз</span>
        </div>

        {/* 2. Sarlavha qismi (Самовывоз) */}
        <div className="flex items-center gap-2.5 pt-1">
          <PineConeIcon className="w-5 h-5 text-[#146654]" />
          <h1 className="text-[20px] sm:text-[22px] font-black uppercase text-[#1a2b3c] tracking-[0.04em]">
            Самовывоз
          </h1>
        </div>

        {/* 3. Filtrlash inputlari (Shahar, Manzil, Tugma) */}
        <div className="flex flex-wrap items-center gap-3.5 pt-1">
          {/* Shahar tanlash */}
          <div className="relative min-w-[200px]">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full appearance-none bg-white border border-slate-200/90 rounded-full px-5 py-2.5 text-[13px] text-slate-700 font-medium shadow-sm focus:outline-none focus:border-[#1b85b8] cursor-pointer pr-10"
            >
              <option value="Минск">Минск</option>
              <option value="Брест">Брест</option>
              <option value="Гродно">Гродно</option>
              <option value="Гомель">Гомель</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 pointer-events-none">
              ▼
            </span>
          </div>

          {/* Manzil tanlash */}
          <div className="relative min-w-[240px]">
            <select
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full appearance-none bg-white border border-slate-200/90 rounded-full px-5 py-2.5 text-[13px] text-slate-700 font-medium shadow-sm focus:outline-none focus:border-[#1b85b8] cursor-pointer pr-10"
            >
              <option value="ул. Левина, 13">ул. Левина, 13</option>
              <option value="пр. Победителей, 20">пр. Победителей, 20</option>
              <option value="ул. Притыцкого, 8">ул. Притыцкого, 8</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 pointer-events-none">
              ▼
            </span>
          </div>

          {/* Qidirish tugmasi */}
          <button className="px-8 py-2.5 bg-[#1b85b8] hover:bg-[#16729e] active:scale-95 text-white font-medium text-[13px] rounded-full shadow-sm shadow-sky-600/20 transition-all">
            Найти
          </button>
        </div>

        {/* 4. Do'kon ma'lumotlari kartasi */}
        <div className="pt-3 space-y-3">
          <h2 className="text-[14px] font-extrabold text-[#1a2b3c]">
            Магазин «АМАТИСТА»
          </h2>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-12 text-[12.5px] text-slate-700">
            {/* Manzil */}
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>ул.Левина, 13</span>
            </div>

            {/* Telefon raqam */}
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#146654] text-white flex items-center justify-center text-[9px] shrink-0">
                &#9742;
              </span>
              <a href="tel:+375172708664" className="hover:text-[#1b85b8] font-medium transition-colors">
                +375 (17) 270-86-64
              </a>
            </div>
          </div>

          {/* Ish tartibi va soatlari */}
          <div className="flex items-center gap-2 text-[12.5px] text-slate-700">
            <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>10:00 – 21:00</span>
          </div>
        </div>

        {/* 5. Interaktiv Xarita */}
        <div className="relative w-full h-[520px] rounded-xl overflow-hidden border border-slate-200 shadow-sm mt-5">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=27.535000%2C53.865000&z=13&pt=27.535000,53.865000,pm2rdm"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen={true}
            title="Карта самовывоза"
            className="w-full h-full filter saturate-[0.95]"
          />

          <div className="absolute bottom-2 left-3 bg-white/95 backdrop-blur-[2px] px-3 py-1 rounded text-[11px] text-slate-600 shadow-sm flex items-center gap-2 border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            <a
              href="https://yandex.by/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1b85b8] hover:underline"
            >
              Открыть в Яндекс.Картах
            </a>
          </div>
        </div>

        {/* =========================================================
            6. YANGI QO'SHILGAN BO'LIM: «КОНТАКТЫ» (PIXEL-PERFECT)[cite: 13]
           ========================================================= */}
        <div className="pt-12 mt-12 border-t border-slate-200/80 space-y-10 text-slate-800">
          
          {/* Sarlavha[cite: 13] */}
          <div className="flex items-center gap-2.5">
            <PineConeIcon className="w-5 h-5 text-[#146654]" />
            <h2 className="text-[20px] sm:text-[22px] font-black uppercase text-[#1a2b3c] tracking-[0.04em]">
              Контакты
            </h2>
          </div>

          {/* 1-Qism: Bo'limlar telefon va emaillari (2 ustun)[cite: 13] */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
            
            {/* 1. Сектор по реализации воды «БОРОВАЯ»[cite: 13] */}
            <div className="space-y-3">
              <h3 className="text-[12.5px] font-bold uppercase tracking-tight text-[#1a2b3c]">
                СЕКТОР ПО РЕАЛИЗАЦИИ ВОДЫ «БОРОВАЯ»:
              </h3>
              <div className="space-y-2 text-[12.5px] text-slate-700">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#146654] text-white flex items-center justify-center text-[8px]">
                    &#9742;
                  </span>
                  <a href="tel:+375172702670" className="hover:text-[#1b85b8] transition-colors">
                    +375 17 270 26 70
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded bg-red-600 text-white flex items-center justify-center text-[7.5px] font-bold">
                    М
                  </span>
                  <a href="tel:+375292892670" className="hover:text-[#1b85b8] transition-colors">
                    +375 29 289 26 70
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded bg-red-600 text-white flex items-center justify-center text-[8px] font-bold">
                    A¹
                  </span>
                  <a href="tel:+375293892670" className="hover:text-[#1b85b8] transition-colors">
                    +375 29 389 26 70
                  </a>
                  <span className="w-4 h-4 rounded-full bg-[#7360f2] text-white flex items-center justify-center text-[9px] ml-1">
                    &#9993;
                  </span>
                </div>

                <div className="flex items-center gap-2.5 pt-0.5">
                  <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:borovaya02@brt.by" className="hover:text-[#1b85b8] transition-colors">
                    borovaya02@brt.by
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Отдел продаж (Юридические лица)[cite: 13] */}
            <div className="space-y-3">
              <h3 className="text-[12.5px] font-bold uppercase tracking-tight text-[#1a2b3c]">
                ОТДЕЛ ПРОДАЖ (ЮРИДИЧЕСКИЕ ЛИЦА):
              </h3>
              <div className="space-y-2 text-[12.5px] text-slate-700">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#146654] text-white flex items-center justify-center text-[8px]">
                    &#9742;
                  </span>
                  <a href="tel:+375172703044" className="hover:text-[#1b85b8] transition-colors">
                    +375 17 270 30 44
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#146654] text-white flex items-center justify-center text-[8px]">
                    &#9742;
                  </span>
                  <a href="tel:+375172703052" className="hover:text-[#1b85b8] transition-colors">
                    +375 17 270 30 52
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Отдел маркетинга[cite: 13] */}
            <div className="space-y-3">
              <h3 className="text-[12.5px] font-bold uppercase tracking-tight text-[#1a2b3c]">
                ОТДЕЛ МАРКЕТИНГА:
              </h3>
              <div className="space-y-2 text-[12.5px] text-slate-700">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#146654] text-white flex items-center justify-center text-[8px]">
                    &#9742;
                  </span>
                  <a href="tel:+375172703040" className="hover:text-[#1b85b8] transition-colors">
                    +375 17 270 30 40
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded bg-red-600 text-white flex items-center justify-center text-[7.5px] font-bold">
                    М
                  </span>
                  <a href="tel:+375295001501" className="hover:text-[#1b85b8] transition-colors">
                    +375 29 500 15 01
                  </a>
                </div>

                <div className="flex items-center gap-2.5 pt-0.5">
                  <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:marketing08@brt.by" className="hover:text-[#1b85b8] transition-colors">
                    marketing08@brt.by
                  </a>
                </div>
              </div>
            </div>

            {/* 4. Приемная предприятия[cite: 13] */}
            <div className="space-y-3">
              <h3 className="text-[12.5px] font-bold uppercase tracking-tight text-[#1a2b3c]">
                ПРИЕМНАЯ ПРЕДПРИЯТИЯ:
              </h3>
              <div className="space-y-2 text-[12.5px] text-slate-700">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#146654] text-white flex items-center justify-center text-[8px]">
                    &#9742;
                  </span>
                  <a href="tel:+375172156333" className="hover:text-[#1b85b8] transition-colors">
                    +375 17 215 63 33
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2m-12 0v4h12v-4" />
                  </svg>
                  <span className="text-slate-700">+375 17 270 30 50 (факс)</span>
                </div>

                <div className="flex items-center gap-2.5 pt-0.5">
                  <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:brt@brt.by" className="hover:text-[#1b85b8] transition-colors">
                    brt@brt.by
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* 2-Qism: Manzillar (Адрес)[cite: 13] */}
          <div className="pt-8 border-t border-slate-200/80 space-y-6">
            <h3 className="text-[13px] font-black uppercase text-[#1a2b3c] tracking-tight">
              АДРЕС
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-[12px] text-slate-600 leading-relaxed">
              
              {/* Yuridik manzil[cite: 13] */}
              <div className="space-y-1">
                <span className="font-bold text-slate-700">Юридический адрес:</span>
                <p>
                  Государственное предприятие «Беларусьторг», Республика Беларусь, 220033, г.Минск, пер.Велосипедный, 6/3-2, каб.300
                </p>
              </div>

              {/* Ishlab chiqarish manzili[cite: 13] */}
              <div className="space-y-1">
                <span className="font-bold text-slate-700">Адрес производства:</span>
                <p>
                  Республика Беларусь, 211730, Витебская область, Докшицкий р-н, Бегомльский с/с, д.Будачи, ул.ГУ"Санаторий Боровое", 2
                </p>
              </div>

              {/* Pochta manzili[cite: 13] */}
              <div className="space-y-1">
                <span className="font-bold text-slate-700">Почтовый адрес:</span>
                <p>
                  220033, Республика Беларусь, г.Минск, пер.Велосипедный, 6/3
                </p>
              </div>

              {/* Ish vaqti[cite: 13] */}
              <div className="space-y-0.5">
                <span className="font-bold text-slate-700">Режим работы интернет-магазина:</span>
                <p>Онлайн-заказ: круглосуточно</p>
                <p>Оператор: 8:30-17:30 пн-чт, 8:30-16:15 пт</p>
              </div>

            </div>
          </div>

          {/* 3-Qism: Yuridik ro'yxatdan o'tganlik ma'lumotlari[cite: 13] */}
          <div className="pt-4 space-y-2 text-[11.5px] text-slate-600 leading-relaxed">
            <p>
              Свидетельство о государственной регистрации выдано Минским городским исполнительным комитетом от 2 февраля 2006 г. УНП:190690111
            </p>
            <p>
              Интернет-магазин зарегистрирован в Торговом реестре Республики Беларусь 18 августа 2015г. № 282882
            </p>
          </div>

          {/* 4-Qism: Pastki havola[cite: 13] */}
          <div className="pt-2">
            <a
              href="#amatista-network"
              className="text-[12.5px] text-[#1b85b8] font-medium underline underline-offset-4 hover:text-[#16729e] transition-colors"
            >
              Магазины торговой сети «АМАТИСТА»
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}