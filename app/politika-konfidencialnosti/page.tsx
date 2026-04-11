import Navigation from "../components/Navigation";
import FloatingContacts from "../components/feature/FloatingContacts";

export default function PolitikaKonfidencialnostiPage() {
  return (
    <>
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#14233d] pt-[118px] pb-16">
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-[15px]">
            <a
              href="/"
              className="text-white/80 transition hover:text-white hover:underline"
            >
              Главная
            </a>

            <span className="text-white/40">›</span>

            <span className="font-medium text-white">
              Политика конфиденциальности
            </span>
          </div>

          <h1 className="max-w-6xl text-[42px] font-bold leading-tight text-white md:text-[72px]">
            Политика обработки персональных данных
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-14 text-[#334155]">
            <div>
              <h2 className="mb-6 text-[32px] font-bold text-[#0f172a] md:text-[40px]">
                1. Общие положения
              </h2>

              <div className="space-y-6 text-[18px] leading-9">
                <p>
                  Настоящая Политика обработки персональных данных определяет
                  порядок обработки и защиты персональных данных пользователей
                  сайта{" "}
                  <a
                    href="https://filterflow.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#0f172a] hover:underline"
                  >
                    https://filterflow.ru/
                  </a>
                </p>

                <p>Оператором персональных данных является:</p>

                <div className="rounded-[24px] bg-[#f8fafc] px-7 py-6">
                  <p className="mb-4 text-[18px] font-semibold text-[#0f172a]">
                    Лукьянова Виолетта Александровна
                  </p>

                  <p className="mb-3">
                    Email:{" "}
                    <a
                      href="mailto:filterflow@mail.ru"
                      className="text-[#ff6b2c] hover:underline"
                    >
                      filterflow@mail.ru
                    </a>
                  </p>

                  <p>
                    Телефон:{" "}
                    <a
                      href="tel:+79514992576"
                      className="text-[#ff6b2c] hover:underline"
                    >
                      +7 (951) 499-25-76
                    </a>
                  </p>
                </div>

                <p>
                  Настоящая политика разработана в целях соблюдения требований
                  законодательства Российской Федерации о персональных данных и
                  направлена на обеспечение защиты прав и свобод пользователей
                  при обработке их персональных данных.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-[32px] font-bold text-[#0f172a] md:text-[40px]">
                2. Персональные данные, которые обрабатываются
              </h2>

              <div className="space-y-6 text-[18px] leading-9">
                <p>
                  Оператор может обрабатывать следующие персональные данные
                  пользователей:
                </p>

                <ul className="space-y-3 pl-6">
                  <li>• имя</li>
                  <li>• адрес электронной почты (email)</li>
                  <li>• номер телефона</li>
                  <li>
                    • иные данные, которые пользователь указывает в формах
                    обратной связи на сайте
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-[32px] font-bold text-[#0f172a] md:text-[40px]">
                3. Цели обработки персональных данных
              </h2>

              <div className="space-y-6 text-[18px] leading-9">
                <p>
                  Персональные данные пользователей обрабатываются в следующих
                  целях:
                </p>

                <ul className="space-y-3 pl-6">
                  <li>• обработка запросов и заявок, отправленных через сайт</li>
                  <li>• связь с пользователем для предоставления услуг</li>
                  <li>• предоставление консультаций и информации по услугам</li>
                  <li>• выполнение обязательств перед пользователями сайта</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-[32px] font-bold text-[#0f172a] md:text-[40px]">
                4. Правовые основания обработки
              </h2>

              <div className="space-y-6 text-[18px] leading-9">
                <p>
                  Обработка персональных данных осуществляется на основании
                  добровольного согласия пользователя, предоставленного при
                  заполнении форм на сайте и подтверждении согласия с настоящей
                  Политикой.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-[32px] font-bold text-[#0f172a] md:text-[40px]">
                5. Порядок обработки и хранения данных
              </h2>

              <div className="space-y-6 text-[18px] leading-9">
                <p>
                  Персональные данные обрабатываются с использованием
                  автоматизированных и неавтоматизированных средств.
                </p>

                <p>
                  Оператор принимает необходимые организационные и технические
                  меры для защиты персональных данных пользователей от
                  неправомерного доступа, изменения, раскрытия или уничтожения.
                </p>

                <p>
                  Персональные данные хранятся не дольше, чем это необходимо для
                  достижения целей их обработки.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-[32px] font-bold text-[#0f172a] md:text-[40px]">
                6. Передача персональных данных третьим лицам
              </h2>

              <div className="space-y-6 text-[18px] leading-9">
                <p>
                  Персональные данные пользователей не передаются третьим лицам,
                  за исключением случаев, предусмотренных законодательством
                  Российской Федерации.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-[32px] font-bold text-[#0f172a] md:text-[40px]">
                7. Права пользователя
              </h2>

              <div className="space-y-6 text-[18px] leading-9">
                <p>Пользователь имеет право:</p>

                <ul className="space-y-3 pl-6">
                  <li>• получать информацию о своих персональных данных</li>
                  <li>
                    • требовать уточнения, блокирования или удаления своих
                    персональных данных
                  </li>
                  <li>• отозвать согласие на обработку персональных данных</li>
                </ul>

                <p>
                  Для реализации своих прав пользователь может обратиться по
                  адресу электронной почты:{" "}
                  <a
                    href="mailto:filterflow@mail.ru"
                    className="text-[#ff6b2c] hover:underline"
                  >
                    filterflow@mail.ru
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-[32px] font-bold text-[#0f172a] md:text-[40px]">
                8. Заключительные положения
              </h2>

              <div className="space-y-6 text-[18px] leading-9">
                <p>
                  Оператор оставляет за собой право вносить изменения в
                  настоящую Политику. Актуальная версия Политики всегда
                  размещается на сайте{" "}
                  <a
                    href="https://filterflow.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#0f172a] hover:underline"
                  >
                    https://filterflow.ru/
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#f4c9b8] bg-[#fcf4ef] p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-[26px] text-white">
                  ?
                </div>

                <div>
                  <h3 className="mb-3 text-[28px] font-bold text-[#0f172a]">
                    Остались вопросы?
                  </h3>

                  <p className="mb-5 text-[18px] leading-8 text-[#334155]">
                    Если у вас есть вопросы по обработке персональных данных,
                    свяжитесь с нами:
                  </p>

                  <p className="mb-3 text-[18px] leading-8 text-[#334155]">
                    Email:{" "}
                    <a
                      href="mailto:filterflow@mail.ru"
                      className="text-[#ff6b2c] hover:underline"
                    >
                      filterflow@mail.ru
                    </a>
                  </p>

                  <p className="text-[18px] leading-8 text-[#334155]">
                    Телефон:{" "}
                    <a
                      href="tel:+79514992576"
                      className="text-[#ff6b2c] hover:underline"
                    >
                      +7 (951) 499-25-76
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingContacts />
    </>
  );
}