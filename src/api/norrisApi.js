async function getNorrisJokes(){
  let res = await fetch("http://www.icndb.com/api/");
  console.log(res);
  return res;
}
export default getNorrisJokes;
