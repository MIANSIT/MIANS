import React, { useState } from 'react';

const Privacy: React.FC = () => {
  const [activeTab, setActiveTab] = useState('firstTab');

  const tabContent = {
    firstTab: {
      title: 'Information We Collect',
      content: (
        <>
          <p className="py-2">
            We collect data to improve our services and give our users a more efficient and
            optimized experience. We may gather the following information:
          </p>
          <ul className="mt-4 list-inside list-disc">
            <li className="py-2">
              <strong>Personal Information:</strong> This includes the information you willingly
              supply while contacting us or using our services. Your name, email address, phone
              number, business details, and other contact information are some examples.
            </li>
            <li className="py-2">
              <strong>Automatically Retrieved Information:</strong> We sometimes gather information
              about your visits to our website, which can include your internet protocol address (IP
              address), browser type, device details about and browsing activities. This enables us
              to evaluate trends and enhance our website.
            </li>
            <li className="py-2">
              <strong>Cookies and Monitoring Technologies:</strong> We access cookies and other
              technologies to gather information regarding the way you access our website and to
              improve your browsing experience. You can remove cookies in your browser's settings,
              but some parts of our website could fail to function properly as a consequence.
            </li>
          </ul>
        </>
      ),
    },
    secondTab: {
      title: 'How We Use Your Information',
      content: (
        <>
          <p className="py-2">
            The information we collect is used for specific and legitimate purposes. These include
            the following:
          </p>
          <ul className="mt-4 list-inside list-disc">
            <li className="py-2">
              <strong>Service Delivery:</strong> To communicate with you, provide requested
              services, respond to inquiries, and meet contractual obligations.
            </li>
            <li className="py-2">
              <strong>Personalization:</strong> To tailor our services to better meet your needs,
              including content recommendations and customized experiences.
            </li>
            <li className="py-2">
              <strong>Website Optimization:</strong> To understand how visitors interact with our
              site and improve functionality, usability, and content.
            </li>
            <li className="py-2">
              <strong>Security:</strong> To ensure that our website and services are safe and
              secure, we will prevent fraudulent activity and unauthorized access.
            </li>
            <li className="py-2">
              <strong>Marketing Communications:</strong> With your consent, we may send you
              newsletters, updates, promotions, or other information about our services. You may opt
              out of receiving these communications at any time.
            </li>
          </ul>
        </>
      ),
    },
    thirdTab: {
      title: 'Information Sharing and Disclosure',
      content: (
        <>
          <p className="py-2">
            MIANS is committed to protecting your privacy and will not sell, rent, or share your
            personal information with third parties, except as described below.
          </p>
          <ul className="mt-4 list-inside list-disc">
            <li className="py-2">
              <strong>Service Providers:</strong> We may engage trusted third-party vendors to
              assist us in providing services (e.g., hosting providers, analytics, payment
              processors). These parties have access to your information only to perform specific
              tasks on our behalf, and they are required to keep it confidential.
            </li>
            <li className="py-2">
              <strong>Legal Compliance:</strong> We may disclose your information if required by
              law, such as in response to a court order, legal process, or other regulatory
              requirement.
            </li>
            <li className="py-2">
              <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of
              all or part of our business, your information may be transferred to the new owner as
              part of the transaction, subject to continued protection under this Privacy Policy.
            </li>
          </ul>
        </>
      ),
    },
    fourthTab: {
      title: 'Data Security',
      content: (
        <>
          <p className="py-2">
            We prioritize the security of your personal information and implement industry-standard
            measures to protect it from unauthorized access, alteration, disclosure, or destruction.
            Our security practices include:
          </p>
          <ul className="mt-4 list-inside list-disc">
            <li className="py-2">
              <strong>Encryption:</strong> To prevent unauthorized access, sensitive data is
              encrypted during transmission and storage.
            </li>
            <li className="py-2">
              <strong>Access Controls</strong> Personal information is only accessible to authorized
              personnel, and we use strict authentication and authorization measures.
            </li>
            <li className="py-2">
              <strong>Regular Audits:</strong> We conduct security assessments on a regular basis to
              ensure that our practices meet industry standards and address any potential
              vulnerabilities.
            </li>
          </ul>
          <p className="py-2">
            However, please keep in mind that no method of transmission or electronic storage is
            entirely secure. We make every effort to protect your personal information, but we
            cannot guarantee complete security.
          </p>
        </>
      ),
    },
    fifthTab: {
      title: 'Your Rights and Choices',
      content: (
        <>
          <p className="py-2">
            You have rights to your personal information under the applicable data protection laws.
            These include the following:
          </p>
          <ul className="my-4 list-inside list-disc">
            <li className="py-2">
              You have the right to access the personal information we hold about you.
            </li>
            <li className="py-2">
              If your information is inaccurate or incomplete, you may request corrections.
            </li>
            <li className="py-2">
              You have the right to request the deletion of your personal information, subject to
              legal obligations.
            </li>
            <li className="py-2">
              You can object to the processing of your personal information for direct marketing
              purposes.
            </li>
            <li className="py-2">
              In certain cases, you may request that we restrict the processing of your data.
            </li>
            <li className="py-2">
              You can request a copy of your personal data in a commonly used format.
            </li>
          </ul>
          <p className="py-2">
            To exercise these rights, please contact us at{' '}
            <a href="mailto:miansofficial@gmail.com" className="font-semibold">
              miansofficial@gmail.com
            </a>{' '}
            . We will respond to your request within the time required by applicable law.
          </p>
        </>
      ),
    },
    sixthTab: {
      title: 'Cookie Policy',
      content: (
        <>
          <p className="py-2">
            Our website uses cookies to improve user experience, analyze usage, and provide targeted
            content. Cookies are small files stored on your device that help us understand how you
            interact with our website. You can manage cookie preferences through your browser
            settings. Note that disabling cookies may limit your access to certain features.
            <br />
            Types of cookies we may use:
          </p>
          <ul className="my-4 list-inside list-disc">
            <li className="py-2">
              <strong>Essential Cookies:</strong> Necessary for the operation of our website.
            </li>
            <li className="py-2">
              <strong>Analytical Cookies:</strong> Help us understand site usage and improve
              performance.
            </li>
            <li className="py-2">
              <strong>Functional Cookies:</strong> Enhance personalization and site functionality.
            </li>
            <li className="py-2">
              <strong>Advertising Cookies:</strong> Used for targeted marketing and relevant ad
              delivery.
            </li>
          </ul>
        </>
      ),
    },
    seventhTab: {
      title: 'Third-Party Links',
      content: (
        <>
          <p className="py-2">
            Our website may contain links to third-party sites. Please note that we are not
            responsible for the privacy practices or content of those sites. We recommend reviewing
            the privacy policies of any third-party websites you have visited.
          </p>
        </>
      ),
    },
    eigthTab: {
      title: 'Data Retention',
      content: (
        <>
          <p className="py-2">
            We retain your personal information only as long as necessary to meet the purposes for
            which it was collected, or as required by the law. Once your information is no longer
            needed, we will securely delete or anonymize it.
          </p>
        </>
      ),
    },
    ninthTab: {
      title: 'International Data Transfers',
      content: (
        <>
          <p className="py-2">
            If you are accessing our website from outside Bangladesh, please be aware that your
            information may be transferred to and processed in Bangladesh, where data protection
            laws may differ from those in your jurisdiction. By using our services, you consent to
            the transfer, processing, and storage of your information in Bangladesh, subject to the
            data protection outlined in this Privacy Policy.
          </p>
        </>
      ),
    },
    tenthTab: {
      title: 'Updates to Our Privacy Policy',
      content: (
        <>
          <p className="py-2">
            We may periodically update our Privacy Policy to reflect changes in our practices, legal
            requirements, or other reasons. We will notify you of any significant changes by posting
            the updated policy on our website and revising the “Last Updated” date. We encourage you
            to review this policy periodically to stay informed.
          </p>
        </>
      ),
    },
    eleventhTab: {
      title: 'Contact Us',
      content: (
        <>
          <p className="py-2">
            If you have any further questions, concerns, or requests regarding this Privacy Policy
            or your personal data, please contact us at:
            <a href="/miansofficial.com" className="px-2 font-semibold">
              MIANS Official
            </a>{' '}
            <br /> Email:{' '}
            <a href="mailto:miansofficial@gmail.com" className="py-4 underline">
              miansofficial@gmail.com
            </a>
          </p>
        </>
      ),
    },
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl rounded-lg  p-6 shadow-lg">
        <h1 className="w-full py-4 text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
          Your Privacy is Our Priority.
        </h1>
        <p className="py-4 text-lg text-primary-950/70 dark:text-primary-200/70 sm:text-xl">
          MIANS is fully dedicated to ensure and to protect your privacy. Our Privacy Policy
          explains how we collect, utilize, disclose, and take care of your personal information. We
          are committed to maintaining user information, security, and your privacy rights. This
          policy tells us about any data we collect on our website and relevant services.
        </p>
        <div className="flex py-4">
          <div className="border-gray-200 w-1/4 border-r">
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => setActiveTab('firstTab')}
                  className={`block w-full px-4 py-2 text-left ${
                    activeTab === 'firstTab'
                      ? 'text-blue-600 border-blue-600 border-l-4 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  Information We Collect
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('secondTab')}
                  className={`block w-full px-4 py-2 text-left ${
                    activeTab === 'secondTab'
                      ? 'text-blue-600 border-blue-600 border-l-4 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  How We Use Your Information
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('thirdTab')}
                  className={`block w-full px-4 py-2 text-left ${
                    activeTab === 'thirdTab'
                      ? 'text-blue-600 border-blue-600 border-l-4 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  Information Sharing and Disclosure
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('fourthTab')}
                  className={`block w-full px-4 py-2 text-left ${
                    activeTab === 'fourthTab'
                      ? 'text-blue-600 border-blue-600 border-l-4 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  Data Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('fifthTab')}
                  className={`block w-full px-4 py-2 text-left ${
                    activeTab === 'fifthTab'
                      ? 'text-blue-600 border-blue-600 border-l-4 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  Your Rights and Choices
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('sixthTab')}
                  className={`block w-full px-4 py-2 text-left ${
                    activeTab === 'sixthTab'
                      ? 'text-blue-600 border-blue-600 border-l-4 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('seventhTab')}
                  className={`block w-full px-4 py-2 text-left ${
                    activeTab === 'seventhTab'
                      ? 'text-blue-600 border-blue-600 border-l-4 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  Third-Party Links
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('eigthTab')}
                  className={`block w-full px-4 py-2 text-left ${
                    activeTab === 'eigthTab'
                      ? 'text-blue-600 border-blue-600 border-l-4 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  Data Retention
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('ninthTab')}
                  className={`block w-full px-4 py-2 text-left ${
                    activeTab === 'ninthTab'
                      ? 'text-blue-600 border-blue-600 border-l-4 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  International Data Transfers
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('tenthTab')}
                  className={`block w-full px-4 py-2 text-left ${
                    activeTab === 'tenthTab'
                      ? 'text-blue-600 border-blue-600 border-l-4 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  Updates to Our Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('eleventhTab')}
                  className={`block w-full px-4 py-2 text-left ${
                    activeTab === 'eleventhTab'
                      ? 'text-blue-600 border-blue-600 border-l-4 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div>
            <select
              className="border-gray-300 rounded border p-2"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              <option value="firstTab">Information We Collect</option>
              <option value="secondTab">How We Use Your Information</option>
            </select>
          </div>
          {/* Tab Content */}
          <div className="w-3/4 pl-6">
            <div className="text-gray-600 mt-4">{tabContent[activeTab].content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
