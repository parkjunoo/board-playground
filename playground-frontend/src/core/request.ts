import { api } from '../core/api';
import Constant from '../core/constant';

const getFirstData = () => {
  return api.service.get(Constant.BASE_URL + 'item');
};

export { getFirstData };
