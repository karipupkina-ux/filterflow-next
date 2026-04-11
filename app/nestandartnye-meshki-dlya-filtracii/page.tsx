"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Navigation from "../components/Navigation";
import FloatingContacts from "../components/feature/FloatingContacts";

export default function Page() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("");
  const [quantity, setQuantity] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim() || !task.trim()) {
      alert("Пожалуйста, заполните все обязательные поля со звёздочкой.");
      return;
    }

    if (!consent) {
      alert(
        "Пожалуйста, подтвердите согласие на обработку персональных данных."
      );
      return;
    }

    const subject = encodeURIComponent(
      "Заявка: нестандартные мешки для фильтрации"
    );

    const body = encodeURIComponent(
      `Имя: ${name}
Телефон: ${phone}
Email: ${email}

Описание оборудования / задачи:
${task}

Количество (шт):
${quantity || "Не указано"}

Дополнительная информация:
${extraInfo || "Не указано"}
`
    );

    window.location.href = `mailto:filterflow@mail.ru?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Navigation />
      <FloatingContacts />

      <main className="bg-[#f6f7f7]">
        <section className="mx-auto max-w-[1280px] px-6 pt-6 pb-12">
          <div className="mb-8 rounded-lg bg-[#eef0f0] px-6 py-4">
            <div className="flex items-center gap-2 text-[14px]">
              <Link
                href="/"
                className="font-medium text-[#149c8d] transition hover:underline"
              >
                Главная
              </Link>
              <span className="text-gray-400">›</span>
              <span className="text-gray-600">
                Нестандартные мешки для фильтрации
              </span>
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-[28px] font-semibold leading-[1.2] text-[#0f172a] sm:text-[34px] lg:text-[40px]">
                Нестандартные мешки
                <br />
                для фильтрации по
                <br />
                чертежам заказчика
              </h1>

              <p className="mb-8 max-w-[620px] text-[16px] leading-[1.7] text-[#5b677a]">
                Изготавливаем фильтровальные мешки по индивидуальным чертежам и
                размерам заказчика.
              </p>
            </div>

            <div className="flex justify-end">
              <div className="w-full max-w-[520px] overflow-hidden rounded-[20px]">
                <Image
                  src="/images/catalog/filter_bags_table.webp"
                  alt="Нестандартные мешки"
                  width={800}
                  height={900}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}