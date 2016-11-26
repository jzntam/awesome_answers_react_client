import React from 'react';

function QuestionDetail(props) {
  const q = props.question

  return (
    <div className='QuestionDetail'>
      <div className='BackButton' onClick={ props.onBackClick }>
        BACK
      </div>

      <h1>{ q.title }</h1>
      <p>{ q.body }</p>

      <div>
        <span>Created At</span>{ q.created_at }
      </div>
      <div>
        <span>View Count</span>{ q.view_count }
      </div>
      <div>
        <span>Created By</span>{ q.user.first_name }
      </div>
    </div>
  )
}

export default QuestionDetail;
