export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

// ? to use it in another file
// import { formatDate } from '../utils/formatDate';
// function MyComponent({ date }) {
//   return <div>Date: {formatDate(date)}</div>;
// }