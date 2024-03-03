export const formatEventDates = (startDate: string, endDate: string) => {
  //날짜 포맷 함수
  const start = new Date(startDate);
  const end = new Date(endDate);

  const format = (date: Date) =>
    `${date.getFullYear().toString().slice(-2)}.${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;

  return `${format(start)} - ${format(end).slice(-5)}`;
};

export const formatTimeRange = (startTime: string, endTime: string): string => {
  // 시간 포맷 함수
  const formatTime = (timeString: string) => {
    const time = new Date(`1970-01-01T${timeString}`);
    return new Intl.DateTimeFormat('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(time);
  };
  return `${formatTime(startTime)} ~ ${formatTime(endTime)}`;
};
