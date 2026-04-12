"use client";

import { useMemo, useState } from "react";
import Navigation from "../components/Navigation";
import SeeAlsoLinks from "../components/SeeAlsoLinks";
import FloatingContacts from "../components/feature/FloatingContacts";

export default function TkanevyeMeshkiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [equipment, setEquipment] = useState("");

  const faqItems = [
    {
      question: "Какой материал лучше для тканевых мешков аспирации?",
      answer:
        "Для большинства задач оптимален полиэстер плотностью 500-550 г/м² — он обеспечивает эффективность фильтрации 99%, выдерживает температуры до 130°C и служит 5-7 лет. Для влажных условий лучше полипропилен, для максимальной очистки — иглопробивной фильтр с эффективностью 99,9%.",
    },
    {
      question: "Можно ли стирать тканевые мешки для аспирации?",
      answer:
        "Да, тканевые мешки из полиэстера и полипропилена можно стирать в тёплой воде (до 40°C) с мягким моющим средством. Стирка восстанавливает пропускную способность фильтра и продлевает срок службы. После стирки мешок нужно полностью высушить перед установкой.",
    },
    {
      question: "Как часто нужно менять тканевые мешки?",
      answer:
        "Тканевые мешки служат 3-7 лет в зависимости от материала и условий эксплуатации. Замена требуется при снижении эффективности фильтрации, повреждении ткани или износе швов. При регулярной очистке и правильной эксплуатации мешки служат максимально долго.",
    },
    {
      question: "Чем тканевые мешки лучше одноразовых?",
      answer:
        "Тканевые мешки многоразовые — их можно стирать и использовать годами, что экономичнее одноразовых. Они обеспечивают более высокую степень фильтрации (до 99,9%), выдерживают большие нагрузки и не рвутся. Экологичнее, так как не создают отходов.",
    },
    {
      question: "Какая плотность ткани нужна для древесной пыли?",
      answer:
        "Для древесной пыли оптимальна плотность 500-550 г/м² из полиэстера или иглопробивного фильтра. Такая ткань задерживает мелкие частицы пыли (от 1 мкм), обеспечивает хорошую пропускную способность воздуха и долго служит при регулярной очистке.",
    },
  ];

  const mailHref = useMemo(() => {
    const subject = "Заявка на тканевые мешки для аспирации";
    const body = [
      `Имя: ${name || "-"}`,
      `Телефон: ${phone || "-"}`,
      `Модель оборудования / размеры мешка: ${equipment || "-"}`,
    ].join("\n");

    return `mailto:filterflow@mail.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [name, phone, equipment]);

  return (
    <>
      <Navigation />

      <section className="bg-[#f8fafc] pt-[118px] pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-7 flex flex-wrap items-center gap-2 text-[14px]">
            <a
              href="/"
              className="text-teal-600 transition hover:text-teal-700 hover:underline"
            >
              Главная
            </a>
            <span className="text-slate-400">›</span>
            <a
              href="/meshki-dlya-aspiracii"
              className="text-teal-600 transition hover:text-teal-700 hover:underline"
            >
              Мешки для аспирации
            </a>
            <span className="text-slate-400">›</span>
            <span className="font-medium text-slate-900">Тканевые мешки</span>
          </div>

          <h1 className="mb-8 text-[34px] font-bold leading-[1.08] text-[#0f172a] md:text-[42px]">
            Тканевые мешки для аспирации и стружкоотсоса
          </h1>

          <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="overflow-hidden rounded-[24px] bg-[#eef2f5] shadow-sm">
              <img
                src="/images/catalog/tkanevie-meshki.webp"
                alt="Фильтровальные мешки тканевые для аспирации"
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <p className="text-[18px] leading-8 text-[#334155]">
                Тканевые мешки для аспирации и стружкоотсоса шьём из полиэстера,
                полипропилена и иглопробивного полотна — многоразовые
                фильтровальные решения со стиркой и длительным ресурсом. Для
                деревообработки обычно берут полиэстер 500–550 г/м²; для горячих
                аэрозолей подбирают термостойкие ткани, в том числе на основе
                Nomex.
              </p>

              <h2 className="mt-10 mb-6 text-[28px] font-bold leading-tight text-[#0f172a] md:text-[32px]">
                Преимущества тканевых мешков
              </h2>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="mt-[6px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff7a2f] text-[12px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-[16px] leading-7 text-[#0f172a]">
                    Высокая степень фильтрации до 99,9%
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-[6px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff7a2f] text-[12px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-[16px] leading-7 text-[#0f172a]">
                    Устойчивость к истиранию и разрывам
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-[6px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff7a2f] text-[12px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-[16px] leading-7 text-[#0f172a]">
                    Возможность стирки и повторного использования
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-[6px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff7a2f] text-[12px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-[16px] leading-7 text-[#0f172a]">
                    Срок службы до 5–7 лет
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-[6px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff7a2f] text-[12px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-[16px] leading-7 text-[#0f172a]">
                    Экологичность и безопасность
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-[30px] font-bold leading-tight text-[#0f172a] md:text-[34px]">
            Материалы тканевых мешков
          </h2>
          <p className="mb-10 max-w-[820px] text-[16px] leading-7 text-[#475569] md:text-[17px]">
            Для тканевых фильтровальных мешков подбираем полотно по температуре,
            влажности и абразиву пыли: от стандартного{" "}
            <span className="font-semibold text-[#0f172a]">полиэстера</span> до
            мета-арамидных тканей (в т.ч. аналоги Nomex) и комбинированных
            решений под ТЗ.
          </p>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-[20px] font-bold text-[#0f172a]">
                Полиэстер
              </h3>

              <p className="mb-5 text-[16px] leading-8 text-[#475569]">
                Самый популярный материал для фильтрации. Высокая прочность,
                устойчивость к температурам до 130°C.
              </p>

              <ul className="space-y-2 text-[15px] leading-7 text-[#475569]">
                <li>• Плотность: 500-550 г/м²</li>
                <li>• Температура: до 130°C</li>
                <li>• Эффективность: 99%</li>
              </ul>
            </div>

            <div className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-[20px] font-bold text-[#0f172a]">
                Полипропилен
              </h3>

              <p className="mb-5 text-[16px] leading-8 text-[#475569]">
                Устойчив к влаге и химическим веществам. Идеален для влажных и
                агрессивных сред.
              </p>

              <ul className="space-y-2 text-[15px] leading-7 text-[#475569]">
                <li>• Плотность: 450-500 г/м²</li>
                <li>• Температура: до 90°C</li>
                <li>• Влагостойкость: высокая</li>
              </ul>
            </div>

            <div className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-[20px] font-bold text-[#0f172a]">
                Иглопробивной фильтр
              </h3>

              <p className="mb-5 text-[16px] leading-8 text-[#475569]">
                Максимальная степень очистки для мелкодисперсной пыли. Трехслойная
                структура.
              </p>

              <ul className="space-y-2 text-[15px] leading-7 text-[#475569]">
                <li>• Плотность: 550-600 г/м²</li>
                <li>• Эффективность: 99,9%</li>
                <li>• Размер пор: 1-5 мкм</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-[20px] border border-slate-200 bg-[#f1f5f9] px-6 py-6 md:px-8 md:py-7">
            <p className="text-[15px] leading-7 text-[#475569] md:text-[16px]">
              <span className="font-semibold text-[#0f172a]">
                Высокие температуры и искры:
              </span>{" "}
              если стандартного полиэстера недостаточно, используют термостойкие
              ткани на основе мета-арамида (в отрасли часто ориентируются на Nomex)
              или смесевые материалы — под конкретный класс температуры и химию
              среды.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[24px] bg-[#f4f6f8] px-8 py-10 md:px-10 md:py-12">
              <h2 className="mb-6 text-[26px] font-bold leading-tight text-[#0f172a] md:text-[32px]">
              Чем тканевые фильтровальные мешки отличаются от других решений
            </h2>
            <div className="max-w-[920px] space-y-5 text-[16px] leading-8 text-[#334155] md:text-[17px]">
              <p>
                В отличие от одноразовых бумажных или нетканых вставок, тканевый
                мешок рассчитан на снятие, чистку и повторную установку: плотное
                полотно держит нагрузку на швах при пульсации и не рассыпается при
                встряхивании, как однослойная картонная гильза.
              </p>
              <p>
                Рукавные фильтры из полиэстера чаще стоят в рукавных установках;
                тканевый мешок удобнее как накопитель на стружкоотсосе или в узле
                аспирации — форму и крепление подгоняют под патрубок и бункер, а
                не под цилиндр рукавного фильтра.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-[30px] font-bold leading-tight text-[#0f172a] md:text-[34px]">
            Применение тканевых мешков
          </h2>

          <div className="rounded-[24px] bg-[#f4f6f8] px-8 py-10 md:px-10 md:py-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
              <div>
                <h3 className="mb-6 text-[22px] font-bold text-[#0f2341]">
                  Деревообработка
                </h3>

                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                    <span className="text-[16px] leading-7 text-[#334155]">
                      Фильтрация древесной пыли
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                    <span className="text-[16px] leading-7 text-[#334155]">
                      Сбор опилок и стружки
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                    <span className="text-[16px] leading-7 text-[#334155]">
                      Мебельное производство
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-[22px] font-bold text-[#0f2341]">
                  Металлообработка
                </h3>

                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                    <span className="text-[16px] leading-7 text-[#334155]">
                      Металлическая пыль
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                    <span className="text-[16px] leading-7 text-[#334155]">
                      Абразивная стружка
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                    <span className="text-[16px] leading-7 text-[#334155]">
                      Шлифовальная пыль
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-[22px] font-bold text-[#0f2341]">
                  Другие отрасли
                </h3>

                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                    <span className="text-[16px] leading-7 text-[#334155]">
                      Пищевая промышленность
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                    <span className="text-[16px] leading-7 text-[#334155]">
                      Химическое производство
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="mt-[9px] h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#ff7a2f]" />
                    <span className="text-[16px] leading-7 text-[#334155]">
                      Текстильная отрасль
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-[30px] font-bold leading-tight text-[#0f2341] md:text-[44px]">
              Часто задаваемые вопросы
            </h2>
          </div>

          <div className="space-y-5">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={item.question}
                  className={`overflow-hidden rounded-[20px] border shadow-sm transition-all duration-300 ${
                    isOpen
                      ? "border-[#d9cfc0] bg-[#f4ede3]"
                      : "border-[#e5e7eb] bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-7 text-left md:px-7"
                  >
                    <span className="text-[18px] font-bold leading-[1.35] text-[#0f172a] md:text-[20px]">
                      {item.question}
                    </span>

                    <span
                      className={`shrink-0 text-[28px] font-light leading-none text-[#ff6b2c] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ˅
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-7 md:px-7">
                        <p className="max-w-[1250px] text-[16px] leading-8 text-[#475569] md:text-[17px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SeeAlsoLinks />

      <section className="bg-[#ff6428] py-18 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-9 text-center">
            <h2 className="mb-3 text-[24px] font-bold leading-[1.15] text-white md:text-[34px]">
              Заказать тканевые мешки для аспирации
            </h2>

            <p className="mx-auto max-w-3xl text-[14px] leading-7 text-white/90 md:text-[15px]">
              Оставьте заявку — подберём размер, рассчитаем стоимость и ответим в течение 30 минут
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.02fr_1fr] lg:gap-6">
            <div className="rounded-[22px] bg-[#f8f8f8] p-7 shadow-[0_16px_40px_rgba(0,0,0,0.10)] md:p-8">
              <h3 className="mb-6 text-[19px] font-bold text-[#0f172a]">
                Быстрая заявка
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-[14px] font-medium text-[#334155]">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Иван Иванов"
                    className="h-[50px] w-full rounded-[12px] border border-slate-200 bg-white px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#ff6428]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-medium text-[#334155]">
                    Телефон <span className="text-[#ff6428]">*</span>
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className="h-[50px] w-full rounded-[12px] border border-slate-200 bg-white px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#ff6428]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-medium text-[#334155]">
                    Модель оборудования / размеры мешка
                  </label>
                  <textarea
                    value={equipment}
                    onChange={(e) => setEquipment(e.target.value)}
                    placeholder="Например: стружкоотсос, диаметр горловины 215 мм"
                    rows={4}
                    className="w-full rounded-[12px] border border-slate-200 bg-white px-4 py-4 text-[15px] leading-7 text-[#0f172a] outline-none transition placeholder:text-slate-400 focus:border-[#ff6428]"
                  />
                </div>

                <a
                  href={mailHref}
                  className="flex h-[52px] w-full items-center justify-center rounded-[12px] bg-[#ff6b2c] text-[17px] font-semibold text-white transition hover:bg-[#f25b1a]"
                >
                  Отправить заявку
                </a>

                <p className="text-center text-[12px] leading-6 text-slate-400">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="/politika-konfidencialnosti" className="underline hover:text-slate-500">
                    политикой конфиденциальности
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+79514992576"
                className="flex items-center gap-4 rounded-[20px] border border-white/20 bg-[rgba(255,255,255,0.16)] p-5 text-white transition hover:bg-[rgba(255,255,255,0.21)]"
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] bg-white text-[24px] text-[#ff6428]">
                  ☎
                </div>
                <div>
                  <div className="text-[13px] text-white/78">Позвонить</div>
                  <div className="text-[17px] font-semibold">+7 (951) 499-25-76</div>
                  <div className="text-[13px] text-white/78">Пн–Пт 9:00-18:00 МСК</div>
                </div>
              </a>

              <a
                href="https://wa.me/79514992576"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-[20px] border border-white/20 bg-[rgba(255,255,255,0.16)] p-5 text-white transition hover:bg-[rgba(255,255,255,0.21)]"
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] bg-white">
                  <img
                    src="/images/whatsapp.png"
                    alt="WhatsApp"
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <div>
                  <div className="text-[13px] text-white/78">WhatsApp</div>
                  <div className="text-[17px] font-semibold">Написать в WhatsApp</div>
                  <div className="text-[13px] text-white/78">
                    Ответим быстро — обычно за 15 минут
                  </div>
                </div>
              </a>

              <a
                href="mailto:filterflow@mail.ru"
                className="flex items-center gap-4 rounded-[20px] border border-white/20 bg-[rgba(255,255,255,0.16)] p-5 text-white transition hover:bg-[rgba(255,255,255,0.21)]"
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] bg-white text-[24px] text-[#ff6428]">
                  ✉
                </div>
                <div>
                  <div className="text-[13px] text-white/78">Email</div>
                  <div className="text-[17px] font-semibold">filterflow@mail.ru</div>
                  <div className="text-[13px] text-white/78">
                    Пришлите размеры или фото оборудования
                  </div>
                </div>
              </a>

              <div className="rounded-[20px] border border-white/20 bg-[rgba(255,255,255,0.16)] p-5 text-white">
                <h3 className="mb-3 flex items-center gap-3 text-[18px] font-semibold">
                  <span className="text-[17px]">ⓘ</span>
                  Что указать в заявке
                </h3>

                <ul className="space-y-2.5 text-[14px] leading-7 text-white/95">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[12px]">◎</span>
                    <span>Модель стружкоотсоса или размеры</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[12px]">◎</span>
                    <span>Желаемый материал (полиэстер / полипропилен)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[12px]">◎</span>
                    <span>Нужное количество штук</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingContacts />
    </>
  );
}