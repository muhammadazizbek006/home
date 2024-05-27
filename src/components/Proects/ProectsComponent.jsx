import React, { useState } from "react";
import { Proects } from "../../Data";
import { Link } from "react-router-dom";
import next from '../../imgs/loyihalar/next.svg'


// Unikal etajlarni olish uchun

const uniqueEtaji = [...new Set(Proects.map((project) => project.etaji))];

const ProectsComponent = () => {
  // Boshlang'ich aktiv tabni birinchi etaj qilib belgilaymiz
  const [activeTab, setActiveTab] = useState(uniqueEtaji[0]);

  // Faol tabga qarab ma'lumotlarni filtrlash
  const filteredProjects = Proects.filter(
    (project) => project.etaji === activeTab
  );

  return (
    <>
      <section className="mb-14">
        <div className="containerb ">
          <h2 className="text-6xl mb-16">Проекты и цены</h2>
          <div>

            <ul className="flex  space-x-7">
              {uniqueEtaji.map((etaji) => (
                <li
                  key={etaji}
                  onClick={() => setActiveTab(etaji)}
                  className={`px-8 py-3 cursor-pointer mb-20 border-2 border-gren rounded-md   ${
                    activeTab === etaji
                      ? "bg-gren  text-white shadow-lg"
                      : " text-gren "
                  }`}
                >
                  {etaji} этаж
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-y-8 gap-x-5">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="cursor-pointer h-[665px] flex flex-col bg-no-repeat pb-9  rounded-2xl "
                  style={{ backgroundImage: `url(${project.img}) ` }}
                >
                  <Link
                    to={`/Proect/${project.title}`}
                    className="flex flex-col justify-end h-full p-4  "
                  >
                    <h3 className="text-5xl text-white mb-9">{project.title}</h3>
                    <Link
                      to="/Proects"
                      className="bg-gren py-3 px-7 rounded w-72 hover:opacity-90 duration-300 flex items-center "
                    >
                      <span className="text-xl text-white mr-3">
                        Смотреть проекты
                      </span>
                      <img src={next} alt={project.title} />
                    </Link>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProectsComponent;
