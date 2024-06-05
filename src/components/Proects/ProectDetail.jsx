import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is imported
import { Proects } from '../../Data';
import Aloqa from '../home/Aloqa';
import razmer from '../../imgs/loyihalar/razmer.svg';
import maydon from '../../imgs/loyihalar/maydon.svg';
import etaj from '../../imgs/loyihalar/etaj.svg';
import Galareya from '../../components/Galareya';

const ProectDetail = () => {
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
    setModal(false)
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
      const telegram_bot_id = "6772594494:AAG3eakuOi1V_I9A6zUNL0w5tVdGhNFqWcY";
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

    const { title } = useParams();
    const Detail = Proects.filter((e) => e.title === title);
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const closeModal = () => {
        setModal(false);
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <>
            <section className='py-16'>
                <div className="containerb relative">
                    {Detail.map((e) => (
                        <div key={e.title}>
                            <h3 className='text-6xl mb-10 text-center lg:text-start'>Проект: {e.title}</h3>
                        </div>
                    ))}
                    <ul className='mb-40'>
                        {Detail.map((e) => (
                            <li key={e.title} className='flex flex-col items-center lg:items-start lg:flex-row justify-between'>
                                <div className='mb-8 lg:mb-0'>
                                    <img className='lg:w-[500px] xl:w-[696px] lg:h-[700px] xl:h-[798px] rounded object-cover' src={e.img} alt={e.title} />
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <div>
                                        <div className='text-xl flex justify-end xl:justify-start space-x-4 lg:space-x-5 xl:space-x-11 mb-16'>
                                            <div className='flex flex-col items-center'>
                                                <div className='bg-gren px-7 py-4 rounded'>
                                                    <img src={razmer} alt="Размер" />
                                                </div>
                                                <h4 className='text-center'>{e.razmer}</h4>
                                            </div>
                                            <div className='flex flex-col items-center'>
                                                <div className='bg-gren px-7 py-4 rounded'>
                                                    <img src={etaj} alt="Этажи" />
                                                </div>
                                                <h4 className='text-center'>{e.etaji}</h4>
                                            </div>
                                            <div className='flex flex-col items-center'>
                                                <div className='bg-gren px-7 py-4 rounded'>
                                                    <img src={maydon} alt="Майдон" />
                                                </div>
                                                <h4 className='text-center'>{e.maydoni}</h4>
                                            </div>
                                        </div>
                                        <ul className='flex flex-col space-y-5 mb-8 lg:mb-40'>
                                            <li className='flex items-center justify-evenly xl:justify-between py-5 border-y-2'>
                                                <p className='text-xl'>{e.sxema}</p>
                                                <p className='text-gren text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'>{e.tugamagansxema} руб.</p>
                                            </li>
                                            <li className='flex items-center justify-evenly xl:justify-between py-5 border-y-2'>
                                                <p className='text-xl'>{e.sxema}</p>
                                                <p className='text-gren text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'>{e.tugamagancounter} руб.</p>
                                            </li>
                                            <li className='flex items-center justify-evenly xl:justify-between py-5 border-y-2'>
                                                <p className='text-xl'>{e.sxema}</p>
                                                <p className='text-gren text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'>{e.tugatilgan} руб.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <button onClick={toggleModal} className='sm:px-14 xl:px-28 py-5 bg-gren text-white text-base lg:text-xl'>Оставить заявку на строительство</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {Detail.map((e) => (
                        <div key={e.title} className='flex flex-col items-center'>
                            <h2 className='text-6xl mb-20'>План дома</h2>
                            <img className='mb-10' src={e.reja} alt="План дома" />
                        </div>
                    ))}
                    {modal && (
                        <>
                            <div className='fixed inset-0 bg-black opacity-50 z-40' onClick={closeModal}></div>
                            <div className='fixed inset-0 flex items-center justify-center z-50'>
                                <div className='bg-white p-8 rounded shadow-lg relative'>
                                    <button onClick={closeModal} className=' text-4xl absolute top-0 right-2 text-gray-500 hover:text-gray-800'>
                                        &times;
                                    </button>
                                    <form
                  onSubmit={handleSubmitInput}
                  className=" flex flex-col justify-center items-center p-4 "
                >
                  
                  <div className="flex flex-col ">
                    <input
                      onChange={handleName}
                      value={name}
                      required
                      className="bg-[#F8F8F8]  py-4 w-[332px] pl-2 rounded-sm shadow-md mb-5"
                      type="text"
                      placeholder="Ваше имя"
                    />
                    <input
                      onChange={handlePhone}
                      value={phone}
                      required
                      type="text"
                      placeholder="Телефон"
                      className="bg-[#F8F8F8]  py-4 w-[332px] pl-2 rounded-sm shadow-md mb-5"
                    />
                    <input
                      onChange={handleEmail}
                      value={email}
                      required
                      type="email"
                      placeholder="email"
                      className="bg-[#F8F8F8]  py-4 w-[332px] pl-2 rounded-sm shadow-md mb-5"
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
                            </div>
                        </>
                    )}
                </div>
            </section>
            <Galareya />
            <Aloqa />
        </>
    );
};

export default ProectDetail;
