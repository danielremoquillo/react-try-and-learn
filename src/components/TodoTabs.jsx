import React, { useState } from "react";

const TodoTab = () => {
  return <div>TodoTabs</div>;
};

const TodoTabs = ({ all, active, done }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "All", content: all },
    { id: 1, title: "Active", content: active },
    { id: 2, title: "Completed", content: done },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[calc(5*<button_width>)] overflow-x-auto">
        <div className="flex w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-2 px-2 mr-4 text-sm md:text-base font-medium focus:outline-none ${
                activeTab === index
                  ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                  : "text-primary-50 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className="pt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TodoTabs;
