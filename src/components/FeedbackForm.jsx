
import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Feedback submitted:', feedback);
        setSubmitted(true);
    };

    return (
        <div className="feedback-form-container">
            <h2>We value your feedback</h2>
            {submitted ? (
                <div className="thank-you-message">
                    <h3>Thank you for your feedback!</h3>
                    <p>Your feedback has been received and is greatly appreciated.</p>
                    <a href='/feedback'>Submit another</a>

                </div>
            ) : (
                <form onSubmit={handleSubmit} className="feedback-form">
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Enter your feedback here..."
                        rows="5"
                        required
                    ></textarea>
                    <button type="submit">Submit Feedback</button>
                </form>
            )}
        </div>
    );
};

export default FeedbackForm;
