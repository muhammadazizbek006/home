import React, { useState } from "react";
import KompaniyaXaida from "../components/home/KompaniyaXaqida";
import { banks } from "../Data";
import axios from "axios";

const MijozlarUchunMalumot = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [rozilik, setRozilik] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleRozilik = () => {
    setRozilik(!rozilik); // toggle rozilik status
  };

  const handleSubmitInput = (event) => {
    event.preventDefault();

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      message === "" ||
      !rozilik
    ) {
      alert("Iltimos malumotni to'ldiring va rozilikka rozi bo'ling");
    } else {
      const telegram_bot_id = "6772594494:AAG3eakuOi1V_I9A6zUNL0w5tVdGhNFqWcY";
      const chat_id = "6932003276";
      const telegramMessage = `Name: ${name}\nEmail: ${email}\nPhone Number : ${phone}\nMessage: ${message}\nRozilik: ${rozilik}`;

      axios
        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setRozilik(false);
          alert("Malumot yuborildi");
        })
        .catch((error) => {
          console.error("Error sending message", error);
          alert("Xatolik yuz berdi, qayta urinib ko'ring");
        });
    }
  };

  return (
    <>
      <section>
        <div className="">
          <h2 className="text-6xl font-medium mb-20 containerb">
            Информация <br /> для заказчиков
          </h2>
          <KompaniyaXaida />
          <div className="containerb pt-28 pb-10">
            <h3 className="text-6xl mb-8">Ипотека</h3>
            <p className="text-2xl max-w-[816px]">
              Вы можете заказать строительство дома или бани в ипотеку. Мы
              сотрудничаем со следующими банками: Сбербанк, Росбанк, ДомРФ,
              Альфабанк. ВТБ, ПочтаБанк. Полные условия по ипотечным продуктам
              указаны на сайтах банков.
            </p>
          </div>
          {/* bank */}
          <ul className="grid grid-cols-3  gap-x-6 gap-y-10 containerb">
            {banks.map((e) => {
              return (
                <li
                  className=" flex flex-col shadows       justify-between"
                  key={e.id}
                >
                  <img className="object-cover h-56" src={e.img} alt="bank" />
                  <button className="px-44 py-4 bg-gren rounded-md text-xl text-white">
                    Условия банка
                  </button>
                </li>
              );
            })}
          </ul>
          {/* inputs forma */}
          <div className="py-24">
            <h2 className="text-6xl  text-center mb-16">
              Отправить проект на расчет
            </h2>
            <form
              onSubmit={handleSubmitInput}
              className="containerb flex flex-col space-y-9 items-center"
              action=""
            >
              {/* Имя */}
              <div className="flex flex-col ">
                <label className="text-5xl mb-8 font-medium">Ваше имя</label>
                <input
                  onChange={handleName}
                  value={name}
                  required
                  className="py-7 pl-7 w-[662px] border-4"
                  type="text"
                  placeholder="Имя"
                />
              </div>
              {/* Номер телефона */}
              <div className="flex flex-col ">
                <label className="text-5xl mb-8 font-medium">
                  Номер телефона
                </label>
                <input
                  onChange={handlePhone}
                  value={phone}
                  required
                  className="py-7 pl-7 w-[662px] border-4"
                  type="number"
                  placeholder="+7 (999) 999 99 99"
                />
              </div>
              {/* Электронная почта */}
              <div className="flex flex-col ">
                <label className="text-5xl mb-8 font-medium">
                  Электронная почта
                </label>
                <input
                  onChange={handleEmail}
                  value={email}
                  required
                  className="py-7 pl-7 w-[662px] border-4"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              {/* Дополнительно */}
              <div className="flex flex-col ">
                <label className="text-5xl mb-8 font-medium">
                  Дополнительно
                </label>
                <textarea
                  onChange={handleMessage}
                  value={message}
                  className="w-[664px] h-[314px] border-4 resize-none "
                  name=""
                  id=""
                ></textarea>
              </div>
              {/*   Я даю согласие на обработку моих персональных данных */}
              <div className="flex  items-center">
                <input
                  onChange={handleRozilik}
                  checked={rozilik}
                  required
                  className=""
                  type="checkbox"
                />
                <label className="">
                    Я даю согласие на обработку моих персональных данных
                </label>
              </div>
              <button className="bg-gren px-28 py-5  rounded-md text-white text-xl">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default MijozlarUchunMalumot;
