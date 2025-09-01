import React, { useEffect } from 'react'

const PrivacyPolicy = () => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, []);
  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-10">
         <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 bg-white shadow-sm rounded-lg mt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Privacy Policy</h1>
        <p className="text-gray-600 text-center mb-8">
          Your privacy is important to us. This Privacy Policy explains how Neeraya collects, uses, discloses, and safeguards your information.
        </p>

        <section className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
            <p className="leading-relaxed">
              We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>**Personal Data:** Name, address, email address, telephone number, payment information.</li>
              <li>**Usage Data:** IP address, browser type, pages visited, time spent on pages.</li>
              <li>**Cookies:** Information collected via cookies and similar tracking technologies.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use personal information collected via our Website for a variety of business purposes, including to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Facilitate account creation and logon process.</li>
              <li>Fulfill and manage your orders, payments, returns, and exchanges.</li>
              <li>Send you marketing and promotional communications.</li>
              <li>Request feedback and contact you about your use of our Website.</li>
              <li>Improve our products, services, and overall user experience.</li>
              <li>Respond to your inquiries and offer customer support.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Sharing Your Information</h2>
            <p className="leading-relaxed">
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may disclose your data to third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Your Privacy Rights</h2>
            <p className="leading-relaxed">
              You have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Data Security</h2>
            <p className="leading-relaxed">
              We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or suggestions about our Privacy Policy, please contact us at contact@neeraya.com.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy