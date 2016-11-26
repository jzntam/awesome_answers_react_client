import React, { Component } from 'react';
import $ from 'jquery';

import QuestionList   from './QuestionList'
import QuestionDetail from './QuestionDetail'
import QuestionForm   from './QuestionForm'

const BASE_URL = 'http://localhost:3001'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      question: undefined
    }

    this.expandQuestion  = this.expandQuestion.bind(this)
    this.clearQuestion   = this.clearQuestion.bind(this)
    this.createQuestion  = this.createQuestion.bind(this)
  }

  getQuestions() {
    $.ajax({
      url: `${BASE_URL}/api/v1/questions`,
      success: function(questions) {
        this.setState({ questions: questions })
      }.bind(this)
    })
  }

  getQuestion(id) {
    $.ajax({
      url: `${BASE_URL}/api/v1/questions/${id}`,
      success: function(question) {
        this.setState({ question: question })
      }.bind(this)
    })
  }

  postQuestion(questionParams) {
    $.ajax({
      url: `${BASE_URL}/api/v1/questions`,
      data: { question: questionParams },
      method: 'POST',
      success: function(questions) {
        this.getQuestion(200)
      }.bind(this)
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
      content = <QuestionDetail question={ this.state.question } onBackClick={ this.clearQuestion } />
    } else {
      content = <QuestionList questions={ this.state.questions } onClick={ this.expandQuestion } />
    }

    return (
      <div className="App">
         <QuestionForm onSubmit={ this.createQuestion } />
        { content }
      </div>
    );
  }
}

export default App;
