// Write your code here.
import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="faqs-bg-container">
      <div className="faqs-card-container">
        <h1 className="faqs-heading">FAQs</h1>
        <ul>
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} eachFaq={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
