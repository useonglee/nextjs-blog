import { parseISO, format } from 'date-fns';
import datePropsType from './dateType';

const Date = ({ dateString }: datePropsType) => {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'yyyy-MM-dd')}</time>;
};

export default Date;
