"use client";
import { useState } from "react";
import events from "../../store/mocks/Filter.json";
import Event from "@/store/interfaces/Event";


function Filter() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedVenueOptions, setSelectedVenueOptions] = useState<string[]>(
    []
  );
  const [selectedDateOptions, setSelectedDateOptions] = useState<string[]>([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleVenueOptionClick = (option: string) => {
    if (selectedVenueOptions.includes(option)) {
      setSelectedVenueOptions(
        selectedVenueOptions.filter((item) => item !== option)
      );
    } else {
      setSelectedVenueOptions([...selectedVenueOptions, option]);
    }
  };

  const handleDateOptionClick = (option: string) => {
    if (selectedDateOptions.includes(option)) {
      setSelectedDateOptions(
        selectedDateOptions.filter((item) => item !== option)
      );
    } else {
      setSelectedDateOptions([...selectedDateOptions, option]);
    }
  };

//   const today = new Date();
//   const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1)
//     .toString()
//     .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

//   const filteredEventData = events.filter((event: Event) => {
//     if (
//       selectedVenueOptions.length > 0 &&
//       !selectedVenueOptions.includes(event.venue.slice(-1))
//     ) {
//       return false;
//     }
//     if (selectedDateOptions.length > 0) {
//       const eventDate = new Date(event.date);
//       if (selectedDateOptions.includes("1")) {
//         if (eventDate < today) {
//           return false;
//         }
//       } else if (selectedDateOptions.includes("2")) {
//         if (eventDate >= today) {
//           return false;
//         }
//       }
//     }
//     return true;
//   });

  return (
    <div className="relative z-40">
      <button
        className={`px-4 py-2 text-sm font-medium  rounded-lg focus:outline-none  ${menuOpen && 'text-pink'}`}
        onClick={toggleMenu}
      >
        Filtreler
      </button>
      {menuOpen && (
        <div className="absolute w-60    top-full left-0 z-10 p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="mb-4">
            <h2 className="mb-2 text-sm font-bold text-gray-800">Etkinlik Mekanı</h2>
            <ul>
              {events?.map((event) => {
                return (
                  <li
                    className={`flex items-center py-1 cursor-pointer `}
                    onClick={() => handleVenueOptionClick(event.name)}
                  >
                    <input
                      type="checkbox"
                      className={`mr-2 w-4 h-4 rounded ${
                        selectedVenueOptions.includes(event.name) &&
                        "accent-pink"
                      }`}
                      checked={selectedVenueOptions.includes(event.name)}
                      onChange={() => {}}
                    />
                    <span className="text-sm">{event.venue}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-bold text-gray-800">Etkinlik Tarihi</h2>
            <ul>
              <li
                className={`flex items-center py-1 cursor-pointer ${
                  selectedDateOptions.includes("1") && "text-pink "
                }`}
                onClick={() => handleDateOptionClick("1")}
              >
                <input
                  type="checkbox"
                  className={`mr-2 w-4 h-4  rounded ${
                    selectedVenueOptions.includes("1") && "accent-pink"
                  }`}
                  checked={selectedDateOptions.includes("1")}
                  onChange={() => {}}
                />
                Upcoming
              </li>
              <li
                className={`flex items-center py-1 cursor-pointer ${
                  selectedDateOptions.includes("2") && "text-pink "
                }`}
                onClick={() => handleDateOptionClick("2")}
              >
                <input
                  type="checkbox"
                  className={`mr-2 w-4 h-4  rounded ${
                    selectedVenueOptions.includes("2") && "accent-pink"
                  }`}
                  checked={selectedDateOptions.includes("2")}
                  onChange={() => {}}
                />
                Past
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default Filter;
