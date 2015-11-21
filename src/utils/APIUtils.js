/**
 * Follow-up System Web Frontend (https://github.com/mdluo/follow-up-flux)
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import 'whatwg-fetch';

const API_ROOT = 'http://127.0.0.1:3000';
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export function fetchJSON(url) {
  if (url.indexOf(API_ROOT) === -1) {
    url = API_ROOT + url;
  }
  return fetch(url, { headers }).then(response =>
    response.json().then(json => {
      return json;
    })
  );
}

export function postJSON(url, data) {
  if (url.indexOf(API_ROOT) === -1) {
    url = API_ROOT + url;
  }
  return fetch(url, {
      method: 'post',
      headers: headers,
      body: JSON.stringify(data)
    }).then(response =>
      response.json().then(json => {
        return json;
    })
  );
}
