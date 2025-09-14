'use client'


import React from 'react'

const loading = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center p-8">
          <div className="flex flex-col items-center gap-4">
            <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
            <div className="space-y-2 text-center">
              <p className="text-sm font-medium text-gray-700">Loading Exchange...</p>
              <p className="text-xs text-gray-500">Preparing markets and your recent activity</p>
            </div>
            <div className="mt-2 w-72 max-w-full">
              <div className="h-3 w-full rounded bg-gray-200 overflow-hidden">
                <div className="h-full w-1/3 animate-[loading_1.2s_ease-in-out_infinite] bg-blue-500" />
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes loading {
              0% { transform: translateX(-100%); }
              50% { transform: translateX(20%); }
              100% { transform: translateX(100%); }
            }
          `}</style>
        </div>
      );
}

export default loading

