import React from "react";
import { Link } from "react-router-dom";

const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link
      to={url}
      className="hover:bg-blue-700 h-full flex flex-col items-center gap-3 bg-blue-600 text-white py-5 rounded-lg"
    >
      {icon}
      {name}
    </Link>
  );
};

export default ModuleBtn;
