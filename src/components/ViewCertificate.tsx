import React from 'react';

interface ViewCertificateButtonProps {
  certificateTemplate: string;
}

const ViewCertificateButton: React.FC<ViewCertificateButtonProps> = ({ certificateTemplate }) => {
  const handleClick = () => {
    window.open(`/${certificateTemplate}`, '_blank', 'width=1000,height=800,scrollbars=yes');
  };

  return (
    <button onClick={handleClick} className="rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      View Certificate
    </button>
  );
};

export default ViewCertificateButton;
