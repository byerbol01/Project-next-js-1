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

// 6 ta katalog mahsulotlari ma'lumotlari
const catalogProducts = [
  {
    id: 1,
    title: "Питьевая вода негазированная 18.9 л",
    packageCount: "1 шт",
    minOrder: "2 бутыли",
    price: 9.00,
    priceStr: "9.00 р.",
    volume: "18.9 л",
    image: encodeURI("/19 литров 1 (1).png"),
  },
  {
    id: 2,
    title: "Питьевая вода негазированная 5.0 л",
    packageCount: "2 шт",
    minOrder: "4 упаковки",
    price: 5.60,
    priceStr: "5.60 р.",
    volume: "5 л",
    image: encodeURI("/image 29.png"),
  },
  {
    id: 3,
    title: "Питьевая вода негазированная 1.5 л",
    packageCount: "2 шт",
    minOrder: "4 упаковки",
    price: 8.40,
    priceStr: "8.40 р.",
    volume: "1.5 л",
    image: encodeURI("/image 29.png"),
  },
  {
    id: 4,
    title: "Питьевая вода негазированная 1.0 л",
    packageCount: "6 шт",
    minOrder: "4 упаковки",
    price: 7.20,
    priceStr: "7.20 р.",
    volume: "1 л",
    image: encodeURI("/image 29.png"),
  },
  {
    id: 5,
    title: "Питьевая вода негазированная 0.5 л",
    packageCount: "12 шт",
    minOrder: "4 упаковки",
    price: 12.00,
    priceStr: "12.00 р.",
    volume: "0.5 л",
    image: encodeURI("/image 29.png"),
  },
  {
    id: 6,
    title: "Питьевая вода негазированная 0.33 л",
    packageCount: "20 шт",
    minOrder: "4 упаковки",
    price: 48.00,
    priceStr: "48.00 р.",
    volume: "0.33 л",
    image: encodeURI("/glass-bottle.png"),
  },
];

