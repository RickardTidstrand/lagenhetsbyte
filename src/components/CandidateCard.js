import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import Checkbox from '@material-ui/core/Checkbox'
import Grow from '@material-ui/core/Grow';
import '../css/candidateCard.css'

/*CandidateCard()
* Displays the candidate card. Each card has its own state for when it's checked
* or not
*/
function CandidateCard ({candidateImg, candidateName, setCandidateStatus, id, disableCheckbox}){
  const [isChecked, setChecked] = useState(false);

  function handleChange(event){
    let value = event.target.checked;
    setChecked(value);
    setCandidateStatus({candidateName, id, value, candidateImg});
  }

  return(
    <Grow
      in={true}
      style={{ transformOrigin: '0 0 0' }}
      {... { timeout: id*500 }}
    >
      <Card className="candidate-card" >
        <div style={{backgroundImage: `url("${candidateImg}")`}} className="candidate-image"/>
        <p>{candidateName}</p>
        {!disableCheckbox&&
          <Checkbox
            onChange={(e)=>{handleChange(e)}}
            checked={isChecked}
          />
        }
      </Card>
    </Grow>
  )
}

export default CandidateCard
