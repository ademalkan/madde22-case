import Event from "./Event";

export default interface MenuProps {
  events: Event[];
  selectedId: number;
  handleItemClick: (id: number) => void;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}
