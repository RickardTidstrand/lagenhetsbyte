import candidateConstants from '../constants/candidateConstants';

function isObama(candidate){
  return candidate.candidateName === candidateConstants.OBAMA;
}
function isTrump(candidate){
  return candidate.candidateName === candidateConstants.TRUMP;
}
function removeFromListByName(candidate, array){
  let holder = array;
  holder.forEach((can, i)=>{
    if (can.candidateName === candidate.candidateName) {
      holder.splice(i, 1);
    }
  });
   return holder;
}
function containsTrumpOrObama(array){
  let obamaOrTrump = false;
  array.forEach((candidate)=>{
    if (isTrump(candidate) || isObama(candidate)) {
      obamaOrTrump = true;
    }
  });
  return obamaOrTrump;
}
function containsTrumpAndObama(array){
  let obama = false;
  let obamaIndex = null;
  let trump = false;
  let trumpIndex = null;
  array.forEach((candidate, i)=>{
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
//Taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array){
  let currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array
}
function placeTrumpAfterObama(obamaIndex, trumpIndex, array){
  let holder = array;
  let holdObama;
  let holdTrump;
  let candidateHolder;
  //If trump is before before Obama
  if (obamaIndex>trumpIndex) {
    //And if Obama's index is greater than 1, trump and the candidate behihnd obama must swap places
    if (obamaIndex>=1 && array[obamaIndex+1]) {
      candidateHolder = array[obamaIndex+1];
      holdTrump = array[trumpIndex];
      holder[trumpIndex] = candidateHolder;
      holder[obamaIndex+1] = holdTrump;
      return holder;
    }else if(obamaIndex-1 === trumpIndex) {
      //If trump is 1 index before obamaIndex
      holdObama = array[obamaIndex];
      holdTrump = array[trumpIndex];
      holder[obamaIndex] = holdTrump;
      holder[trumpIndex] = holdObama;
      return holder;
    }else{
      //If Oabama is the last candidate, remove trump and push him to the end of array
      holdTrump = array[trumpIndex];
      holder.splice(trumpIndex,1);
      holder.push(holdTrump);
      return holder;
    }

  }else{
    return array;
  }
}

export {
  isObama,
  isTrump,
  removeFromListByName,
  containsTrumpOrObama,
  shuffleArray,
  containsTrumpAndObama,
  placeTrumpAfterObama
}