export default function MineralPage() {
  // Sanoqlar
  const [quantities, setQuantities] = useState({ 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1 });
  // Filtrlar
  const [selectedVolumes, setSelectedVolumes] = useState([]);
  const [specialOffer, setSpecialOffer] = useState(false);
  // Yon menyu akkordeoni
  const [openCategory, setOpenCategory] = useState("drinking");
  // Mahsulot modal ko'rinishi (2-rasm)
  const [detailProduct, setDetailProduct] = useState(null);
  // Modal ichidagi tablar
  const [activeTab, setActiveTab] = useState("composition");
  // Modal ichidagi sanoq
  const [modalQty, setModalQty] = useState(1);

  const handleQtyChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const toggleVolume = (vol) => {
    setSelectedVolumes((prev) =>
      prev.includes(vol) ? prev.filter((v) => v !== vol) : [...prev, vol]
    );
  };

  const handleResetFilters = () => {
    setSelectedVolumes([]);
    setSpecialOffer(false);
  };

  return (
    <div className="w-full bg-[#fcfdfe] font-sans text-slate-800 antialiased py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="w-full max-w-[1280px] mx-auto space-y-7">

        {/* 1. Breadcrumbs */}
        <div className="text-[12px] text-slate-400 flex items-center gap-1.5">
          <a href="/" className="hover:text-slate-600 transition-colors">Главная</a>
          <span>•</span>
          <span className="text-slate-500 font-medium">Каталог</span>
        </div>

        {/* 2. Sarlavha */}
        <div className="flex items-center gap-2.5">
          <PineConeIcon className="w-5 h-5 text-[#146654]" />
          <h1 className="text-[21px] sm:text-[23px] font-black uppercase text-[#1a2b3c] tracking-[0.04em]">
            Каталог
          </h1>
        </div>

        {/* Asosiy 2 ustunli struktura: Chap (Menyu va filtr), O'ng (Mahsulotlar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ================= CHAP USTUN (SIDEBAR) ================= */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Kategoriya menyulari */}
            <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-white shadow-sm">
              {/* 1. Питьевая вода (Faol) */}
              <div>
                <button
                  onClick={() => setOpenCategory(openCategory === "drinking" ? "" : "drinking")}
                  className="w-full flex items-center justify-between px-5 py-3.5 bg-[#1b85b8] text-white font-bold text-[13px] text-left transition-colors"
                >
                  <span>Питьевая вода</span>
                  <span className={`text-xs transform transition-transform ${openCategory === "drinking" ? "rotate-180" : ""}`}>
                    ▲
                  </span>
                </button>
                {openCategory === "drinking" && (
                  <div className="py-2.5 px-5 bg-white space-y-2 border-b border-slate-100">
                    <a href="#non-carb" className="block text-[12.5px] text-[#1b85b8] font-medium hover:underline">
                      • Негазированная
                    </a>
                    <a href="#carb" className="block text-[12.5px] text-slate-600 hover:text-[#1b85b8] transition-colors">
                      • Газированная
                    </a>
                  </div>
                )}
              </div>

              {/* 2. Минеральная вода */}
              <button
                onClick={() => setOpenCategory(openCategory === "mineral" ? "" : "mineral")}
                className="w-full flex items-center justify-between px-5 py-3.5 border-b border-slate-100 text-slate-700 font-semibold text-[13px] text-left hover:bg-slate-50 transition-colors"
              >
                <span>Минеральная вода</span>
                <span className="text-[10px] text-slate-400">▼</span>
              </button>

              {/* 3. Тара и оборудование */}
              <button
                onClick={() => setOpenCategory(openCategory === "equip" ? "" : "equip")}
                className="w-full flex items-center justify-between px-5 py-3.5 border-b border-slate-100 text-slate-700 font-semibold text-[13px] text-left hover:bg-slate-50 transition-colors"
              >
                <span>Тара и оборудование</span>
                <span className="text-[10px] text-slate-400">▼</span>
              </button>

              {/* 4. Сопутствующие товары */}
              <button
                onClick={() => setOpenCategory(openCategory === "extra" ? "" : "extra")}
                className="w-full flex items-center justify-between px-5 py-3.5 border-b border-slate-100 text-slate-700 font-semibold text-[13px] text-left hover:bg-slate-50 transition-colors"
              >
                <span>Сопутствующие товары</span>
                <span className="text-[10px] text-slate-400">▼</span>
              </button>

              {/* 5. Чай */}
              <button
                onClick={() => setOpenCategory(openCategory === "tea" ? "" : "tea")}
                className="w-full flex items-center justify-between px-5 py-3.5 text-slate-700 font-semibold text-[13px] text-left hover:bg-slate-50 transition-colors"
              >
                <span>Чай</span>
                <span className="text-[10px] text-slate-400">▼</span>
              </button>
            </div>

            {/* Filtrlar bloki */}
            <div className="space-y-6 pt-2">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-[14px]">
                <svg className="w-4 h-4 text-[#1b85b8]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M6 12h12m-9 8h6" />
                </svg>
                <span className="uppercase tracking-wider">Фильтры</span>
              </div>

              {/* Hajm / Объем */}
              <div className="space-y-3">
                <span className="block text-[13px] font-bold text-slate-700">Объем, л</span>
                {["0.33 л", "0.5 л", "1 л", "1.5 л", "5 л", "18.9 л"].map((vol) => (
                  <label key={vol} className="flex items-center gap-2.5 cursor-pointer text-[12.5px] text-slate-600 select-none">
                    <input
                      type="checkbox"
                      checked={selectedVolumes.includes(vol)}
                      onChange={() => toggleVolume(vol)}
                      className="w-4 h-4 rounded border-slate-300 text-[#1b85b8] focus:ring-[#1b85b8]"
                    />
                    <span>{vol}</span>
                  </label>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200/80">
                <label className="flex items-center gap-2.5 cursor-pointer text-[12.5px] text-slate-600 select-none">
                  <input
                    type="checkbox"
                    checked={specialOffer}
                    onChange={(e) => setSpecialOffer(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-[#1b85b8] focus:ring-[#1b85b8]"
                  />
                  <span>Специальное предложение</span>
                </label>
              </div>

              {/* Filtr tugmalari */}
              <div className="space-y-3 pt-3">
                <button className="w-full py-2.5 bg-[#1b85b8] hover:bg-[#16729e] active:scale-95 text-white font-bold text-[11px] tracking-wider rounded-md uppercase transition-all shadow-sm">
                  Применить фильтр
                </button>
                <button
                  onClick={handleResetFilters}
                  className="w-full flex items-center justify-center gap-1.5 text-[11px] font-bold text-red-500 hover:text-red-600 tracking-wider uppercase transition-colors"
                >
                  <span className="text-xs">&#8635;</span>
                  <span>Сбросить</span>
                </button>
              </div>
            </div>

          </div>

          {/* ================= O'NG USTUN (MAHSULOTLAR GRIDI) ================= */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {catalogProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  {/* Rasm (ustiga bosganda batafsil ko'rish ochiladi) */}
                  <div
                    onClick={() => {
                      setDetailProduct(p);
                      setModalQty(quantities[p.id] || 1);
                    }}
                    className="h-56 w-full flex items-center justify-center mb-3 cursor-pointer group"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="max-h-full max-w-[150px] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Sarlavha */}
                  <div>
                    <h3
                      onClick={() => {
                        setDetailProduct(p);
                        setModalQty(quantities[p.id] || 1);
                      }}
                      className="text-[13.5px] font-semibold text-slate-800 leading-snug line-clamp-2 min-h-[38px] hover:text-[#1b85b8] cursor-pointer transition-colors"
                    >
                      {p.title}
                    </h3>

                    {/* Ma'lumotlar */}
                    <div className="mt-3 space-y-1 text-[11.5px] text-slate-400">
                      <div>
                        Кол-во шт в упаковке:{" "}
                        <span className="text-[#1b85b8] font-medium">{p.packageCount}</span>
                      </div>
                      <div>
                        Минимальный заказ:{" "}
                        <span className="text-[#1b85b8] font-medium">{p.minOrder}</span>
                      </div>
                    </div>
                  </div>

                  {/* Narx */}
                  <div className="mt-4 text-[#d82a2a] font-extrabold text-[18px]">
                    {p.priceStr}
                  </div>

                  {/* Miqdor hisoblagich va Savatga qo'shish tugmasi */}
                  <div className="mt-3 flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleQtyChange(p.id, -1)}
                        className="w-6 h-6 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100 flex items-center justify-center text-xs font-bold transition-colors active:scale-95"
                      >
                        &minus;
                      </button>
                      <span className="text-[12px] font-bold text-slate-800 w-5 text-center">
                        {quantities[p.id] || 1}
                      </span>
                      <button
                        onClick={() => handleQtyChange(p.id, 1)}
                        className="w-6 h-6 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100 flex items-center justify-center text-xs font-bold transition-colors active:scale-95"
                      >
                        +
                      </button>
                    </div>

                    <button className="px-4 py-1.5 border border-[#1b85b8] text-[#1b85b8] hover:bg-[#1b85b8] hover:text-white rounded-full text-[12px] font-medium transition-all active:scale-95">
                      В корзину
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* =========================================================
            2-RASM: MAHSULOTNING TO'LIQ DETALI (MODAL / INLINE VIEW)
           ========================================================= */}
        {detailProduct && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-[1020px] bg-white rounded-2xl shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto">
              
              {/* Yopish tugmasi */}
              <button
                onClick={() => setDetailProduct(null)}
                className="absolute right-5 top-5 text-slate-400 hover:text-slate-700 text-xl font-bold transition-colors"
              >
                ✕
              </button>

              {/* Sarlavha */}
              <h2 className="text-[20px] sm:text-[22px] font-black uppercase text-[#1a2b3c] tracking-tight border-b border-slate-100 pb-4">
                {detailProduct.title}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
                
                {/* Chap: Xususiyatlar va imtiyozlar */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Piktogrammalar bilan xususiyatlar */}
                  <div className="space-y-3.5 text-[12.5px] text-slate-700">
                    <div className="flex items-center gap-3">
                      <span className="text-[#1b85b8] text-base">🥤</span>
                      <span>Негазированная</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#1b85b8] text-base">📐</span>
                      <span>{detailProduct.volume}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#1b85b8] text-base">🍶</span>
                      <span>Стекло</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#1b85b8] text-base">📦</span>
                      <span>{detailProduct.packageCount} в упаковке</span>
                    </div>
                  </div>

                  {/* Yashil doirali galochkalar */}
                  <div className="space-y-2 text-[12px] text-slate-600 pt-3 border-t border-slate-100">
                    {[
                      "приятный вкус;",
                      "отсутствие примесей;",
                      "натуральный состав;",
                      "общая жесткость до 5 мг-экв/л;",
                      "общая минерализация от 0,05 до 0,44 г/л.",
                    ].map((text, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border border-[#146654] text-[#146654] flex items-center justify-center text-[10px] font-bold">
                          ✓
                        </span>
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Markaz: Shisha Butilka Rasmi */}
                <div className="lg:col-span-4 flex items-center justify-center h-[340px]">
                  <img
                    src={detailProduct.image}
                    alt={detailProduct.title}
                    className="max-h-full object-contain filter drop-shadow-lg"
                  />
                </div>

                {/* O'ng: Narx va buyurtma berish kartochkasi */}
                <div className="lg:col-span-4 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-5">
                  <div>
                    <span className="text-[12px] font-bold text-slate-700">Цена за 1 уп.:</span>
                    <div className="text-[24px] font-black text-[#d82a2a] mt-0.5">
                      {detailProduct.priceStr}
                    </div>
                  </div>

                  {/* Sanoq */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[12.5px] font-medium text-slate-600">Количество:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setModalQty(Math.max(1, modalQty - 1))}
                        className="w-7 h-7 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100 flex items-center justify-center text-sm font-bold"
                      >
                        &minus;
                      </button>
                      <span className="text-[13px] font-bold text-slate-800 w-5 text-center">
                        {modalQty}
                      </span>
                      <button
                        onClick={() => setModalQty(modalQty + 1)}
                        className="w-7 h-7 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100 flex items-center justify-center text-sm font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-[#146654]">
                    <span>ⓘ</span>
                    <span>Минимальный заказ: {detailProduct.minOrder}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-[13px] font-bold text-slate-700">Сумма:</span>
                    <span className="text-[15px] font-extrabold text-slate-800">
                      {(detailProduct.price * modalQty).toFixed(2)} руб.
                    </span>
                  </div>

                  <button className="w-full py-3 bg-[#1b85b8] hover:bg-[#16729e] active:scale-95 text-white font-bold text-[13px] rounded-full shadow-md shadow-sky-600/20 transition-all">
                    В корзину
                  </button>
                </div>

              </div>

              {/* Pastki Tablar: Описание, Состав воды, Оплата и доставка */}
              <div className="mt-12 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab("desc")}
                    className={`px-5 py-2 rounded-t-lg text-[13px] font-bold transition-colors ${
                      activeTab === "desc"
                        ? "bg-[#1b85b8] text-white"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Описание
                  </button>
                  <button
                    onClick={() => setActiveTab("composition")}
                    className={`px-5 py-2 rounded-t-lg text-[13px] font-bold transition-colors ${
                      activeTab === "composition"
                        ? "bg-[#1b85b8] text-white"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Состав воды
                  </button>
                  <button
                    onClick={() => setActiveTab("delivery")}
                    className={`px-5 py-2 rounded-t-lg text-[13px] font-bold transition-colors ${
                      activeTab === "delivery"
                        ? "bg-[#1b85b8] text-white"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Оплата и доставка
                  </button>
                </div>

                {/* Tab Kontenti: Kimyoviy tarkib jadvali */}
                {activeTab === "composition" && (
                  <div className="border border-slate-200 rounded-b-xl rounded-tr-xl p-6 bg-[#fafbfc]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[12.5px]">
                      {/* Анионы */}
                      <div className="space-y-2.5">
                        <div className="font-bold text-[#146654] pb-1 border-b border-slate-200">
                          Анионы, мг/л
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-600">Хлориды (Cl⁻)</span>
                          <span className="font-semibold text-slate-800">от 15 до 40</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-600">Сульфаты (SO₄²⁻)</span>
                          <span className="font-semibold text-slate-800">от 4 до 25</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-600">Гидрокарбонаты (HCO₃⁻)</span>
                          <span className="font-semibold text-slate-800">от 50 до 250</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-slate-600">Фторид-ион (F⁻)</span>
                          <span className="font-semibold text-slate-800">от 0 до 1</span>
                        </div>
                      </div>

                      {/* Катионы */}
                      <div className="space-y-2.5">
                        <div className="font-bold text-[#146654] pb-1 border-b border-slate-200">
                          Катионы, мг/л
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-600">Кальций (Ca²⁺)</span>
                          <span className="font-semibold text-slate-800">от 20 до 60</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-600">Магний (Mg²⁺)</span>
                          <span className="font-semibold text-slate-800">от 5 до 20</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-600">Натрий (Na⁺)</span>
                          <span className="font-semibold text-slate-800">от 4 до 25</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-slate-600">Калий (K⁺)</span>
                          <span className="font-semibold text-slate-800">от 0 до 5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "desc" && (
                  <div className="border border-slate-200 rounded-b-xl rounded-tr-xl p-6 bg-[#fafbfc] text-[13px] text-slate-600 leading-relaxed">
                    Природная питьевая артезианская вода «Боровая» добывается из глубоких скважин, расположенных в экологически чистом районе Беларуси вблизи Березинского биосферного заповедника. Вода обладает уникальным вкусом и идеально сбалансированным минеральным составом.
                  </div>
                )}

                {activeTab === "delivery" && (
                  <div className="border border-slate-200 rounded-b-xl rounded-tr-xl p-6 bg-[#fafbfc] text-[13px] text-slate-600 leading-relaxed">
                    Бесплатная доставка воды курьером по городу Минску при заказе от минимальной партии. Оплата производится наличными курьеру при получении или безналичным расчетом для юридических лиц.
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}