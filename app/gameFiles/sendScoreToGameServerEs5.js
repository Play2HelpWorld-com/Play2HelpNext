function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function getBackendBaseUrl() {
  var backendFromQuery = getQueryParam('backend');

  if (backendFromQuery) {
    return backendFromQuery.replace(/\/+$/, '');
  }

  return 'http://127.0.0.1:8000';
}

function getAccessToken() {
  var tokenFromQuery = getQueryParam('to');

  if (tokenFromQuery && tokenFromQuery !== 'null') {
    return tokenFromQuery;
  }

  return window.localStorage.getItem('accessToken');
}

function sendScore(score, gameName) {
  var formattedScore = score;
  if (score !== null && score !== undefined) {
    var n = Number(score);
    if (isFinite(n)) {
      formattedScore = parseFloat(n.toFixed(4));
    } else {
      formattedScore = n; 
    }
  }

  var accessToken = getAccessToken();
  if (!accessToken) {
    console.warn('No access token found. Score will not be saved.');
    return;
  }

  var tokens = parseFloat((Number(formattedScore) * 0.0002).toFixed(4));
  var backendBaseUrl = getBackendBaseUrl();

  fetch(backendBaseUrl + '/api/games/submitScore/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
    body: JSON.stringify({
      score: formattedScore,
      game: gameName,
      tokens: tokens,
    }),
  })
    .then(function (response) {
      if (!response.ok) {
        console.error('Failed to send score:', response.status, response.statusText);
        return;
      }

      console.log('Score sent successfully:', response.status);
    })
    .catch(function (error) {
      console.error('Failed to send score:', error);
    });
}
