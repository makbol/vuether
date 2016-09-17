import Vue from 'vue';

const base     = 'http://vuether-api.herokuapp.com';
var inProgress = false;
var promise    = null;

export default {
  getWeatherByZipcode
}

function getWeatherUrl(zipcode) {
  return `${base}/weather/${zipcode}`;
}

function makeQuery(url) {

  if(inProgress === true) {
    return promise;
  }

  inProgress = true;

  promise = Vue.http.get(url)
    .then(response => {
      inProgress = false;
      return response;
    })
    .catch(err => {
      inProgress = false;

    });

  return promise;
}

function getWeatherByZipcode(zipcode) {
  return makeQuery(getWeatherUrl(zipcode));
}


