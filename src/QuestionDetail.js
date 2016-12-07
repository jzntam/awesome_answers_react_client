import React from 'react';

function QuestionDetail(props) {
  const question = props.question

  return (
    <div className='QuestionDetail col-md-12 question-form-container'>
      <a className='btn btn-warning' onClick={ props.onBackClick }>
        Back
      </a>
      <hr />
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>{ question.title }</h3>
        </div>
        <div className='panel-body'>
          <p>{ question.body }</p>

          <div>
            <small><span>Views: </span>{ question.view_count }</small>
          </div>
          <small>
            <em>
              <span>Created By: </span>
              { question.user } at { question.created_on }
            </em>
          </small>
        </div>
      </div>
    </div>
  )
}

export default QuestionDetail;
