import React, { useState } from "react";

const ProectsComponent = () => {
    const data = [
        { id: "1", tabTitle: "Tab 1", tabContent: "Tab Content 1" },
        { id: "2", tabTitle: "Tab 2", tabContent: "Tab Content 2" },
        { id: "3", tabTitle: "Tab 3", tabContent: "Tab Content 3" },
      ];
    
      const [activeTab, setActiveTab] = useState(data[0].id);
  return (
    <>
        <section>
            <div className="containerb">
                <h2 className='text-6xl  mb-16'>Проекты и цены</h2>
                <div>
      <h1 className="text-2xl font-medium mb-10">Tab</h1>

      <ul className="flex">
        {data.map((tab) => {
          return (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-5 cursor-pointer ${
                activeTab === tab.id ? "bg-green-600" : "bg-green-500"
              }`}
            >
              {tab.tabTitle}
            </li>
          );
        })}
      </ul>

      <div>
        {data.map((tab) => {
          return (
            <li
              key={tab.id}
              className={`p-5 cursor-pointer ${
                activeTab === tab.id ? "bg-green-600 p-5" : "hidden"
              }`}
            >
              {tab.tabContent}
            </li>
          );
        })}
      </div>
    </div>
            </div>
        </section>
    </>
  )
}

export default ProectsComponent