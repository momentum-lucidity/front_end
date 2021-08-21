 // pagination based
 const [currentPage, setCurrentPage] = useState(1)
 const [announcementsPerPage, setAnnouncementsPerPage] = useState(5)
 
 const indexOfLastAnnouncement = currentPage * announcementsPerPage;
 const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
 const currentAnnouncements = sortedAnnouncements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement)

 import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'


const Pagination = ({ announcementsPerPage, totalAnnouncements }) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalAnnouncements / announcementsPerPage); i++) {
        pageNumbers.push(i)
    }
}

return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <div className="flex-1 flex justify-between sm:hidden">
      <a
        href="#"
        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
      >
        Previous
      </a>
      <a
        href="#"
        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
      >
        Next
      </a>
    </div>
    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
          <a
            href="#"
            aria-current="page"
            className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            1
          </a>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            2
          </a>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
          >
            3
          </a>
          <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
            ...
          </span>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
          >
            8
          </a>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            9
          </a>
          <a
            href="#"
            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            10
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    );
  };
  

  const steps = [
    { id: '01', name: 'Registration', status: `${userDetails.intake_status}` },
    { id: '02', name: 'Pending Approval', status: `${userDetails.intake_status}` },
    { id: '03', name: 'Approved!', status: `${userDetails.intake_status}` }
  ]

  <nav aria-label='Progress'>
                <ol className='border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0'>
                  {steps.map((step, stepIdx) => (
                    <li key={step.name} className='relative md:flex-1 md:flex'>
                      {step.status === 'approved'
                        ? (
                          <a
                            href={step.href}
                            className='group flex items-center w-full'
                          >
                            <span className='px-6 py-4 flex items-center text-sm font-medium'>
                              <span className='flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800'>
                                <CheckIcon
                                  className='w-6 h-6 text-white'
                                  aria-hidden='true'
                                />
                              </span>
                              <span className='ml-4 text-sm font-medium text-gray-900'>
                                {step.name}
                              </span>
                            </span>
                          </a>
                          )
                        : step.status === 'pending'
                          ? (
                            <a
                              href={step.href}
                              className='px-6 py-4 flex items-center text-sm font-medium'
                              aria-current='step'
                            >
                              <span className='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full'>
                                <span className='text-indigo-600'>{step.id}</span>
                              </span>
                              <span className='ml-4 text-sm font-medium text-indigo-600'>
                                {step.name}
                              </span>
                            </a>
                            )
                          : (
                            <a href={step.href} className='group flex items-center'>
                              <span className='px-6 py-4 flex items-center text-sm font-medium'>
                                <span className='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400'>
                                  <span className='text-gray-500 group-hover:text-gray-900'>
                                    {step.id}
                                  </span>
                                </span>
                                <span className='ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900'>
                                  {step.name}
                                </span>
                              </span>
                            </a>
                            )}

                      {stepIdx !== steps.length - 1
                        ? (
                          <>
                            {/* Arrow separator for lg screens and up */}
                            <div
                              className='hidden md:block absolute top-0 right-0 h-full w-5'
                              aria-hidden='true'
                            >
                              <svg
                                className='h-full w-full text-gray-300'
                                viewBox='0 0 22 80'
                                fill='none'
                                preserveAspectRatio='none'
                              >
                                <path
                                  d='M0 -2L20 40L0 82'
                                  vectorEffect='non-scaling-stroke'
                                  stroke='currentcolor'
                                  strokeLinejoin='round'
                                />
                              </svg>
                            </div>
                          </>
                          )
                        : null}
                    </li>
                  ))}
                </ol>
              </nav>
