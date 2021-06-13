
import React from 'react';
import TextField from '@material-ui/core/TextField';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { makeStyles } from '@material-ui/core/styles';


 const classes = makeStyles(() => ({
   quadrado: {
     backgroundColor: 'black',
     width: 100,
     height: 100,

   },

  
 }));


function  App() {
  const styles = classes ()

  return(
    
    <div className="App">
     <div className={styles.quadrado}></div>
       <TextField id="filled-basic" label="Email" variant="filled" />
       
   
       
      
   </div>
  );
}

export default App;
