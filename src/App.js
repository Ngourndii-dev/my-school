import React, { useState } from 'react';
import RecaptchaComponent from './RecaptchaComponent';

const App: React.FC = () => {
  const [verified, setVerified] = useState<boolean | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (verified) {
      console.log('Form submitted with reCAPTCHA verification');
    } else {
      console.log('Please verify the reCAPTCHA');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter something" />
        <RecaptchaComponent onCaptchaVerified={(token) => setVerified(!!token)} />
        <button type="submit">Submit</button>
      </form>
      {verified !== null && <p>Verified: {verified ? 'Yes' : 'No'}</p>}
    </div>
  );
};

export default App;
