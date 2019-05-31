import axios from 'axios';

const KEY = 'AIzaSyB2NDyyW3qdWR_UPmMrB9wRpPHQt7kE2Cc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  },
})
