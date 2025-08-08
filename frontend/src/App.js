import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import "./index.css";

function App() {
  const [newFeedback, setNewFeedback] = useState(null);

  return (
    <div className="container">
      <h1>💬 Feedback Wall</h1>
      <FeedbackForm onFeedbackSubmit={setNewFeedback} />
      <FeedbackList newFeedback={newFeedback} />
    </div>
  );
}

export default App;
