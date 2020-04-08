import dayjs from 'dayjs';
import 'dayjs/locale/id';

dayjs.locale('id');

const timeIDShow = time => {
  return dayjs(time).format('dddd, DD MMMM YYYY');
};

export default dayjs;

export { timeIDShow };
