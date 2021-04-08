import React from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import RemoveIcon from '@material-ui/icons/Remove'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { Field, FieldArray } from 'formik'
import { TextField, Select } from 'formik-material-ui'
import OptionsArrayHelper from './OptionsArrayHelper'
import MenuItem from '@material-ui/core/MenuItem'
import { alphabet } from '../../../../../utils/alphabet'

const QuestionArrayHelper = ({arrayHelpers, values}) => {
  return (
    <>
      {
        values.questions.map((friend, index) => (
          <div key={index}>
            <Field
              component={TextField}
              name={`questions.${index}.content.stem`}
              label='题干'
            />
            <IconButton
              onClick={() => arrayHelpers.remove(index)}
            >
              <RemoveIcon />
            </IconButton>

            <FieldArray
              name={`questions.${index}.content.options`}
              render={arrayHelpers => (
                <OptionsArrayHelper
                  questionIndex={index}
                  arrayHelpers={arrayHelpers}
                  values={values}
                />
              )}
            />

            <Field
              component={Select}
              name={`questions.${index}.answer.single`}
            >
              {
                values.questions[index].content.options.map((option, index) => (
                  <MenuItem value={alphabet[index] ?? 0}>{alphabet[index]}</MenuItem>
                ))
              }
            </Field>
            <Divider />
          </div>
        ))
      }
      <Button
        color='primary'
        fullWidth
        onClick={() => arrayHelpers.push({
          type: 'single',
          content: {
            stem: '',
            options: []
          }
        })}
      >
        添加问题
      </Button>
    </>
  )
}

export default QuestionArrayHelper
