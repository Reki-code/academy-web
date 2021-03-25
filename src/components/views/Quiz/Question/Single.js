import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { alphabet } from '../../../../utils/alphabet'

const Single = ({ question, answer, setAnswer }) => {
  const [value, setValue] = useState(answer?.single ?? 0)
  const options = question.content.options
  const handleChange = ({ target: { value }}) => {
    setAnswer({ single: value })
    setValue(value)
  }

  return (
    <FormControl>
      <RadioGroup value={value} onChange={handleChange}>
        {
          options.map((option, index) => (
            <FormControlLabel key={`${index}${question.stem}`}
              value={alphabet[index]}
              control={<Radio color='primary' />}
              label={option}
            />)
          )
        }
      </RadioGroup>
    </FormControl>
  )
}

export default Single
