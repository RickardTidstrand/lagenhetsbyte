import candidateConstants from '../constants/candidateConstants'

function findTrump(){

}
function findTrumpAndObama(array){

}
function isObama(candidate){
  return candidate.candidateName === candidateConstants.OBAMA
}
function isTrump(candidate){
  return candidate.candidateName === candidateConstants.TRUMP
}
function removeFromListByName(candidate, array){
  let holder = array;
  holder.forEach((can, i)=>{
    if ( can.candidateName === candidate.candidateName) {
      holder.splice(i, 1);
    }
  });
   return holder;
}
function containsTrumpOrObama(array){
  let obamaOrTrump = false;
  array.forEach((candidate)=>{
    if (isTrump(candidate) || isObama(candidate)) {
      obamaOrTrump = true
    }
  });
  return obamaOrTrump
}
export {
  findTrump,
  findTrumpAndObama,
  isObama,
  isTrump,
  removeFromListByName,
  containsTrumpOrObama
}
