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
    <div className="mb-8 w-full">

      <h2 className="text-xl font-semibold text-black my-8 text-center">How to swap?</h2>
     <div className='border-b border-gray-200 my-5'></div>
      <div className="flex justify-center px-4">
        <div className="flex items-center w-full max-w-3xl justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex items-center">
                {/* Step circle with number */}
                <div className={`
                  flex items-center justify-center w-8 h-8 rounded-full
                  ${step.isCompleted ? 'bg-green-500 text-white' : ''}
                  ${step.isActive ? 'bg-black text-white' : ''}
                  ${!step.isActive && !step.isCompleted ? 'bg-gray-200 text-gray-500' : ''}
                  transition-colors duration-200
                `}>
                  {step.isCompleted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className="font-bold">{step.id}</span>
                  )}
                </div>
                
                {/* Step title */}
                <span className={`ml-2 text-sm ${step.isActive || step.isCompleted ? 'font-medium' : 'text-gray-500'}`}>
                  {step.title}
                </span>
              </div>
              
              {/* Connector line with arrow (except after the last step) */}
              {index < steps.length - 1 && (
                <div className="flex items-center">
                  <div className={`w-16 relative ${index < currentStep - 1 ? 'opacity-100' : 'opacity-50'}`}>
                    <div className="border-t-2 border-dotted border-gray-300 w-full absolute top-1/2"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg> */}
                    </div>
                  </div>
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
