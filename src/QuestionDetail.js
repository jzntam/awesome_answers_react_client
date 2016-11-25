import React from 'react';

function QuestionDetail(props) {

  const q = props.question
  console.log(q)

  return (
    <div className='QuestionDetail'>
      <div>
        <span>Title</span>{q.title}
      </div>
      <div>
        <span>Body</span>{q.body}
      </div>
      <div>
        <span>Created At</span>{q.created_at}
      </div>
      <div>
        <span>View Count</span>{q.view_count}
      </div>
      <div>
        <span>Created By</span>{q.user.first_name}
      </div>
    </div>
  )
}

export default QuestionDetail;
