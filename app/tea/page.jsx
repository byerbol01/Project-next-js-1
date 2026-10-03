import React from 'react';

// Brend Shishka Ikonkasi
function PineConeIcon({ className = "w-5 h-5 text-[#146654]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C11.4 2 10.3 3.1 9.7 4.3C10.4 4.8 11.2 5.3 12 5.3C12.8 5.3 13.6 4.8 14.3 4.3C13.7 3.1 12.6 2 12 2ZM8 5.8C7.1 7.1 6.6 8.3 6.6 9C7.5 9.6 8.6 10 9.8 10C10.5 8.7 11.2 7.4 12 6.7C10.6 6.7 9.2 6.3 8 5.8ZM16 5.8C14.8 6.3 13.4 6.7 12 6.7C12.8 7.4 13.5 8.7 14.2 10C15.4 10 16.5 9.6 17.4 9C17.4 8.3 16.9 7.1 16 5.8ZM5.8 10.6C5.1 11.8 4.8 12.8 4.8 13.4C5.7 14 7.1 14.4 8.7 14.4C9.3 13 10.1 11.8 11.1 11C9.1 11 7.3 10.7 5.8 10.6ZM18.2 10.6C16.7 10.7 14.9 11 12.9 11C13.9 11.8 14.7 13 15.3 14.4C16.9 14.4 18.3 14 19.2 13.4C19.2 12.8 18.9 11.8 18.2 10.6ZM7.3 15.4C6.6 16.4 6.4 17.2 6.4 17.5C7.4 18 9 18.4 10.9 18.4C11.1 17.2 11.7 16 12.4 15.2C10.4 15.2 8.7 15.3 7.3 15.4ZM16.7 15.4C15.3 15.3 13.6 15.2 11.6 15.2C12.3 16 12.9 17.2 13.1 18.4C15 18.4 16.6 18 17.6 17.5C17.6 17.2 17.4 16.4 16.7 15.4ZM11 19.8V22H13V19.8C12.7 19.8 12.3 19.8 12 19.8C11.7 19.8 11.3 19.8 11 19.8Z" />
    </svg>
  );
}

