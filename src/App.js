import React, { Component } from 'react';
import $ from 'jquery';

import QuestionList   from './QuestionList'
import QuestionDetail from './QuestionDetail'

const BASE_URL = 'http://localhost:3001'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      question: undefined
    }

    this.expandQuestion = this.expandQuestion.bind(this)
    this.clearQuestion  = this.clearQuestion.bind(this)
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

  expandQuestion(id) {
    this.getQuestion(id)
  }

  clearQuestion() {
    this.setState({ question: null })
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
        { content }
      </div>
    );
  }
}

export default App;
