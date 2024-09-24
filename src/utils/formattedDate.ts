interface FormatDate {
  date: string;
}
interface GetTimeAgo {
  diffYears: number;
  diffMonths: number;
  diffWeeks: number;
  diffDays: number;
  diffHours: number;
  diffMinutes: number;
}

const getTimeAgo = ({
  diffYears,
  diffMonths,
  diffWeeks,
  diffDays,
  diffHours,
  diffMinutes,
}: GetTimeAgo): string => {
  switch (true) {
    case diffYears > 0:
      return `${diffYears} tahun yang lalu`;
    case diffMonths > 0:
      return `${diffMonths} bulan yang lalu`;
    case diffWeeks > 0:
      return `${diffWeeks} minggu yang lalu`;
    case diffDays > 0:
      return `${diffDays} hari yang lalu`;
    case diffHours > 0:
      return `${diffHours} jam yang lalu`;
    case diffMinutes > 0:
      return `${diffMinutes} menit yang lalu`;
    default:
      return 'Baru saja';
  }
};

const postedAt = ({ date }: FormatDate): string => {
  const now = new Date() as Date;
  const posted = new Date(date) as Date;
  const diff = (now.getTime() - posted.getTime()) as number;
  const diffMinutes = Math.floor(diff / (1000 * 60)) as number;
  const diffHours = Math.floor(diff / (1000 * 60 * 60)) as number;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24)) as number;
  const diffWeeks = Math.floor(diffDays / 7) as number;
  const diffMonths = Math.floor(diffDays / 30) as number; // Rata-rata 30 hari per bulan
  const diffYears = Math.floor(diffDays / 365) as number; // Rata-rata 365 hari per tahun

  return getTimeAgo({
    diffYears,
    diffMonths,
    diffWeeks,
    diffDays,
    diffHours,
    diffMinutes,
  });
};

export { postedAt };
