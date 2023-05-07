import MenuProps from "@/store/interfaces/MenuProps";

function Menu({
  events,
  selectedId,
  handleItemClick,
  handleSearchChange,
  searchQuery,
  setSearchQuery,
}: MenuProps) {
  return (
    <nav className="w-full  flex md:justify-between md:items-center">
      <div></div>
      <div className="md:p-4 mb-3 md:mb-0">
        <div className="w-screen block md:w-auto " id="navbar-default">
          <ul className="font-medium text-sm  flex items-center  overflow-x-auto   px-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li
              className={`block py-2 pl-3 pr-4 ${
                selectedId === null
                  ? "text-pink"
                  : "text-gray-900 hover:text-pink"
              } rounded md:bg-transparent cursor-pointer`}
              onClick={() => {
                handleItemClick(0);
                setSearchQuery("");
              }}
            >
              Tüm Etkinlikler
            </li>

            {events?.map((event) => (
              <li
                key={event?.id}
                className={`cursor-pointer block py-2 pl-3 pr-4 ${
                  selectedId === event?.id ? "text-pink" : "hover:text-pink"
                } rounded md:hover:bg-transparent md:border-0 md:hover:text-pink md:p-0`}
                onClick={() => {
                  handleItemClick(event?.id);
                  setSearchQuery("");
                }}
              >
                {event?.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden md:block">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className=" placeholder:text-slate-500 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Etkinlik Ara"
            type="text"
            name="search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </label>
      </div>
    </nav>
  );
}

export default Menu;
