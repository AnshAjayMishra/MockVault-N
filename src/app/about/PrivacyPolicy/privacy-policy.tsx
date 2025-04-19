import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Effective Date: [Insert Date]</p>

      <p className="mb-4">
        At MockVault, your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
      <ul className="list-disc ml-8 mb-4">
        <li>Personal Information: Name, email address, and other information you choose to provide.</li>
        <li>Usage Data: How you interact with MockVault (pages visited, features used, etc.).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
      <ul className="list-disc ml-8 mb-4">
        <li>To create and manage your account.</li>
        <li>To improve our services based on your feedback and usage patterns.</li>
        <li>To communicate important updates and support messages.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information to third parties. We may share data with trusted partners under strict confidentiality agreements.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
      <p className="mb-4">
        We use industry-standard measures to protect your data but cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Your Choices</h2>
      <p className="mb-4">
        You may update, correct, or delete your personal information by contacting us at [Insert Contact Email].
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to this Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Changes will be posted here with a revised effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p>If you have questions about this Privacy Policy, contact us at [Insert Contact Email].</p>
    </div>
  );
};

export default PrivacyPolicy;
