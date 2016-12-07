import React from 'react';

function QuestionList(props) {

  const forwardQuestion = function(id) {
    return function(event) {
      props.onClick(id)
    }
  }

  return (
    <ul className='QuestionList list-group'>
      {
        props.questions.map(function(question, index) {
          return (
            <li onClick={ forwardQuestion(question.id) }
                key={ question.id }
                className='list-group-item'>
              { question.title }
            </li>
          )
        })
      }
    </ul>
  )
}

QuestionList.defaultProps = {
  questions: [],
  onClick: function() {}
}

export default QuestionList;
