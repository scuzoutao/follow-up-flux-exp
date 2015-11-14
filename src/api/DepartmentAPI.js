/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import { fetchJSON } from '../utils/APIUtils';

export function getDepartment(id, url = `/departments/${id}`) {
  return fetchJSON(url);
}
