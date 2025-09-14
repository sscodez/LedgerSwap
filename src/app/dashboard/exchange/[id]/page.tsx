import React from 'react';
import { notFound } from 'next/navigation';

export default async function ExchangeDetails({ params }: { params: Promise<{ id?: string }> }) {
  const { id } = await params;
  if (!id) return notFound();

  return (
    <div className="px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6 text-gray-800">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Exchange Created</h1>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">Pending</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">We generated your exchange and are preparing the next steps.</p>

        <div className="mt-6">
          <label className="block text-xs text-gray-500 mb-1">Exchange ID</label>
          <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
            <code className="text-sm font-mono text-gray-800 truncate">{id}</code>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          You can safely close this tab. You will also find this exchange in your dashboard history once it is processed.
        </div>

        <div className="mt-8 flex items-center gap-3">
          <a href="/dashboard" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium">Back to Dashboard</a>
          <a href="/dashboard/exchange" className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-50">Create another exchange</a>
        </div>
      </div>
    </div>
  );
}
