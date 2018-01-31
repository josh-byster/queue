import { connect } from 'react-redux'
import {
  fetchQuestions,
  deleteQuestion,
  updateQuestionAnswering,
  finishAnsweringQuestion,
} from '../actions/question'

import QuestionList from '../components/QuestionList'

function mapStateToProps(state, { queueId }) {
  return {
    queue: state.queues.queues[queueId],
    questions: state.questions.questions,
  }
}

const mapDispatchToProps = (dispatch, { queueId }) => ({
  fetchQuestions: () => dispatch(fetchQuestions(queueId)),
  deleteQuestion: questionId => dispatch(deleteQuestion(queueId, questionId)),
  // eslint-disable-next-line max-len
  updateQuestionBeingAnswered: (questionId, beingAnswered) => dispatch(updateQuestionAnswering(questionId, beingAnswered)),
  // eslint-disable-next-line max-len
  finishAnsweringQuestion: (questionId, feedback) => dispatch(finishAnsweringQuestion(queueId, questionId, feedback)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
