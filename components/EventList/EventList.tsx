import React from "react";
import EventCard from "../EventCard/EventCard";
import Event from "@/store/interfaces/Event";

interface Props {
  events: Event[];
}

function EventList({ events }: Props) {
  return (
    <>
      {events?.map((event) => (
        <EventCard key={event?.id} event={event}  />
      ))}
    </>
  );
}

export default EventList;
