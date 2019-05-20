import candidateConstants from '../constants/candidateConstants';

function isObama(candidate){
  return candidate.candidateName === candidateConstants.OBAMA;
}
function isTrump(candidate){
  return candidate.candidateName === candidateConstants.TRUMP;
}
function removeFromListByName(candidate, candidateArray){
  let holder = candidateArray;
  for (let i = 0; i < holder.length; i++) {
    if (holder[i].candidateName === candidate.candidateName) {
      holder.splice(i, 1);
      break;
    }
  }
  return holder;
}
function containsTrumpOrObama(candidateArray){
  return candidateArray.some(candidate => isTrump(candidate) || isObama(candidate));
}
function containsTrumpAndObama(candidateArray){
  let obama = false;
  let obamaIndex = null;
  let trump = false;
  let trumpIndex = null;
  candidateArray.forEach((candidate, i)=>{
    if (isTrump(candidate)) {
      trump = true;
      trumpIndex = i;
    }else if (isObama(candidate)) {
      obama = true;
      obamaIndex = i;
    }
  });
  return obama && trump? {obamaIndex: obamaIndex, trumpIndex: trumpIndex}:false;
}
function placeTrumpAfterObama(obamaIndex, trumpIndex, candidateArray){
  let holder = candidateArray;
  let holdObama;
  let holdTrump;
  let candidateHolder;
  const trumpBeforeObama = obamaIndex>trumpIndex; //If trump is before before Obama
  const trumpOneIndexBeforeObama = obamaIndex-1 === trumpIndex; //If trump is 1 index before obamaIndex
  //And if Obama's index is greater than 1, trump and the candidate behihnd obama must swap places
  const candidateBehindObama = obamaIndex>=1 && candidateArray[obamaIndex+1]

  if (trumpBeforeObama) {
    if (candidateBehindObama) {
      candidateHolder = candidateArray[obamaIndex+1];
      holdTrump = candidateArray[trumpIndex];
      holder[trumpIndex] = candidateHolder;
      holder[obamaIndex+1] = holdTrump;
      return holder;
    }else if(trumpOneIndexBeforeObama) {
      holdObama = candidateArray[obamaIndex];
      holdTrump = candidateArray[trumpIndex];
      holder[obamaIndex] = holdTrump;
      holder[trumpIndex] = holdObama;
      return holder;
    }else{
      //If Oabama is the last candidate, remove trump and push him to the end of candidateArray
      holdTrump = candidateArray[trumpIndex];
      holder.splice(trumpIndex,1);
      holder.push(holdTrump);
      return holder;
    }
  }
  return candidateArray;
}
export {
  isObama,
  isTrump,
  removeFromListByName,
  containsTrumpOrObama,
  containsTrumpAndObama,
  placeTrumpAfterObama
}
