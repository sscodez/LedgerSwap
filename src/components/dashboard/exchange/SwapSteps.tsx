import React from 'react';

interface Step {
  id: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface SwapStepsProps {
  currentStep: number;
}

const SwapSteps: React.FC<SwapStepsProps> = ({ currentStep }) => {
  const steps: Step[] = [
    { id: 1, title: 'Choose currencies', isActive: currentStep === 1, isCompleted: currentStep > 1 },
    { id: 2, title: 'Enter the address', isActive: currentStep === 2, isCompleted: currentStep > 2 },
    { id: 3, title: 'Create an exchange', isActive: currentStep === 3, isCompleted: currentStep > 3 },
  ];

  return (
    <div className="mb-6 sm:mb-8 w-full">
      <h2 className="text-lg sm:text-xl font-semibold text-black my-6 sm:my-8 text-center">How to swap?</h2>
      <div className='border-b border-gray-200 my-4 sm:my-5'></div>
      <div className="flex justify-center px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex items-center mb-3 sm:mb-0">
                {/* Step circle with number */}
                <div className={`
                  flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full
                  ${step.isCompleted ? 'bg-green-500 text-white' : ''}
                  ${step.isActive ? 'bg-black text-white' : ''}
                  ${!step.isActive && !step.isCompleted ? 'bg-gray-200 text-gray-500' : ''}
                  transition-colors duration-200
                `}>
                  {step.isCompleted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className="font-bold text-xs sm:text-sm">{step.id}</span>
                  )}
                </div>
                
                {/* Step title */}
                <span className={`ml-2 text-xs sm:text-sm ${step.isActive || step.isCompleted ? 'font-medium' : 'text-gray-500'}`}>
                  {step.title}
                </span>
              </div>
              
              {/* Connector line with arrow (except after the last step) */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center w-full sm:w-16 mx-auto mb-2 sm:mb-0">
                  <div className={`hidden sm:block w-full relative ${index < currentStep - 1 ? 'opacity-100' : 'opacity-50'}`}>
                    <div className="border-t-2 border-dotted border-gray-300 w-full absolute top-1/2"></div>
                  </div>
                  <div className="sm:hidden border-l-2 border-dotted border-gray-300 h-4 my-1"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwapSteps;
