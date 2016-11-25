import React, { Component } from 'react';
import $ from 'jquery';

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

  componentDidMount() {
    this.getQuestions()
  }

  render() {
    return (
      <div className="App">
        {
          JSON.stringify(this.state.questions)
        }
      </div>
    );
  }
}

export default App;
