import apiConstants from '../constants/apiConstants';

async function candidatesApi(){
  let res = await fetch(apiConstants.CANDIDATES_URL);
  let data = await res.json();
  return data;
}
export default candidatesApi;
