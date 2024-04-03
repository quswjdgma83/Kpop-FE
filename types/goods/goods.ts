export interface GoodsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface AnotherItemProps {
  item_id: string;
  item_image: string;
  item_label: string;
  item_price: number;
  artist_name: string;
  user_name: string;
  user_avatar: string;
  size: number;
}

export interface ItemProps {
  item_id: string;
  item_image: string;
  item_label: string;
  item_price: number;
  item_date_start: string;
  item_date_end: string;
  item_view: number;
  user_avatar: string;
  user_name: string;
  user_id: string;
}

export interface GoodsItemProps {
  item_id: string;
  item_image: string;
  item_label: string;
  item_price: number;
  item_date_start: string;
  item_date_end: string;
  item_view: number;
  user_avatar: string;
  user_name: string;
  user_id: string;
}
