import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import Checkbox from '@material-ui/core/Checkbox'
import Grow from '@material-ui/core/Grow';

import '../css/candidateCard.css'

function CandidateCard ({candidateImg, candidateName, handleCandidate, id, disableCheckbox}){
  const [state, setState] = useState(false);

  function handleChange(event){
    console.log(event.target.checked);
    let value = true//!event.target.checked
    setState(value);
    handleCandidate({candidateName, id, value, candidateImg});
  }

  return(
    <Grow
      in={true}
      style={{ transformOrigin: '0 0 0' }}
      {... { timeout: id*500 }}
    >
      <Card className="candidate-card" >
        <img src={candidateImg} alt="Candidate"/>
        <p>{candidateName}</p>
        {!disableCheckbox&&
          <Checkbox
            onChange={(e)=>{handleChange(e)}}
            checked={state}
          />
        }
      </Card>
    </Grow>)
}

export default CandidateCard
