import apiConstants from '../constants/apiConstants';

async function getNorrisJokes(){
  let res = await fetch(apiConstants.NORRIS_URL);
  let data = await res.json();
  return data;
}
export default getNorrisJokes;
