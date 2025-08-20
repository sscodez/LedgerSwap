'use client'
import Image from 'next/image';
import React from 'react';

const AdminOverviewPage: React.FC = () => {

  const metrics = [
    {
      title: "Total Swaps Today",
      value: "1,247",
      change: "+12.3%",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      svgPath: (<Image src='/assests/icons/iconWithbg.png' alt='settings' width={30} height={30} />),
    },
    {
      title: "Volume (24h)",
      value: "$4.2M",
      change: "+8.7%",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      svgPath: (<Image src='/assests/icons/iconWithbg 2.png' alt='settings' width={30} height={30} />),

    },
    {
      title: "Active Users",
      value: "892",
      change: "+5.2%",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      svgPath: (<Image src='/assests/icons/iconWithbg 3.png' alt='settings' width={30} height={30} />),
    },
    {
      title: "Platform Fees",
      value: "$21,450",
      change: "+15.4%",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      svgPath: (<Image src='/assests/icons/iconWithbg 4.png' alt='settings' width={30} height={30} />),
    },
  ];



  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl text-black font-semibold">Overview</h1>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 bg-white rounded-lg p-3 sm:p-5 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-[#F8FAFC] p-4 sm:p-6 rounded-lg text-[13px] text-black"
          >
            <div className="flex items-center mb-2">

              <span className="text-sm font-semibold text-gray-500">{metric.title}</span>
            </div>
            <div className="flex items-center">
              {metric.svgPath}
              <span className="text-2xl  ml-2 font-semibold">{metric.value}</span>

            </div>
            <span className=" text-xs font-semibold mt-8 text-green-800">{metric.change}</span>
          </div>
        ))}
      </div>


      <h1 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-black font-semibold">Recent Swaps</h1>

      {/* Main content grid */}
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-6">
        {/* Recent Activity - spans 2 columns on xl */}
        <div className="col-span-2">
          <div className="bg-white rounded-lg p-3 sm:p-6 mb-4 sm:mb-6">

            <div className="overflow-x-auto -mx-3 sm:mx-0">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="border-b border-black/20">
                    <th className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Addresses</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Amount</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Network</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Status</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, index) => (
                    <tr key={index} className={`${index === 4 ? '' : 'border-b border-black/10'} hover:bg-gray-50`}>
                      <td className="py-2 sm:py-3 font-semibold px-3 sm:px-4 whitespace-nowrap text-gray-700 flex text-xs sm:text-sm">0x{Math.random().toString(16).substring(2, 10)}...{Math.random().toString(16).substring(2, 10)}
                        <Image className=' mx-1' src="/assests/icons/file_copy.svg" alt="eye" width={15} height={15} />
                      </td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-gray-700 text-xs sm:text-sm">0.234134 {['ETH', 'BTC', 'SOL'][index % 3]}</td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-gray-700 text-xs sm:text-sm">{['Ethereum', 'Solana', 'Tron'][index % 3]}</td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${index % 2 === 0 ? ' text-green-600' : ' text-blue-600'
                          }`}>
                          {index % 2 === 0 ? 'Finished' : 'Pending'}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-gray-700 text-xs sm:text-sm">{index + 2} min ago</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


        </div>

        {/* Side content - 1 column on xl */}
        <div className="space-y-6">



        </div>
      </div>
    </div>
  );
};

export default AdminOverviewPage;
