import React from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import RemoveIcon from '@material-ui/icons/Remove'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { Field, FieldArray } from 'formik'
import { TextField } from 'formik-material-ui'
import { alphabet } from '../../../../../utils/alphabet'

const OptionsArrayHelper = ({ arrayHelpers, values, questionIndex}) => {
  return (
    <>
      <Grid container spacing={1} >
        {
          values.questions[questionIndex].content.options.map((option, index) => (
            <Grid item>
              <Grid container key={index} alignItems='center' direction='row'>
                <Grid item>{alphabet[index]}</Grid>
                <Grid item>
                  <Field
                    component={TextField}
                    name={`questions.${questionIndex}.content.options.${index}`}
                  />
                </Grid>
              </Grid>
            </Grid>
          ))
        }
      </Grid>
      <Button
        onClick={() => arrayHelpers.push('')}
      >
        添加选项
      </Button>
    </>
  )
}

export default OptionsArrayHelper
