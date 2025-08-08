import React, { useState } from 'react';
import axios from 'axios';

export default function FeedbackForm({ onFeedbackSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/feedback', form);
    onFeedbackSubmit(res.data);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Your Email" type="email" value={form.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Your Feedback" value={form.message} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}
