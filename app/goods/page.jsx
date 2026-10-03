"use client";

import React from "react";

function PineConeIcon({
  className = "w-5 h-5 text-[#146654]",
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C11.4 2 10.3 3.1 9.7 4.3C10.4 4.8 11.2 5.3 12 5.3C12.8 5.3 13.6 4.8 14.3 4.3C13.7 3.1 12.6 2 12 2ZM8 5.8C7.1 7.1 6.6 8.3 6.6 9C7.5 9.6 8.6 10 9.8 10C10.5 8.7 11.2 7.4 12 6.7C10.6 6.7 9.2 6.3 8 5.8ZM16 5.8C14.8 6.3 13.4 6.7 12 6.7C12.8 7.4 13.5 8.7 14.2 10C15.4 10 16.5 9.6 17.4 9C17.4 8.3 16.9 7.1 16 5.8ZM5.8 10.6C5.1 11.8 4.8 12.8 4.8 13.4C5.7 14 7.1 14.4 8.7 14.4C9.3 13 10.1 11.8 11.1 11C9.1 11 7.3 10.7 5.8 10.6ZM18.2 10.6C16.7 10.7 14.9 11 12.9 11C13.9 11.8 14.7 13 15.3 14.4C16.9 14.4 18.3 14 19.2 13.4C19.2 12.8 18.9 11.8 18.2 10.6ZM7.3 15.4C6.6 16.4 6.4 17.2 6.4 17.5C7.4 18 9 18.4 10.9 18.4C11.1 17.2 11.7 16 12.4 15.2C10.4 15.2 8.7 15.3 7.3 15.4ZM16.7 15.4C15.3 15.3 13.6 15.2 11.6 15.2C12.3 16 12.9 17.2 13.1 18.4C15 18.4 16.6 18 17.6 17.5C17.6 17.2 17.4 16.4 16.7 15.4ZM11 19.8V22H13V19.8C12.7 19.8 12.3 19.8 12 19.8C11.7 19.8 11.3 19.8 11 19.8Z" />
    </svg>
  );
}

export default function GoodsPage() {
  return (
    <div className="w-full bg-white font-sans text-slate-800 antialiased py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1240px] mx-auto space-y-16">

        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <PineConeIcon className="w-5 h-5 text-[#146654]" />

            <h1 className="text-[20px] sm:text-[22px] font-black uppercase text-[#1a2b3c] tracking-[0.04em]">
              О компании
            </h1>
          </div>

          <div className="space-y-3 max-w-[620px]">
            <p className="text-[13px] leading-relaxed text-slate-700">
              Государственное предприятие «Беларусьторг» – многопрофильное
              предприятие, успешно работающее на рынке Республики Беларусь
              с 2006 года.
            </p>

            <div>
              <a
                href="#about"
                className="inline-block text-[13px] text-[#146654] font-medium underline underline-offset-4 hover:text-[#0c4437] transition-colors"
              >
                Подробнее о предприятии
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                alt="Производство воды Боровая"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-[12.5px] sm:text-[13px] text-slate-700 leading-[1.65]">
              Среди множества задач наиболее важным считаем решение основной –
              содействие формированию здорового образа жизни нашего населения.
              С этой целью в 2012 году на самой экологически чистой территории
              республики, вблизи Березинского биосферного заповедника,
              входящего во всемирную сеть биосферных заповедников ЮНЕСКО,
              нами организовано производство минеральной и питьевой воды
              торговой марки «БОРОВАЯ».
            </p>

            <div className="mt-6">
              <a
                href="#catalog"
                className="inline-block px-7 py-2.5 bg-[#1b85b8] hover:bg-[#16729e] active:scale-95 text-white font-medium text-[12.5px] rounded-full shadow-sm shadow-sky-600/20 transition-all text-center"
              >
                В каталог
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
            <p className="text-[12.5px] sm:text-[13px] text-slate-700 leading-[1.65]">
              Сосновый бор, в котором расположены наши скважины, ограждает
              источник от попадания производственных и сельскохозяйственных
              загрязнений. А современное оборудование, высочайший уровень
              санитарии и отточенный до мелочей технологический процесс
              гарантирует отличное качество воды. Все вместе, и нетронутый
              прогрессом бор и современное оборудование, позволяют нам
              добывать из недр земли белорусской сбалансированную по составу
              воду. Технология производства, основанная исключительно на
              естественной фильтрации без применения обратного осмоса,
              позволяет сохранить воде «БОРОВАЯ» уникальный вкус
              артезианского источника.
            </p>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Технологический процесс"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80"
                alt="Лабораторный контроль качества"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
            <p className="text-[12.5px] sm:text-[13px] text-slate-700 leading-[1.65]">
              Наша компания ориентирована на маркетинг, что позволяет успешно
              конкурировать на рынке и удовлетворять запросы любого покупателя.
            </p>

            <p className="text-[12.5px] sm:text-[13px] text-slate-700 leading-[1.65]">
              Наличие собственного автопарка позволяет нам обеспечить высокое
              качество сервиса по доставке воды. Бесплатная доставка воды
              «Боровая» осуществляется для физических лиц в городе Минске
              и по всей Республике Беларусь для юридических лиц.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}