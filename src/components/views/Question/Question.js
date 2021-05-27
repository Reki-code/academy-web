import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import StarIcon from '@material-ui/icons/Star'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import RateReviewIcon from '@material-ui/icons/RateReview'
import Avatar from '@material-ui/core/Avatar'
import { useQuery, useMutation } from '@apollo/client'
import { QUESTION, ADD_ANSWER } from '../../../graphql/question'
import { FAVORITE_QUESTION, ALL_FAVORITES } from '../../../graphql/favorite'
import timeago from '../../../utils/timeago'
import AnswerList from './AnswerList'
import MUIRichTextEditor from 'mui-rte'
import InputDialog from './InputDialog'
import { useSnackbar } from 'notistack'
import Loading from '../../common/Loading'
import Error from '../../common/Error'

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    paddingLeft: 16,
  },
  stats: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'Center',
  },
}))

const Question = () => {
  const classes = useStyles()
  const { questionId } = useParams()
  const [dialog, setDialog] = useState({
    open: false,
    title: '',
    content: '',
    handleSend: (data) => { console.log('Send', data) },
  })
  const [addAnswer] = useMutation(ADD_ANSWER)
  const handleAnswer = () => {
    setDialog({
      ...dialog,
      open: true,
      title: '回答',
      handleSend: (data) => {
        addAnswer({
          variables: {
            questionId,
            answer: data,
          },
          refetchQueries: [{ query: QUESTION, variables: { questionId } }],
        })
      }
    })
  }
  const questionInfo = useQuery(QUESTION, {
    variables: { questionId }
  })
  const [favorite] = useMutation(FAVORITE_QUESTION)
  const { enqueueSnackbar } = useSnackbar()

  if (questionInfo.loading) return <Loading />
  if (questionInfo.error) return <Error error={questionInfo.error} />

  const myId = questionInfo.data.me.id
  const question = questionInfo.data.post
  const answers = questionInfo.data.post.answers

  const handleFavorite = () => {
    if (question.isFavorite) {
      enqueueSnackbar('已经在收藏夹里了', {
        variant: 'info'
      })
      return
    }
    favorite({
      variables: {
        id: questionId,
      },
      refetchQueries: [{ query: ALL_FAVORITES }],
    })
      .then(() => {
        enqueueSnackbar('收藏成功', {
          variant: 'success'
        })
      })
      .catch(error => {
        enqueueSnackbar('收藏失败', {
          variant: 'error'
        })
        console.error({error})
      })
  }

  return (
    <Container>
      <Typography gutterBottom variant='h3' component='h1'>
        {question.title}
      </Typography>
      <div className={classes.row}>
        <span className={classes.flex}>
          <Avatar src={question.author.avatar} component='span' />
          <Typography className={classes.name} color='textPrimary' component='span' >
            {question.author.displayName}
          </Typography>
        </span>
        <Typography color='textSecondary' component='span' >{timeago(question.createdAt)}</Typography>
      </div>
      <Divider />
      <div className={classes.question}>
        {
          (() => {
            const content = question.content
            if (content.startsWith('{')) {
              return (
                <MUIRichTextEditor
                  readOnly
                  inheritFontSize
                  controls={[]}
                  defaultValue={content}
                />
              )
            }
            return <div>
              {question.content}
            </div>
          })()
        }
        <div className={classes.row}>
          <div className={classes.stats}>
            <Button>
              <ThumbUpIcon fontSize='small' />
            </Button>
            {question.vote}
            <Button>
              <ThumbDownIcon fontSize='small' />
            </Button>
            <Button
              onClick={handleAnswer}
            >
              <RateReviewIcon fontSize='small' />
              回答
            </Button>
          </div>
          <Button
            onClick={handleFavorite}
          >
            <StarIcon fontSize='small' />
            收藏
          </Button>
        </div>
      </div>
      <Divider />
      <AnswerList answers={answers} />
      <InputDialog
        dialog={dialog}
        setDialog={setDialog}
      />
    </Container>
  )
}

export default Question
