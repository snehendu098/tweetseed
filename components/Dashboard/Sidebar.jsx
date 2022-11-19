import React from "react";
import { AiFillTwitterSquare, AiFillSetting } from "react-icons/ai";
import { DiGoogleAnalytics } from "react-icons/di";

const list = [
  { text: "General", icon: AiFillSetting },
  { text: "Your Tweets", icon: AiFillTwitterSquare },
  { text: "Analytics", icon: DiGoogleAnalytics },
];

const Menu = ({ Icon, text }) => {
  return (
    <div className="flex items-center p-2">
      <div className="text-2xl">
        <AiFillSetting />
      </div>
      <p className="ml-3">General</p>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="h-full w-full bg-sidebar flex flex-col relative p-5">
      <h1 className="text-txtlight">TWEETBOOK</h1>
      <div className="mt-5 flex flex-col w-full">
        {list.map((item, index) => (
          <React.Fragment key={index}>
            <Menu Icon={item.icon} text={item.text} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
