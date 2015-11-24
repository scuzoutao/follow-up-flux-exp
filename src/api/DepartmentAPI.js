/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import { fetchJSON, postJSON } from '../utils/APIUtils';

export function getDepartment(id, url = `/departments/${id}`) {
  return fetchJSON(url);
}

export function getDoctors(id, url = `/departments/${id}/users`) {
  return fetchJSON(url);
}

export function saveDoctors(id, data, url = `/departments/${id}/users`) {
  return fetchJSON(url, 'POST', data);
}

export function removeDoctors(id, data, url = `/departments/${id}/users`) {
  return fetchJSON(url, 'DELETE', data);
}
