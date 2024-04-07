export interface EventCardProps {
  eventId: number;
  eventCategoryCd: number;
  latitude?: number | null;
  longitude?: number | null;
  placeName: string;
  streetAddress: string;
  placeContent?: string;
  placeFollowerCount?: number;
  startDate: string;
  endDate: string;
  artistId: number;
  agencyId: number;
}

export interface AccordionMenuProps {
  list: string[];
  isOpen?: boolean;
}
