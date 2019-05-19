import React, {useState, useEffect} from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import CandidateCard from './CandidateCard'
import SummationCard from './SummationCard'

import getCandidatesData from '../api/candidatesApi'
import '../css/cardContainer.css'

function CardContainer(){
const [candidates, setCandidates] = useState([])
const [chosenCandidates, setChosenCandidates] = useState([])
const [summationVisible, setSummationVisible] = useState(false)

  function handleSummationOpen(){
    setSummationVisible(true)
  }
  function handleSummationClose(){
    setSummationVisible(false)
  }

  function handleCandidate(candidate){
    let holder = chosenCandidates
    holder.push(candidate)

    //Add candidate to list or remove from list
    if (candidate.value) {
      setChosenCandidates(holder)
    }else{
      let index = holder.indexOf(5);
      if (index > -1) {
        holder.splice(index, 1);
      }
      setChosenCandidates(holder)
    }
  }

  useEffect(()=>{
    let cardHolder;
    getCandidatesData().then((candidates)=>{
      cardHolder = candidates.map((candidate, i)=>(
        <CandidateCard
          key={i}
          id={i}
          candidateImg={candidate.imageUrl}
          candidateName={candidate.name}
          handleCandidate={(id)=>{handleCandidate(id)}}
        />
      ));
      setCandidates(cardHolder)
    })
  }, [])

  return(
    <div className="card-container">
      {candidates}
      <Fab
        className="submit-button"
        color="secondary"
        size="large"
        onClick={()=>{handleSummationOpen()}}
      >
        <AddIcon/>
      </Fab>
      <SummationCard
        visible={summationVisible}
        handleClose={()=>{handleSummationClose()}}
        candidates={chosenCandidates}
      />
    </div>
  )
}
export default CardContainer
