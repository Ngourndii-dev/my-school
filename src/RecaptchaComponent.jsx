import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface RecaptchaProps {
  onCaptchaVerified: (token: string | null) => void;
}

const RecaptchaComponent: React.FC<RecaptchaProps> = ({ onCaptchaVerified }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleCaptchaChange = (token: string | null) => {
    onCaptchaVerified(token);
  };

  return (
    <div>
      <ReCAPTCHA 
        ref={recaptchaRef}
        sitekey="YOUR_SITE_KEY"
        onChange={handleCaptchaChange}
      />
    </div>
  );
};

export default RecaptchaComponent;
