import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FeedbackList({ newFeedback }) {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/feedback').then((res) => {
      setFeedbacks(res.data);
    });
  }, [newFeedback]);

  return (
    <div>
      {feedbacks.map((fb) => (
        <div className="feedback-card" key={fb._id}>
          <p>❝ {fb.message} ❞</p>
          <p className="feedback-name">– {fb.name}</p>
        </div>
      ))}
    </div>
  );
}
