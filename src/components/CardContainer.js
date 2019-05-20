import React, {useState, useEffect} from 'react';
import DoneIcon from '@material-ui/icons/Done';
import Fab from '@material-ui/core/Fab';
import CandidateCard from './CandidateCard';
import SummationCard from './SummationCard';
import getCandidatesData from '../api/candidatesApi';
import {shuffleArray} from '../util/functions';
import {removeFromListByName,
        containsTrumpOrObama,
        containsTrumpAndObama,
        placeTrumpAfterObama} from '../util/obamaAndTrumpFunctions';
import '../css/cardContainer.css';

/*CardContainer()
* Contains all the candidates cards and acts as a controller for handeling the summation
* of the candidates cards
*/
function CardContainer(){
  const [candidates, setCandidates] = useState([]);
  const [chosenCandidates, setChosenCandidates] = useState([]);
  const [summationVisible, setSummationVisible] = useState(false);
  const [onlyTrumpOrObama, setOnlyTrumpOrObama] = useState(false)

  //This funktion reaganges the chosen candidates to be sorted correctly before renderd in summation
  function handleSummationOpen(){
    const obamaAndTrump = containsTrumpAndObama(chosenCandidates);
    const oneOfObamaOrTrump = chosenCandidates.length === 1 && containsTrumpOrObama(chosenCandidates);
    let holder;
    //If only Obama or Trump is chosen, display none in summation
    if(oneOfObamaOrTrump) {
      setOnlyTrumpOrObama(true);
    }else if(obamaAndTrump) {
      holder = placeTrumpAfterObama(obamaAndTrump.obamaIndex, obamaAndTrump.trumpIndex, chosenCandidates);
      setChosenCandidates(holder);
      setOnlyTrumpOrObama(false);
    }
    else{
      setOnlyTrumpOrObama(false);
    }
    setSummationVisible(true);
  }
  function handleSummationClose(){
    setSummationVisible(false);
  }

  useEffect(()=>{
    let cardHolder;
    function setCandidateStatus(candidate){
      let holder = chosenCandidates;

      //Add candidate to list or remove from list
      if (candidate.value) {
        holder.push(candidate);
        setChosenCandidates(holder);
      }else{
        holder = removeFromListByName(candidate, holder);
        setChosenCandidates(holder);
      }
    }
    getCandidatesData().then((candidates)=>{
      //Shuffle the array
      shuffleArray(candidates);
      cardHolder = candidates.map((candidate, i)=>(
        <CandidateCard
          key={i}
          id={i}
          candidateImg={candidate.imageUrl}
          candidateName={candidate.name}
          setCandidateStatus={(id)=>{setCandidateStatus(id)}}
        />
      ));
      setCandidates(cardHolder);
    })
  }, [chosenCandidates]);

  return(
    <div className="card-container">
      {candidates}
      <Fab
        className="submit-button"
        color="secondary"
        size="large"
        onClick={()=>{handleSummationOpen()}}
      >
        <DoneIcon/>
      </Fab>
      <SummationCard
        visible={summationVisible}
        handleClose={()=>{handleSummationClose()}}
        candidates={chosenCandidates}
        onlyTrumpOrObama={onlyTrumpOrObama}
      />
    </div>
  )
}
export default CardContainer
