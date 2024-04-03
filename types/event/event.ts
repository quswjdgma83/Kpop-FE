export interface ClientsQueryModel {
  query: {
    status?: string;
    name?: string;
    phone?: string;
    marketing?: string | number;
    createdStart?: string;
    createdEnd?: string;
    updatedStart?: string;
    updatedEnd?: string;
    page?: string;
    pageSize?: string;
  };
}

export interface EventCard {
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
