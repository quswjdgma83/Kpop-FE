export interface ArtistsContainerProps {
  list: {
    imgSrc: string;
    artistName: string;
  }[];
}

export interface RankItemProps {
  rank: number;
  artist: string;
  change: string | number;
}
