import React, { Component } from 'react';
import $ from 'jquery';

import QuestionList   from './QuestionList'
import QuestionDetail from './QuestionDetail'
import QuestionForm   from './QuestionForm'

const BASE_URL = 'https://jason-answers-api.herokuapp.com'
const API_KEY  = process.env.REACT_APP_ANSWERS_API_KEY

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      question: null
    }

    this.expandQuestion  = this.expandQuestion.bind(this)
    this.clearQuestion   = this.clearQuestion.bind(this)
    this.createQuestion  = this.createQuestion.bind(this)
  }

  getQuestions() {
    $.ajax({
      url: `${BASE_URL}/api/v1/questions`,
      headers: { "Authorization": API_KEY },
      success: function(questions) {
        this.setState({ questions: questions })
      }.bind(this)
    })
  }

  getQuestion(id) {
    $.ajax({
      url: `${BASE_URL}/api/v1/questions/${id}`,
      headers: { "Authorization": API_KEY },
      success: function(question) {
        this.setState({ question: question })
      }.bind(this)
    })
  }

  postQuestion(questionParams) {
    $.ajax({
      url: `${BASE_URL}/api/v1/questions`,
      headers: { "Authorization": API_KEY },
      data: { question: questionParams },
      method: 'POST',
      success: function(question) {
        this.getQuestion(question.id)
      }.bind(this),
      error: function(question) {
        console.error(question.responseJSON.errors)
      }
    })
  }

  expandQuestion(id) {
    this.getQuestion(id)
  }

  clearQuestion() {
    this.setState({ question: null })
  }

  createQuestion(questionParams) {
    this.postQuestion(questionParams)
  }

  componentDidMount() {
    this.getQuestions()
  }

  render() {
    var content

    if (this.state.question) {
      content = <QuestionDetail
                  question={ this.state.question }
                  onBackClick={ this.clearQuestion } />
    } else {
      content = <QuestionList
                  questions={ this.state.questions }
                  onClick={ this.expandQuestion } />
    }

    return (
      <div className='row'>
        <div className='col-md-6'>
          <QuestionForm onSubmit={ this.createQuestion } />
        </div>
        <div className='col-md-6'>
          { content }
        </div>
      </div>
    );
  }
}

export default App;
