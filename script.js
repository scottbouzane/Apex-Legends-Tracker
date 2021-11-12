
const token = '141198cd-46aa-4403-88f7-130222a69b6d';
const host = 'https://public-api.tracker.gg/';


module.exports = {
  fetchApexUser(username, platform) {
    if (!username) {
      return {};
    }
    return fetch(`${host}apex/v1/standard/profile/${platform}/${username}`, {
      method: 'GET',
      headers: {
        'TRN-Api-Key': token
      }
    })
      .then(res => {
        return res.json();
      })
      .then((json) => {
        return json.data;
      })
      .catch((error) => {
        return {};
      });
  },
  // GET https://public-api.tracker.gg/v2/apex/standard/search
  fetchSearchApex(username, platform) {
    if (!username) {
      return {};
    }
    return fetch(`${host}/v2/apex/standard/search?platform=${platform}&query=${username}`, {
      method: 'GET',
      headers: {
        'TRN-Api-Key': token
      }
    }).then(res => {
      return res.json();
    })
      .then((json) => {
        return json.data;
      })
      .catch((error) => {
        return {};
      });
  }
};

button.addEventListener("click", getData)