export default function TeaPage() {
  return (
    <div className="w-full bg-white font-sans text-slate-800 antialiased py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1240px] mx-auto space-y-16">

        {/* 1. Sarlavha[cite: 10] */}
        <div className="flex items-center gap-2.5">
          <PineConeIcon className="w-5 h-5 text-[#146654]" />
          <h1 className="text-[20px] sm:text-[22px] font-black uppercase text-[#1a2b3c] tracking-[0.04em]">
            О воде
          </h1>
        </div>

        {/* 2. 1-blok: Matn chapda, Qarag'ay o'rmoni o'ngda[cite: 10] */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-[14px] font-bold text-slate-800">
              Вода «БОРОВАЯ» - живая сила природы.
            </h2>
            <p className="text-[12.5px] sm:text-[13px] text-slate-600 leading-[1.7]">
              В тех местах, где добывается вода «БОРОВАЯ» даже воздух кажется вкусным и целебным. Заповедные леса Березинского заповедника ограждают источник от производственных и сельскохозяйственных загрязнений и позволяют сделать воду «Боровая» поистине природной, обогатив ее полезными микроэлементами, и самой экологически чистой во всей Республике Беларусь.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full h-[270px] sm:h-[320px] rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
                alt="Заповедные леса Березинского заповедника"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3. 2-blok: Sanatoriy binosi chapda, Matn va tugma o'ngda[cite: 10] */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="w-full h-[290px] sm:h-[350px] rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                alt="Санаторий Боровое"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <p className="text-[12.5px] sm:text-[13px] text-slate-600 leading-[1.7]">
              Уникальность питьевой воды «БОРОВАЯ» заключается в практически полном отсутствии в ней железа, а содержание солей и других химических веществ настолько низкое, что в процессе производства воду не нужно подвергать глубокой очистке. Отсутствие добавок и дополнительного воздействия позволяет полностью сохранить природный минеральный состав питьевой воды «Боровая».
            </p>
            <p className="text-[12.5px] sm:text-[13px] text-slate-600 leading-[1.7]">
              Питьевая вода «БОРОВАЯ» - идеальная вода для ежедневного потребления, а также восстановления организма после физических нагрузок или нервного напряжения.
            </p>
            <p className="text-[12.5px] sm:text-[13px] text-slate-600 leading-[1.7]">
              Минеральная питьевая вода «Боровая» является ведущим лечебным фактором санатория «Боровое», неоднократно доказав свою высокую эффективность в лечебной практике.
            </p>
            <div className="pt-2">
              <a
                href="#catalog"
                className="inline-block px-7 py-2.5 bg-[#1b85b8] hover:bg-[#16729e] active:scale-95 text-white font-medium text-[12.5px] rounded-full shadow-sm shadow-sky-600/20 transition-all text-center"
              >
                В каталог
              </a>
            </div>
          </div>
        </div>

        {/* 4. 3-blok: Matn chapda, O'rmon fonidagi 19L butilka o'ngda[cite: 11] */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <p className="text-[12.5px] sm:text-[13px] text-slate-600 leading-[1.7]">
              Уникальность минеральной питьевой воды «БОРОВАЯ» заключается в полном отсутствии в ней хлорида натрия (поваренной соли), избыток которой приводит к возникновению отеков, увеличению нагрузки на почки, повышению артериального давления. В то же время, высокая концентрация в ней сульфатов, кальция и магния делает минеральную питьевую воду «Боровая» незаменимой при лечении гастритов с повышенной кислотностью, язвенной болезни желудка, хронических колитов, заболеваний печени, почек, сахарного диабет и др. заболеваний. Наличие в составе минеральной питьевой воды «БОРОВАЯ» метакремниевой кислоты значительно усиливает противовоспалительный эффект и улучшает функцию печени. Также употребление минеральной питьевой воды «БОРОВАЯ» показано при избыточном весе.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full h-[280px] sm:h-[330px] rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
                alt="Лесной фон"
                className="absolute inset-0 w-full h-full object-cover filter blur-[2px] opacity-40"
              />
              <img
                src={encodeURI("/19 литров 1 (1).png")}
                alt="Бутыль воды Боровая"
                className="relative z-10 max-h-[85%] object-contain drop-shadow-md"
              />
            </div>
          </div>
        </div>

        {/* 5. ПОКАЗАНИЯ ДЛЯ ПРИЕМА[cite: 11] */}
        <div className="space-y-4 pt-4">
          <h2 className="text-[13.5px] font-black uppercase text-[#1a2b3c] tracking-tight">
            ПОКАЗАНИЯ ДЛЯ ПРИЕМА МИНЕРАЛЬНОЙ И ПИТЬЕВОЙ ВОДЫ "БОРОВАЯ":
          </h2>

          <ul className="space-y-2 text-[12.5px] text-slate-600 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-slate-400">•</span>
              <span>хронические гастриты, неосложненная язвенная болезнь;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-400">•</span>
              <span>хронические заболевания печени и желчевыводящих путей, холециститы, неосложненная желчекаменная болезнь;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-400">•</span>
              <span>желчекаменная болезнь;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-400">•</span>
              <span>хронические панкреатиты;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-400">•</span>
              <span>синдром раздраженного кишечника;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-400">•</span>
              <span>болезни обмена веществ, сахарный диабет, ожирение;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-400">•</span>
              <span>хронические болезни почек.</span>
            </li>
          </ul>

          <p className="text-[12.5px] text-slate-600 leading-[1.7] pt-2">
            Кроме того, минеральную питьевую воду «БОРОВАЯ» можно использовать для наружного применения. Умывание минеральной водой, минеральные маски для лица и волос и даже целые минеральные ванны подарят вашей коже и всему организму заряд бодрости, здоровья и жизненной силы.
          </p>
        </div>

        {/* 6. АССОРТИМЕНТ ВЫПУСКАЕМОЙ ВОДЫ[cite: 11] */}
        <div className="space-y-5 pt-4">
          <h2 className="text-[13.5px] font-black uppercase text-[#1a2b3c] tracking-tight">
            АССОРТИМЕНТ ВЫПУСКАЕМОЙ ВОДЫ:
          </h2>

          <div className="space-y-4">
            {/* 1 */}
            <div className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center text-[11px] font-bold text-slate-600 shrink-0 mt-0.5">
                1
              </div>
              <div className="text-[12.5px] leading-snug">
                <div className="font-medium text-slate-800">вода природная питьевая "БОРОВАЯ" негазированная:</div>
                <div className="text-slate-500 mt-0.5">в стеклянной бутылке емкостью 0.33 л, в ПЭТ бутылках емкостью 0.5 л, 1.0 л, 1.5 л, 5.0 л, в поликарбонатных бутылях емкостью 19 л;</div>
              </div>
            </div>

            {/* 2 */}
            <div className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center text-[11px] font-bold text-slate-600 shrink-0 mt-0.5">
                2
              </div>
              <div className="text-[12.5px] leading-snug">
                <div className="font-medium text-slate-800">вода природная питьевая "БОРОВАЯ" газированная:</div>
                <div className="text-slate-500 mt-0.5">в стеклянной бутылке емкостью 0.33 л, в ПЭТ бутылках емкостью 0.5 л, 1.0 л, 1.5 л;</div>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center text-[11px] font-bold text-slate-600 shrink-0 mt-0.5">
                3
              </div>
              <div className="text-[12.5px] leading-snug">
                <div className="font-medium text-slate-800">вода минеральная природная питьевая "БОРОВАЯ" негазированная:</div>
                <div className="text-slate-500 mt-0.5">в стеклянной бутылке объемом 0.33 л, в ПЭТ бутылках емкостью 0.5 л, 1.0 л, 1.5 л;</div>
              </div>
            </div>

            {/* 4 */}
            <div className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center text-[11px] font-bold text-slate-600 shrink-0 mt-0.5">
                4
              </div>
              <div className="text-[12.5px] leading-snug">
                <div className="font-medium text-slate-800">вода минеральная природная питьевая "БОРОВАЯ" газированная:</div>
                <div className="text-slate-500 mt-0.5">в стеклянной бутылке емкостью 0.33 л, в ПЭТ бутылках емкостью 0.5 л, 1.0 л, 1.5 л.</div>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Standartlar va sifat nazorati (3-skrinshot)[cite: 12] */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <p className="text-[12.5px] sm:text-[13px] text-slate-700 leading-[1.7]">
            На Государственном предприятии "Беларусьторг" контроль качества продукции является важнейшим этапом производственной деятельности. Требования к качеству минеральной и питьевой воды предъявляются в соответствии с Едиными санитарно-эпидемиологическими и гигиеническими требованиями к товарам, подлежащим санитарно-эпидемиологическому контролю.
          </p>

          <p className="text-[12.5px] sm:text-[13px] text-slate-700 leading-[1.7]">
            Минеральная и питьевая вода соответствует гигиеническим нормативам как при ее розливе, транспортировке, хранении, так и в течение всего установленного срока годности.
          </p>

          <p className="text-[12.5px] sm:text-[13px] font-bold text-slate-800 leading-[1.7]">
            Минеральная вода «Боровая» рекомендована (показана) для реализации и питьевого использования в качестве столового напитка не систематически и по рекомендации врача вне фазы обострения при заболеваниях органов пищеварения, мочевыделительной системы и обмена веществ.
          </p>

          <p className="text-[12.5px] sm:text-[13px] font-bold text-slate-800 leading-[1.7]">
            Питьевая негазированная вода пригодна для использования без кипячения детям с 3-х лет.
          </p>
        </div>

      </div>
    </div>
  );
}