import React, { useState } from "react";
import { Proects } from "../../Data";

// Unikal etajlarni olish uchun
const uniqueEtaji = [...new Set(Proects.map(project => project.etaji))];

const ProectsComponent = () => {
  // Boshlang'ich aktiv tabni birinchi etaj qilib belgilaymiz
  const [activeTab, setActiveTab] = useState(uniqueEtaji[0]);

  // Faol tabga qarab ma'lumotlarni filtrlash
  const filteredProjects = Proects.filter(project => project.etaji === activeTab);

  return (
    <>
      <section>
        <div className="containerb">
          <h2 className='text-6xl mb-16'>Проекты и цены</h2>
          <div>
            <h1 className="text-2xl font-medium mb-10">Tab</h1>
            <ul className="flex justify-center">
              {uniqueEtaji.map((etaji) => (
                <li
                  key={etaji}
                  onClick={() => setActiveTab(etaji)}
                  className={`px-8 py-3 cursor-pointer mb-20 ${activeTab === etaji ? "bg-white rounded-full shadow-lg" : "bg-tab"}`}
                >
                  {etaji} этаж
                </li>
              ))}
            </ul>

            <div className='grid grid-cols-4 gap-y-8 gap-x-5'>
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className='cursor-pointer flex flex-col bg-white rounded-2xl shadow-xl'
                >
                  <img className='h-64 mb-5 object-cover pt-3' src={project.img} alt={project.title} />
                  {/* Agar kerak bo'lsa, quyidagi qismi izohdan chiqarishingiz mumkin */}
                  {/* <div className='px-5 h-full'>
                    <p className='text-brend text-lg mb-3'>{project.label}</p>
                    <h3 className='text-2xl font-semibold mb-10'>{project.title}</h3>
                    <div className='flex pb-5 items-center justify-between'>
                      <b className='text-xl font-semibold'><sup>$</sup>{project.narxi}</b>
                      <img src={shopadd} alt="shopadd" />
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProectsComponent;
