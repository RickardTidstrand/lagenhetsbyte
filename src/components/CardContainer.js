import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import CandidateCard from './CandidateCard'
import SummationCard from './SummationCard'

import getNorrisJokes from '../api/norrisApi'
import getCandidatesData from '../api/candidatesApi'
import '../css/cardContainer.css'

class CardContainer extends React.Component{

  state = {
    candidates: [],
    chosenCandidates: [],
    summationVisible: false
  }

  handleSummationOpen(){
    this.setState({
      summationVisible: true
    })
  }
  handleSummationClose(){
    this.setState({
      summationVisible: false
    })
  }

  handleCandidate(candidate){
    const {chosenCandidates} = this.state
    let holder = chosenCandidates
    holder.push(candidate)

    //Add candidate to list or remove from list
    if (candidate.value) {
      this.setState({
        chosenCandidates: holder
      })
    }else{
      let index = holder.indexOf(5);
      if (index > -1) {
        holder.splice(index, 1);
      }
      console.log(holder);
      this.setState({
        chosenCandidates: holder
      })
    }
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
    const { candidates, chosenCandidates, summationVisible } = this.state
    return(
      <div className="card-container">
        {candidates}
        {chosenCandidates.length?
          <Fab
            className="submit-button"
            color="primary"
            size="large"
            onClick={this.handleSummationOpen.bind(this)}
          >
            <AddIcon/>
          </Fab>:
          null
        }
        <SummationCard
          visible={summationVisible}
          handleClose={this.handleSummationClose.bind(this)}
          candidates={chosenCandidates}
        />
      </div>
    )
  }
}
export default CardContainer
