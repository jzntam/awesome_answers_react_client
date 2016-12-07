import React from 'react';

function QuestionForm(props) {
  const handleSubmit = function(event) {
    event.preventDefault()

    const formElement = event.target

    const question = {
      title: formElement.querySelector('[name=title]').value,
      body:  formElement.querySelector('[name=body]').value
    }

    props.onSubmit(question)
  }

  return (
    <div className='col-md-12 question-form-container'>
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Ask a Question!</h3>
        </div>
        <div className='panel-body'>
          <form onSubmit={ handleSubmit }>
            <div className='form-group'>
              <input type='title' name='title' id='title' className='form-control input-sm' placeholder='Question Title'/>
            </div>
            <div className='form-group'>
              <textarea type='body' name='body' id='body' className='form-control input-sm' placeholder="What's you're question" rows='3'/>
            </div>
            <input type='submit' value='Submit' className='btn btn-info btn-block'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default QuestionForm;
