import React from "react";
import Filter from "../Filter/Filter";

function FilterMenu() {
  return (
    <nav className="bg-custom_grey border-gray-200 dark:bg-gray-900  w-full flex justify-between items-center md:px-40 px-1">
      <Filter />
      <div className="text-sm">Takvimde Gör</div>
    </nav>
  );
}

export default FilterMenu;
