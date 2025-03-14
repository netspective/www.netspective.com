import React, { useState } from 'react';
import md5 from 'md5';

type ViewPrivateReportButtonProps = {
  validTokens: string[];
  reportTemplate: string;
  buttonLabel: string;
};

const ViewPrivateReportButton: React.FC<ViewPrivateReportButtonProps> = ({
  validTokens,
  reportTemplate,
  buttonLabel,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputToken, setInputToken] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Encrypt the user-entered token
    const encryptedToken = md5(inputToken);

    if (validTokens.includes(encryptedToken)) {
      setError(null);
      setIsModalOpen(false);

      // Open the report in a new tab
      window.open(`/${reportTemplate}`, '_blank', 'width=1000,height=800,scrollbars=yes');
    } else {
      setError('Invalid token. Please try again.');
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
     setInputToken('');
     setError('');
  };

  return (
    <>
      <button onClick={handleOpenModal} className="rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        {buttonLabel}
      </button>

      {isModalOpen && (
        <div style={overlayStyles}>
          <div style={modalStyles}>
            <div className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white pb-5 relative">
              <button onClick={handleCloseModal} className="text-gray-600 hover:text-gray-900 text-2xl font-bold absolute top-5 right-5">
                  ✕
                </button>
              <div className="flex justify-between items-center border-b dark:border-b-slate-700 pt-5 px-10 bg-blue-50 dark:bg-slate-800">
                <h1 className="text-xl font-bold text-center">NON-DISCLOSURE AGREEMENT</h1>
              </div>
              <div className="px-10 text-lg">
                <p>
                  This <strong>Non-Disclosure Agreement ("Agreement")</strong> is made between{' '}
                  <strong>Netspective Communications LLC</strong> ("Disclosing Party"), located at{' '}
                  <strong>1802 Brightseat Rd. Suite 101, Landover, MD 20785</strong>, and the undersigned recipient
                  ("Recipient").
                </p>
                <p>
                  <strong>WHEREAS</strong>, the Disclosing Party has developed <strong>Opsfolio Suite</strong> and is
                  providing access to the SOC 2 Report, and the Recipient desires to access and evaluate such Confidential
                  Information under the terms of this Agreement.
                </p>
                <h2 className="text-lg font-semibold">1. Confidential Information</h2>
                <p>
                  The <strong>Confidential Information</strong> includes the SOC 2 Report and any related proprietary data
                  provided by the Disclosing Party.
                </p>

                <h2 className="text-lg font-semibold">2. Access and Use</h2>
                <p>
                  The Recipient will receive a token via email granting access to the SOC 2 Report. The token is
                  non-transferable and may only be used for evaluating the Product in compliance with the Recipient’s
                  internal security, regulatory, and business policies.
                </p>

                <h2 className="text-lg font-semibold">3. Obligations of Recipient</h2>
                <ul>
                  <li>
                    The Recipient agrees to keep the Confidential Information confidential and will not disclose it to any
                    third parties except for necessary employees or agents who are bound by similar confidentiality terms.
                  </li>
                  <li>The Confidential Information may only be used for evaluation purposes as stated above.</li>
                </ul>

                <h2 className="text-lg font-semibold">4. Exclusions</h2>
                <p>
                  Confidential Information does not include data that becomes publicly available, is rightfully received
                  from a third party, or is independently developed by the Recipient.
                </p>

                <h2 className="text-lg font-semibold">5. Term and Termination</h2>
                <ul>
                  <li>
                    The Recipient will maintain the confidentiality of the Confidential Information for{' '}
                    <strong>one (1) year</strong> from the date of disclosure.
                  </li>
                  <li>
                    Upon termination of this Agreement, the Recipient shall destroy or return all Confidential Information
                    within <strong>seven (7) business days</strong>.
                  </li>
                </ul>

                <h2 className="text-lg font-semibold">6. Electronic Agreement</h2>
                <p>
                  By accessing the SOC 2 Report through the provided token, the Recipient acknowledges and agrees to be
                  bound by this Agreement. This electronic agreement is binding and equivalent to a physical signature.
                </p>

                <h2 className="text-lg font-semibold">7. Indemnification</h2>
                <p>
                  The Recipient agrees to indemnify the Disclosing Party against any damages arising from a breach of this
                  Agreement.
                </p>

                <h2 className="text-lg font-semibold">8. Governing Law</h2>
                <p>
                  This Agreement shall be governed by the laws of the State of <strong>Maryland</strong>.
                </p>
                <p>
                  <strong>
                    By entering the token provided to you via email and accessing the Report, the Recipient acknowledges
                    and agrees to be bound by the terms of this Agreement and represents that they have the legal
                    authority to bind the entity, if applicable, to these terms.
                  </strong>
                </p>
              </div>
              <div className="px-10 text-lg">
                <h6 className="text-lg mt-2 mb-2">Enter your token to access the report</h6>
                <form onSubmit={handleTokenSubmit} className="flex items-center space-x-2 mb-4">
                  <input
                    type="text"
                    value={inputToken}
                    onChange={(e) => setInputToken(e.target.value)}
                    placeholder="Enter token"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-500 dark:text-slate-300"
                    required
                  />
                  <button
                    type="submit"
                    className="block w-auto px-6 py-1 text-l text-center text-blue-100 bg-blue-800 border border-blue-200 rounded-lg hover:bg-blue-700 hover:text-blue-100 dark:border-blue-600 dark:bg-blue-900 dark:text-blue-100 dark:hover:text-blue-100  dark:hover:bg-blue-800 focus:outline-none focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-700"
                  >
                    Submit
                  </button>
                </form>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              </div>
              <button onClick={handleCloseModal} className="text-blue-600 hover:text-blue-800 text-m dark:text-blue-500 pl-10">
                  I do not accept
                </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Styles for modal and overlay
const overlayStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const modalStyles: React.CSSProperties = {
//  backgroundColor: 'white',
  padding: '0px',
  borderRadius: '8px',
  width: '70%',
  maxHeight: '80vh',
  overflowY: 'auto',
  textAlign: 'left',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '15px',
};

export default ViewPrivateReportButton;
