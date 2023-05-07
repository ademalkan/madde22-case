"use client";
import EventList from "@/components/EventList/EventList";
import FilterMenu from "@/components/FilterMenu/FilterMenu";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import Event from "@/store/interfaces/Event";
import EventsMockData from "@/store/mocks/Events.json";
import { useState, useEffect } from "react";

function HomeContainer() {
  const [events, setEvents] = useState<Event[]>([]);
  const [eventsTitle, setEventsTitle] = useState<Event[]>([]);
  const [selectedId, setSelectedId] = useState<number | 0>(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      await setEvents(EventsMockData);
      await setEventsTitle(EventsMockData);
    };

    fetchEvents();
  }, []);

  const handleItemClick = (id: number | 0) => {
    setSelectedId(id);
    setSearchQuery("");
    setEvents(
      id === 0
        ? EventsMockData
        : EventsMockData?.filter((event) => event.id === id)
    );
  };

  const filteredEvents = EventsMockData.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Header />
      <Menu
        events={eventsTitle}
        handleItemClick={handleItemClick}
        selectedId={selectedId}
        handleSearchChange={handleSearchChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setEvents={setEvents}
      />
      <FilterMenu />
      <EventList events={searchQuery ? filteredEvents : events} />
    </>
  );
}

export default HomeContainer;
