import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-600 text-center mb-8">Effective Date: [Insert Date]</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect information about you in a variety of ways. The information we may collect on the site includes:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><span className="font-semibold">Personal Data:</span> Information such as your name, email address, and phone number provided voluntarily.</li>
          <li><span className="font-semibold">Derivative Data:</span> Information automatically collected, like IP address and browser type.</li>
          <li><span className="font-semibold">Financial Data:</span> Payment information such as credit card details for transactions.</li>
          <li><span className="font-semibold">Data from Social Networks:</span> Details obtained when you connect your account to social networks.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect about you for various purposes, including:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Operating and maintaining the site.</li>
          <li>Providing personalized content and recommendations.</li>
          <li>Processing transactions and related communications.</li>
          <li>Sending marketing and promotional materials.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Disclosure of Your Information</h2>
        <p className="mb-4">
          We may share your information in specific circumstances:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><span className="font-semibold">By Law:</span> When required to comply with legal obligations.</li>
          <li><span className="font-semibold">Third-Party Service Providers:</span> To perform services like payment processing and customer support.</li>
          <li><span className="font-semibold">Business Transfers:</span> In case of a merger or sale of our business assets.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Tracking Technologies</h2>
        <p className="mb-4">
          We may use cookies, web beacons, and other tracking technologies to enhance your experience on our site.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Security of Your Information</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information. However, no system is completely secure.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. Policy for Children</h2>
        <p className="mb-4">
          We do not knowingly collect information from children under 13. If discovered, we will delete such information promptly.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">7. Your Privacy Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions, please contact us at:
        </p>
        <address className="space-y-2">
          <p>VahanSuvidha</p>
          <p>pune,maharashtra</p>
          <p>Email:vahansuvidha@gmail.com</p>
          <p>Phone: +91 8320896532</p>
        </address>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">9. Updates to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy occasionally. Updates will be posted on this page with the updated effective date.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
