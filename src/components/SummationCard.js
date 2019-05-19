import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CandidateCard from './CandidateCard'

//Displays all the selected candidates
const SummationCard = ({visible, candidates, handleClose, onlyTrumpOrObama})=>{
  let candidatesList = []
  if (!onlyTrumpOrObama) {
    candidatesList = candidates.map((candidate, i)=>(
      <CandidateCard
        key={i}
        id={i}
        candidateImg={candidate.candidateImg}
        candidateName={candidate.candidateName}
        disableCheckbox
      />
    ))
  }

  return(
    <Dialog
      open={visible}
      onClose={handleClose}
    >
      <DialogTitle id="alert-dialog-title">{"Summation"}</DialogTitle>
      <DialogContent>
        {candidatesList}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
export default SummationCard
