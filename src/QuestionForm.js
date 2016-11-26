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

  const onSubmit = function(question) {}

  return (
    <form onSubmit={ handleSubmit } className='QuestionForm'>
      <input type='text' name='title' />
      <textarea type='text' name='body' />
      <input type='submit' value='Submit' />
    </form>
  )
}

QuestionForm.defaultProps = {
  onSubmit: function() {}
}

export default QuestionForm;
