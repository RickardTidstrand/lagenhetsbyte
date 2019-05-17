import React from 'react'
import Card from '@material-ui/core/Card'
import Checkbox from '@material-ui/core/Checkbox'
import Grow from '@material-ui/core/Grow';

import '../css/candidateCard.css'

const CandidateCard = ({candidateImg, candidateName, handleCandidate, id})=>{

  return(
    <Grow
      in={true}
      style={{ transformOrigin: '0 0 0' }}
      {... { timeout: id*500 }}
    >
      <Card className="candidate-card" >
        <img src={candidateImg} alt="Candidate"/>
        <p>{candidateName}</p>
        <Checkbox onChange={(e)=>{handleCandidate({candidateName, id, e})}}
          value={"false"}
        />
      </Card>
</Grow>)
}

export default CandidateCard
