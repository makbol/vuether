var data = {
  selection: null,
  currently: null,
  daily:     null,
  hourly:    null,
  cities:    [
    { zip: 94102, displayName: 'San Francisco, CA' },
    { zip: 97232, displayName: 'Portland, OR' },
    { zip: 85338, displayName: 'Phoenix, AZ' }
  ]
};

function updateWeather(d) {
  data.currently = d.currently;
  data.daily = d.daily;
  data.hourly = d.hourly;
}

export default { data, updateWeather }
