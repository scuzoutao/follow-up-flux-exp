/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import 'whatwg-fetch';

const API_ROOT = 'http://127.0.0.1:3000';
const HTTP_HEADERS = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

export function fetchJSON(url) {
  if (url.indexOf(API_ROOT) === -1) {
    url = API_ROOT + url;
  }
  return fetch(url, HTTP_HEADERS).then(response =>
    response.json().then(json => {
      return json;
    })
  );
}
