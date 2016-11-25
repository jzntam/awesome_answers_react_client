import React from 'react';
import $ from 'jquery';

function QuestionList(props) {
  return (
    <ul className='QuestionList'>
      {
        props.questions.map(function(question, index) {
          return (
            <li key={ question.id } >{ question.title }</li>
          )
        })
      }
    </ul>
  )
}

QuestionList.defaultProps = {
  questions: []
}

export default QuestionList;
