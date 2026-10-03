import React from 'react'

export default function Footer() {
    const Logo = () => (
  <div className="flex items-center gap-2 cursor-pointer select-none">
    <svg className="w-8 h-8 text-[#146654]" viewBox="0 0 32 32" fill="currentColor">
      {/* Konus / archa nishoni */}
      <path d="M16 3c-1.2 2-2.5 3.5-4 4.5 1.5 1.2 3.5 1.2 5 0-1.5-1-2.8-2.5-4-4.5z" />
      <path d="M10 8.5c-2 1.8-3.5 4-4 6.5 2 .8 4.2.2 5.5-1.5-1-1.8-1.5-3.5-1.5-5z" />
      <path d="M22 8.5c-.2 1.5-.7 3.2-1.5 5 1.3 1.7 3.5 2.3 5.5 1.5-.5-2.5-2-4.7-4-6.5z" />
      <path d="M16 10c-2.2 1.5-3.5 3.8-3.5 6.5 2.2 1.2 4.8 1.2 7 0 0-2.7-1.3-5-3.5-6.5z" />
      <path d="M8.5 16.5c-2 2-2.8 4.5-2.5 7.5 2.2.3 4.5-.8 5.5-2.8-.8-2-1.8-3.5-3-4.7z" />
      <path d="M23.5 16.5c-1.2 1.2-2.2 2.7-3 4.7 1 2 3.3 3.1 5.5 2.8.3-3-.5-5.5-2.5-7.5z" />
      <path d="M16 18c-2.3 1.5-3.5 4.2-3 7 2 .8 4 .8 6 0 .5-2.8-.7-5.5-3-7z" />
    </svg>
    <div className="flex flex-col">
      <span className="text-[22px] font-black tracking-wider text-[#146654] leading-none uppercase">
        БОРОВАЯ
      </span>
      <span className="text-[8.5px] font-medium tracking-[0.08em] text-[#146654] leading-tight mt-0.5">
        питьевая и минеральная вода
      </span>
    </div>
  </div>
);
  return (
    <div> <footer className="w-full bg-[#f4f6f8] pt-12 pb-8 border-t border-[#eceef1] font-sans text-[#4a5568]">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Asosiy ma'lumotlar qatori */}
        <div className="grid grid-cols-12 gap-8 mb-10">
          {/* 1-ustun: Logo, rekvizitlar va ijtimoiy tarmoqlar */}
          <div className="col-span-3 flex flex-col justify-between">
            <div>
              <Logo />
              <div className="mt-8">
                <a href="#requisites" className="text-[13px] text-[#146654] underline hover:no-underline font-medium">
                  Реквизиты компании
                </a>
              </div>
            </div>

            {/* Ijtimoiy tarmoq doiralari */}
            <div className="flex items-center gap-3 mt-4">
              <a href="#facebook" className="w-8 h-8 rounded-full bg-[#146654] text-white flex items-center justify-center hover:opacity-90">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              <a href="#instagram" className="w-8 h-8 rounded-full bg-[#146654] text-white flex items-center justify-center hover:opacity-90">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 2-ustun: Katalog havolalari */}
          <div className="col-span-2 space-y-2.5 text-[13.5px]">
            <div><a href="#promo" className="text-[#146654] font-bold hover:underline">Акции</a></div>
            <div><a href="#water" className="hover:text-[#146654] transition-colors">Питьевая вода</a></div>
            <div><a href="#mineral" className="hover:text-[#146654] transition-colors">Минеральная вода</a></div>
            <div><a href="#equipment" className="hover:text-[#146654] transition-colors">Тара и оборудование</a></div>
            <div><a href="#goods" className="hover:text-[#146654] transition-colors">Сопутствующие товары</a></div>
            <div><a href="#tea" className="hover:text-[#146654] transition-colors">Чай</a></div>
          </div>

          {/* 3-ustun: Kompaniya bo'limlari */}
          <div className="col-span-2 space-y-2.5 text-[13.5px]">
            <div><a href="#delivery" className="hover:text-[#146654] transition-colors">Доставка и оплата</a></div>
            <div><a href="#pickup" className="hover:text-[#146654] transition-colors">Самовывоз</a></div>
            <div><a href="#about" className="hover:text-[#146654] transition-colors">О компании</a></div>
            <div><a href="#news" className="hover:text-[#146654] transition-colors">Новости</a></div>
            <div><a href="#contacts" className="hover:text-[#146654] transition-colors">Контакты</a></div>
          </div>

          {/* 4-ustun: Qidiruv va Manzil/Kontaktlar */}
          <div className="col-span-5 flex flex-col space-y-4">
            {/* Qidiruv inputi */}
            <div className="relative w-full max-w-[340px]">
              <input
                type="text"
                placeholder="Поиск"
                className="w-full bg-[#f4f6f8] border border-gray-300 rounded-full py-1.5 pl-9 pr-4 text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#146654] focus:bg-white transition-all"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5 stroke-current" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" strokeWidth="1.8" />
                <path strokeWidth="1.8" strokeLinecap="round" d="m21 21-4.35-4.35" />
              </svg>
            </div>

            {/* Kontakt ma'lumotlari */}
            <div className="space-y-2 text-[13px] text-[#2d3748] pt-1">
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#146654]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Минск, пер.Велосипедный, д.6/3-2, каб. 300</span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#146654]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:borovaya02@brt.by" className="hover:underline">borovaya02@brt.by</a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <svg className="w-4 h-4 text-[#146654] fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>+375 17 270 26 70</span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 bg-red-600 rounded-sm flex items-center justify-center text-[9px] text-white font-bold">O</span>
                <span>+375 29 289 26 70</span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 bg-red-600 text-white flex items-center justify-center font-bold text-[9px] rounded-sm">A1</span>
                <span>+375 29 389 26 70</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ajratuvchi chiziq */}
        <hr className="border-[#e2e8f0] mb-6" />

        {/* Pastki mualliflik huquqi va to'lov tizimlari */}
        <div className="flex items-center justify-between text-[12px] text-gray-500">
          <div>
            © 2020 «CHROME» Агентство Комплексных Решений
          </div>

          {/* To'lov tizimlari piktogrammalari */}
          <div className="flex items-center gap-6 filter grayscale opacity-60">
            <span className="font-black italic text-lg tracking-wider">VISA</span>
            <span className="text-[11px] leading-tight font-medium">Verified by<br /><b className="text-sm">VISA</b></span>
            <div className="flex -space-x-1.5 items-center">
              <span className="w-5 h-5 rounded-full bg-gray-400 inline-block"></span>
              <span className="w-5 h-5 rounded-full bg-gray-500 inline-block"></span>
            </div>
            <span className="text-[10px] leading-tight">Mastercard<br />SecureCode</span>
            <span className="text-[12px] font-bold">» ерип</span>
            <span className="text-sm font-semibold tracking-tight">bePaid</span>
          </div>
        </div>
      </div>
    </footer></div>
  )
}
