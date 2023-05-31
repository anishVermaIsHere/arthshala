import React from 'react'
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from '@mui/icons-material/Circle';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import CheckIcon from '@mui/icons-material/Check';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material/";

const ColorPicker = ({color}) => {
  return (
    
        <FormControlLabel
          value="female"
          control={
            <Radio
            value={color}
              style={{ color: color, height:'32px',width:'32px' }}
              icon={<CircleIcon style={{height:'32px',width:'32px' }} />}
              checkedIcon={
              <CheckSharpIcon 
                style={{
                    color:'#000',
                    margin:'3px',
                    borderRadius:'50%',
                    background:color 
                }}/>
            }
            />
          }
        />
     
  )
}

export default ColorPicker