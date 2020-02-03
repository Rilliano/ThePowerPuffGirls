const baseUrl = 'http://api.tvmaze.com/'
const showId = 6771

const apiEndpoints = {
  getMainInfo: { url: `${baseUrl}shows/${showId}` },
  getEpisodesList: { url: `${baseUrl}shows/${showId}/episodes` },
  getSingleEpisodes: { url: `${baseUrl}episodes` }
}

export default apiEndpoints
