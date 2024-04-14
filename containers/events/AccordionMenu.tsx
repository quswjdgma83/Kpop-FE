import { useState } from 'react';
import { IconChecked } from '@/public/svgs';
import { AccordionMenuProps } from '@/types/event';

const AccordionMenu: React.FC<AccordionMenuProps> = ({ list, isOpen }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // 리스트를 검색어에 따라 필터링
  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="w-[346px] mb-4">
      <div className="flex flex-col items-center p-2.5 gap-[4px] bg-[#3B3B3B] rounded-[8px]">
        <input
          type="text"
          placeholder={selectedItem ?? list[0]}
          onChange={handleSearchChange}
          className="flex items-center w-[326px] h-[48px] pl-[16px] pr-[24px] py-[8px] mb-1 rounded-[8px] overflow-hidden border border-solid border-[#5ed0ff] bg-[#3B3B3B]"
        />
        {isOpen &&
          filteredList.map((item) => (
            <button
              key={item}
              onClick={() => handleItemClick(item)}
              className={`flex items-center gap-[8px] px-[16px] py-[10px] w-[324px] rounded-[8px] ${
                selectedItem === item
                  ? 'bg-[#252525] border border-[#5dc8f4]'
                  : 'bg-[#252525] border border-transparent'
              } cursor-pointer`}
            >
              <div
                className={`mt-[-1.00px] font-roboto-regular-16 ${
                  selectedItem === item ? 'text-white' : 'text-[#7d7d7d]'
                } flex-1`}
              >
                {item}
              </div>
              {selectedItem === item && <IconChecked />}
            </button>
          ))}
      </div>
    </div>
  );
};

export default AccordionMenu;
