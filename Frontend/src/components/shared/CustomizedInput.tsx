import { TextField } from '@mui/material';
import React from 'react'

type Props = {
    name: string;
    type: string;
    label: string;
}

function CustomizedInput(props: Props) {
  return (
    <TextField 
    margin='normal'
    InputLabelProps={{style:{color:"white"}}}
    name={props.name} label={props.label} type={props.type}
    InputProps={{style:{width:"400px", borderRadius:20, fontSize:20, color:"white"}}}
     />
  )
}

export default CustomizedInput