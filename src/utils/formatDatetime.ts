// Fungsi untuk mengonversi string datetime ke objek Date
function parseDateTime(datetime: string): Date {
  const year = parseInt(datetime.substring(0, 4), 10);
  const month = parseInt(datetime.substring(4, 6), 10) - 1; // Bulan dimulai dari 0
  const day = parseInt(datetime.substring(6, 8), 10);
  const hours = parseInt(datetime.substring(8, 10), 10);
  const minutes = parseInt(datetime.substring(10, 12), 10);

  return new Date(year, month, day, hours, minutes);
}

// Fungsi untuk memformat objek Date ke string
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  return new Intl.DateTimeFormat('id-ID', options).format(date);
}

function formatDateWithDayAndMonth(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long', // Nama hari
    day: 'numeric',
    month: 'long', // Nama bulan
    year: 'numeric',
  };
  return new Intl.DateTimeFormat('id-ID', options).format(date);
}

// Contoh penggunaan
// const datetimeString = '202407200000';
// const date = parseDateTime(datetimeString);
// const formattedDate = formatDate(date);

export { parseDateTime, formatDate, formatDateWithDayAndMonth };
