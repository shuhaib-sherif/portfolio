import React from "react";

function ServiceCard({ Icon, title, about }) {
    function createMarkup() {
        return {
           __html: about,
        }
     }
  return (
    <div className="flex items-center p-2 space-x-4 bg-gray-800 rounded-lg shadow-lg">
      <Icon className="w-12 h-12 text-green-500 " />
      <div className="">
        <h6 className="font-bold text-blue-100">{title}</h6>
        <p className="text-blue-100"dangerouslySetInnerHTML={createMarkup()}/>
      </div>
    </div>
  );
}

export default ServiceCard;
