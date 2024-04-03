export interface GoBackButtonProps {
  content?: string;
}

export interface CategoryProps {
  categoryList: {
    label: string;
    category: string;
  }[];
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export interface KakaoMapProps {
  height: string;
}

export interface CircleItemProps {
  logo: string;
  label: string;
}

export interface CarouselProps {
  height: string;
  children: React.ReactNode;
}

export interface IconSearchProps {
  color?: string;
}
