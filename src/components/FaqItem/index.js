// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isPlusButtonClicked: false,
  }

  showFaqQuestion = () => {
    this.setState(prevState => ({
      isPlusButtonClicked: !prevState.isPlusButtonClicked,
    }))
  }

  showFaqAnswer = () => {
    this.setState(prevState => ({
      isPlusButtonClicked: !prevState.isPlusButtonClicked,
    }))
  }

  render() {
    const {isPlusButtonClicked} = this.state
    const {eachFaq} = this.props
    const {questionText, answerText} = eachFaq

    return (
      <>
        {isPlusButtonClicked ? (
          <li className="faq-ans-container">
            <div className="minus-container">
              <h1 className="question">{questionText}</h1>
              <button
                type="button"
                onClick={this.showFaqQuestion}
                className="button-icon"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                  alt="minus"
                />
              </button>
            </div>
            <hr className="ans-qns-separator" />
            <p className="answer-text">{answerText}</p>
          </li>
        ) : (
          <li className="faq-container">
            <h1 className="question">{questionText}</h1>
            <button
              type="button"
              onClick={this.showFaqAnswer}
              className="button-icon"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            </button>
          </li>
        )}
      </>
    )
  }
}

export default FaqItem
