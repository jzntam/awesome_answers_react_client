import React, { Component } from 'react';
import $ from 'jquery';

import QuestionList from './QuestionList'

const BASE_URL = 'http://localhost:3001'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: []
    }
  }

  getQuestions() {
    $.ajax({
      url: `${BASE_URL}/api/v1/questions`,
      success: function(questions) {
        this.setState({ questions: questions })
      }.bind(this)
    })
  }

  expandQuestion(id) {
    console.log('Question id:', id)
  }

  componentDidMount() {
    this.getQuestions()
  }

  render() {
    return (
      <div className="App">
        <QuestionList
          questions={ this.state.questions }
          onClick={ this.expandQuestion }/>
      </div>
    );
  }
}

export default App;
