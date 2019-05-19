import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import norrisApi from '../api/norrisApi'

function NorrisSnackbar(){
  const [joke, setJoke] = useState("")
  const [snack, setSnack] = useState(false)
  const action = (
    <Button
      color="secondary"
      size="small"
      onClick={()=>closeSnack()}
    >
      Close
    </Button>
  );

  useEffect(()=>{
    norrisApi().then((response)=>{
      setJoke(response.value.joke);
      setSnack(true);
    })
  }, [])

  function closeSnack(){
    setSnack(false)
  }

  return(
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={snack}
        message={<span>{joke}</span>}
        action={action} >
      </Snackbar>
  )
}
export default NorrisSnackbar
