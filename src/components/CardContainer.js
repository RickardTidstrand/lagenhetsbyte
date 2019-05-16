import React from 'react'

import CandidateCard from './CandidateCard'

import getNorrisJokes from '../api/norrisApi'
import getCandidatesData from '../api/candidatesApi'
import '../css/cardContainer.css'

class CardContainer extends React.Component{

  componentDidMount(){
    getNorrisJokes();
    getCandidatesData();
  }

  render(){
    return(
      <div className="card-container">
        <CandidateCard/>
      </div>
    )
  }
}
export default CardContainer
