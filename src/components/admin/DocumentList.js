import { AdminHeader } from './AdminHeader.js';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

const projects = [
  {
    name: 'Dream Center Site',
    initials: 'DC',
    href: 'https://citygatedreamcenter.com/',
    bgColor: 'bg-pink-600'
  },
  {
    name: 'Intake Form',
    initials: 'IF',
    href: '#',
    members: 12,
    bgColor: 'bg-purple-600'
  },
  {
    name: 'Volunteer Handbook',
    initials: 'VH',
    href: '#',
    members: 16,
    bgColor: 'bg-yellow-500'
  },
  {
    name: 'Background Check Site',
    initials: 'BC',
    href: '#',
    members: 8,
    bgColor: 'bg-green-500'
  }
]
const items = [
  { id: 1 }
  // More items...
]

export const DocumentList = () => {
  return (
    <>
      <AdminHeader />
      <ul className='space-y-3'>
        {items.map((item) => (
          <li
            key={item.id}
            className='bg-white shadow overflow-hidden rounded-md px-6 py-4'
          >
            <div>
              <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide'>
                Documents
              </h2>
              <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                {projects.map((project) => (
                  <li
                    key={project.name}
                    className='col-span-1 flex shadow-sm rounded-md'
                  >
                    <div
                      className={classNames(
                        project.bgColor,
                        'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                      )}
                    >
                      {project.initials}
                    </div>
                    <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
                      <div className='flex-1 px-4 py-2 text-sm truncate'>
                        <a
                          href={project.href}
                          className='text-gray-900 font-medium hover:text-gray-600'
                          target='_blank'
                          rel='noreferrer noopener'
                        >
                          {project.name}
                        </a>
                        <p className='text-gray-500'>{project.members}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
};
