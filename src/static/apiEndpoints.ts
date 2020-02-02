const baseUrl = 'http://api.tvmaze.com/'
const showId = 6771

const apiEndpoints = {
  getMainInfo: { url: `${baseUrl}shows/${showId}` }
}

export default apiEndpoints
