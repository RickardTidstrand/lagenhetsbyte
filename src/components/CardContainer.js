import React from 'react'

import CandidateCard from './CandidateCard'

import getNorrisJokes from '../api/norrisApi'
import getCandidatesData from '../api/candidatesApi'
import '../css/cardContainer.css'

class CardContainer extends React.Component{

  state = {
    candidates: [],
    chosenCandidates: []
  }

  handleCandidate(candidate){
    console.log(candidate.e.target.value);
  }

  componentDidMount(){
    let cardHolder;
    getCandidatesData().then((candidates)=>{
      cardHolder = candidates.map((candidate, i)=>(
        <CandidateCard
          key={i}
          id={i}
          candidateImg={candidate.imageUrl}
          candidateName={candidate.name}
          handleCandidate={(id)=>{this.handleCandidate(id)}}
        />
      ));
      this.setState({
        candidates: cardHolder
      });
    })
  }
  render(){
    const { candidates } = this.state
    return(
      <div className="card-container">
        {candidates}
      </div>
    )
  }
}
export default CardContainer
