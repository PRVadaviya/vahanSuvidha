import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-blue-100 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">Privacy Policy</h1>
        <p className="text-sm text-blue-300 text-center mb-8">Effective Date: [Insert Date]</p>

        {/** Section Wrapper */}
        <div className="space-y-6">
          <Section title="1. Information We Collect">
            <p>We may collect information about you in various ways, including:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><span className="font-semibold">Personal Data:</span> Name, email, phone number.</li>
              <li><span className="font-semibold">Derivative Data:</span> IP address, browser type.</li>
              <li><span className="font-semibold">Financial Data:</span> Payment information for transactions.</li>
              <li><span className="font-semibold">Social Networks:</span> Details from linked accounts.</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul className="list-disc list-inside space-y-2">
              <li>Operating and maintaining the site.</li>
              <li>Providing personalized recommendations.</li>
              <li>Processing transactions securely.</li>
              <li>Sending marketing and promotional materials.</li>
            </ul>
          </Section>

          <Section title="3. Disclosure of Your Information">
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold">By Law:</span> Compliance with legal obligations.</li>
              <li><span className="font-semibold">Third-Party Services:</span> Payment processing, customer support.</li>
              <li><span className="font-semibold">Business Transfers:</span> Mergers or acquisitions.</li>
            </ul>
          </Section>

          <Section title="4. Security of Your Information">
            <p>We implement security measures to protect your data. However, no system is completely secure.</p>
          </Section>

          <Section title="5. Your Privacy Rights">
            <p>You may have the right to access, correct, or delete your information. Contact us to exercise these rights.</p>
          </Section>

          <Section title="6. Contact Us">
            <p>If you have any questions, reach out to us:</p>
            <address className="mt-2 space-y-1">
              <p>VahanSuvidha</p>
              <p>Pune, Maharashtra</p>
              <p>Email: vahansuvidha@gmail.com</p>
              <p>Phone: +91 8320896532</p>
            </address>
          </Section>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="bg-gray-700 p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold text-blue-300 mb-4">{title}</h2>
    {children}
  </section>
);

export default PrivacyPolicy;
