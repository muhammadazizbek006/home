import React from 'react'
import axios from "axios";

import { useState } from 'react';
const Aloqa = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setphone] = useState("");
    const [message, setMessage] = useState("");

    
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePhone = (event) => {
    setphone(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };


  const handleSubmitInput = (event) => {
    event.preventDefault();
    // setNameSend("");
    // setEmailSend("");
    // setMessageSend("");
    // setcontextSend("");
    // setSubjectSend("");
    if (name == "" || email == "" || phone == "") {
      alert("Iltimos malumotni to'ldiring");
    } else {
      //   setSubject(false);
      const telegram_bot_id = "6470059960:AAHkas-9gyueIPQvi9F22bU4ZKBO3Te-tc0";
      const chat_id = "6932003276";

      const telegramMessage = `Name: ${name}\nEmail: ${email}\nPhone Number : ${phone}\n`;

      axios

        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          setName("");
          setEmail("");
          setphone("");
          setMessage("");
        });
      alert("Malumot yuborildi");
    }
  };
  return (
    <>
        <section className='bg-black pt-28 pb-12'>
            <div className="containerb">
                <h2 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-8'>Устали подбирать варианты?</h2>
                <p className='text-white  mb-20 text-lg  lg:text-2xl text-center'>Оставьте контакты, вам перезвонит наш сотрудник архитектурного бюрои  <br />за 15 минут поможет определится с базовым вариантом</p>
                
                {/* inputs */}
                <form
                  onSubmit={handleSubmitInput}
                  className=" flex flex-col justify-center items-center p-4 "
                >
                  
                  <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-x-4">
                    <input
                      onChange={handleName}
                      value={name}
                      required
                      className="bg-[#F8F8F8]  py-4 pr-36 pl-2 rounded-sm shadow-md mb-5"
                      type="text"
                      placeholder="Ваше имя"
                    />
                    <input
                      onChange={handlePhone}
                      value={phone}
                      required
                      type="tel"
                      placeholder="Телефон"
                      className="bg-[#F8F8F8]  py-4 pr-36 pl-2 rounded-sm shadow-md mb-5"
                    />
                    <input
                      onChange={handleEmail}
                      value={email}
                      required
                      type="email"
                      placeholder="email"
                      className="bg-[#F8F8F8]  py-4 pr-36 pl-2 rounded-sm shadow-md mb-5"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-gren text-white px-10 py-4 rounded-sm shadow-md"
                    >
                      Перезвоните мне
                    </button>
                  </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default Aloqa