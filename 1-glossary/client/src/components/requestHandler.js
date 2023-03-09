import axios from 'axios';

const getTerms = () => {
  return axios.get('/terms');
}

const postTerm = (term) => {
  return axios.post('/terms', term);
}

const putTerm = (term) => {
  return axios.put(`/terms/${term._id}`, term)
}

export {getTerms, postTerm, putTerm};