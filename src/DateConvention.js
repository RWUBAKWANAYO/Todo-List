export default function DateConvention() {
  const YearWrapper = document.querySelector('.year-wrapper');
  const MonthsWrapper = document.querySelector('.months-wrapper');

  const d = new Date();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[d.getMonth()];
  const currentDate = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  YearWrapper.innerHTML = d.getFullYear();
  MonthsWrapper.innerHTML = `${month} \n ${currentDate}`;
}
