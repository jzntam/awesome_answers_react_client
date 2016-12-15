import React, { Component } from 'react';

import QuestionList   from './QuestionList'
import QuestionDetail from './QuestionDetail'
import QuestionForm   from './QuestionForm'

const BASE_URL = 'https://jason-answers-api.herokuapp.com/api/v1/questions/'
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
    fetch(BASE_URL, {
      method:  'GET',
      headers: { 'Authorization': API_KEY },
    })
    .then(this.checkStatus)
    .then(function(questions) {
      this.setState({ questions: questions })
    }.bind(this))
  }

  getQuestion(id) {
    fetch(`${BASE_URL}${id}`, {
      method:  'GET',
      headers: { 'Authorization': API_KEY },
    })
    .then(this.checkStatus)
    .then(function(question) {
      this.setState({ question: question })
    }.bind(this))
  }

  postQuestion(questionParams) {
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': API_KEY
      },
      body: JSON.stringify({ question: questionParams })
    })
    .then(this.checkStatus)
    .then(function(question) {
      this.setState({ question: question })
    }.bind(this))
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      response.json()
      .then(function(data) {
        var error = new Error(data.errors.join(', '));
        throw error
      })
    }
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
