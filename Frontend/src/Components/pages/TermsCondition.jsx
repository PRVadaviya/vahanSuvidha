import React from "react";

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
          Terms and Conditions
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Welcome to our website. Please read these Terms and Conditions carefully before using our services. By accessing or using our site,
          you agree to comply with and be bound by these terms. If you disagree with any part of these terms, please refrain from using our services.
        </p>

        {/** Section Wrapper */}
        <div className="space-y-8">
          <Section title="1. Use of Our Services">
            <p>
              By using our services, you agree to use them only for lawful purposes and in accordance with these terms.
              You may not use our services for any unauthorized or illegal activity.
            </p>
          </Section>

          <Section title="2. Intellectual Property Rights">
            <p>
              All content, designs, and materials provided on this site are protected by copyright and intellectual property laws.
              You may not reproduce, distribute, or use any materials from this site without prior written permission.
            </p>
          </Section>

          <Section title="3. Limitation of Liability">
            <p>
              We are not responsible for any damages or losses resulting from the use of our services. This includes, but is not limited to,
              direct, indirect, or consequential damages.
            </p>
          </Section>

          <Section title="4. Changes to Terms">
            <p>
              We reserve the right to update these Terms and Conditions at any time. It is your responsibility to review them periodically for changes.
              Your continued use of our site after changes are posted constitutes your acceptance of the updated terms.
            </p>
          </Section>

          <Section title="5. Contact Us">
            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Email: vahansuvidha@gmail.com</li>
              <li>Phone: +91 8320896532</li>
              <li>Address: Pune, Maharashtra</li>
            </ul>
          </Section>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 text-center">
          Last updated: January 24, 2025
        </p>
      </div>
    </div>
  );
}

const Section = ({ title, children }) => (
  <section className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-300 mb-4">{title}</h2>
    {children}
  </section>
);

export default TermsAndConditions;