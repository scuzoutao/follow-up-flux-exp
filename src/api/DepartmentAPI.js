/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import { fetchJSON } from '../utils/APIUtils';

export function getDepartment(id, url = `/departments/${id}`) {
  return fetchJSON(url);
}

export function getDoctors(id, url = `/departments/${id}/edit`) {
  return fetchJSON(url);
}
