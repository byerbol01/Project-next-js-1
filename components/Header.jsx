import React from 'react'

export default function Header() {
    // Logotip komponenti (har ikkala rasmda bir xil)
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
    <div> <header className="w-full bg-white font-sans text-[#2c3338]">
      {/* Yuqori yupqa menyu satri */}
      <div className="max-w-[1320px] mx-auto px-6 h-10 flex items-center text-[13px] text-[#6b7280] space-x-7">
        <a href="#delivery" className="hover:text-[#146654] transition-colors">Доставка и оплата</a>
        <a href="#pickup" className="hover:text-[#146654] transition-colors">Самовывоз</a>
        <a href="#about" className="hover:text-[#146654] transition-colors">О компании</a>
        <a href="#news" className="hover:text-[#146654] transition-colors">Новости</a>
        <a href="#contacts" className="hover:text-[#146654] transition-colors">Контакты</a>
      </div>

      {/* O'rta asosiy satr (och fon bilan) */}
      <div className="bg-[#f4f6f8] border-y border-[#eceef1]">
        <div className="max-w-[1320px] mx-auto px-6 h-[76px] flex items-center justify-between">
          {/* Chap: Logo */}
          <Logo />

          {/* O'rta: Telefon va Yetkazib berish */}
          <div className="flex items-center gap-12">
            {/* Telefon raqami */}
            <div className="flex items-center gap-2.5 text-[#146654] font-medium text-[15px] cursor-pointer">
              <svg className="w-4 h-4 fill-current rotate-[15deg]" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="text-[#1f2937] font-semibold">+375 29 289 26 70</span>
              <svg className="w-3.5 h-3.5 text-gray-500 fill-current ml-0.5" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>

            {/* Yetkazib berish sanasi */}
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-[#146654] stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 16l2 2 4-4" />
              </svg>
              <div className="text-[12.5px] leading-tight">
                <div className="text-[#146654] font-medium">Ближайшая доставка</div>
                <div className="text-[#1f2937] font-bold mt-0.5">29 августа (пн.)</div>
              </div>
            </div>
          </div>

          {/* O'ng: Savatcha va Kirish */}
          <div className="flex items-center">
            {/* Savat bloki */}
            <div className="bg-[#e9edf0] px-5 py-3 flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <svg className="w-6 h-6 text-[#146654]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1.5 -right-2 bg-[#d82a2a] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="text-[14px] font-bold text-[#1f2937]">0.00 руб.</span>
            </div>

            {/* Kirish bloki */}
            <div className="flex items-center gap-2 pl-6 cursor-pointer text-[#1f2937] hover:text-[#146654] transition-colors">
              <svg className="w-5 h-5 text-[#146654]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-[14px] font-medium">Войти</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pastki navigatsiya menyusi */}
      <div className="max-w-[1320px] mx-auto px-6 h-14 flex items-center gap-8 text-[14px] font-medium text-[#2d3748]">
        <a href="/" className="hover:text-[#146654] transition-colors">Питьевая вода</a>
        <a href="/mineralwater" className="hover:text-[#146654] transition-colors">Минеральная вода</a>
        <a href="/eqiupment" className="hover:text-[#146654] transition-colors">Тара и оборудование</a>
        <a href="/goods" className="hover:text-[#146654] transition-colors">Сопутствующие товары</a>
        <a href="/tea" className="hover:text-[#146654] transition-colors">Чай</a>
        <a
          href="#promo"
          className="border border-[#146654] text-[#146654] rounded-full px-4 py-1 text-[13.5px] font-semibold hover:bg-[#146654] hover:text-white transition-all ml-1"
        >
          % Акции
        </a>
      </div>
    </header></div>
  )
}
