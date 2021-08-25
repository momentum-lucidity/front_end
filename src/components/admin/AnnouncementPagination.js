import React from 'react'

export const AnnouncementPagination = ({ announcementsPerPage, totalAnnouncements, paginate }) => {
  const pageNumbers = []

  for (
    let i = 1;
    i <= Math.ceil(totalAnnouncements / announcementsPerPage);
    i++
  ) {
    pageNumbers.push(i)
  }

  return (
    <div className='bg-gray-50 px-4 py-3 flex items-center justify-between border-gray-200 sm:px-6'>
      <div className='hidden sm:flex-1 sm:flex sm:items-center space-x-1'>
        {pageNumbers.map(number => (
          <div key={number}>
            <nav
              className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
              aria-label='Pagination'
            >
              {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
              <a
                onClick={() => paginate(number)}
                href='#'
                aria-current='page'
                className='bg-white border-gray-200 text-gray-500 hover:bg-purple-100 relative inline-flex justify-between items-center px-4 py-2 border text-sm font-medium focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
              >
                {number}
              </a>
            </nav>
          </div>
        ))}
      </div>
    </div>
  )
}
