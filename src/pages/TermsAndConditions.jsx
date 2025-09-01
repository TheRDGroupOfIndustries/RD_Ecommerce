import React, { useEffect } from 'react'

const TermsAndConditions = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Terms and Conditions</h1>
        <p className="text-gray-600 text-center mb-8">
          Welcome to Neeraya. Please read these Terms and Conditions carefully before using our website.
        </p>

        <section className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. Additionally, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services, which may be posted and modified from time to time. All such guidelines or rules are hereby incorporated by reference into these Terms and Conditions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Products and Services</h2>
            <p className="leading-relaxed">
              Neeraya offers a range of clothing and accessories. All products and services are subject to availability. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any product at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. User Obligations</h2>
            <p className="leading-relaxed">
              As a user of the Neeraya website, you agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this site, such as text, graphics, logos, images, and software, is the property of Neeraya or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of Neeraya, with copyright authorship for this collection by Neeraya, and protected by international copyright laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Limitation of Liability</h2>
            <p className="leading-relaxed">
              Neeraya will not be liable for any direct, indirect, incidental, punitive, or consequential damages of any kind arising from the use of this site or from any products purchased from this site. This includes, but is not limited to, damages for lost profits, goodwill, use, data or other intangible losses.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located within India for the purpose of litigating all such claims or disputes.
            </p>
          </div>

          <div>
            <h2 className="2xl font-semibold text-gray-800 mb-3">7. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>
        </section>
      </div>
      </div>
  )
}

export default TermsAndConditions;