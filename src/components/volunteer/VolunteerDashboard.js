import { VolunteerHeader } from './VolunteerHeader.js'
import { VolunteerEvents } from './VolunteerEvents.js'
import {
  ArrowNarrowLeftIcon,
  CheckIcon,
  HomeIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ThumbUpIcon,
  UserIcon
} from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

const user = {
  name: 'Whitney Francis',
  email: 'whitney@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
}
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' }
]
const breadcrumbs = [
  { name: 'Jobs', href: '#', current: false },
  { name: 'Front End Developer', href: '#', current: false },
  { name: 'Applicants', href: '#', current: true }
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' }
]
const attachments = [
  { name: 'resume_front_end_developer.pdf', href: '#' },
  { name: 'coverletter_front_end_developer.pdf', href: '#' }
]
const eventTypes = {
  applied: { icon: UserIcon, bgColorClass: 'bg-gray-400' },
  advanced: { icon: ThumbUpIcon, bgColorClass: 'bg-blue-500' },
  completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' }
}
const timeline = [
  {
    id: 1,
    type: eventTypes.applied,
    content: 'Applied to',
    target: 'Front End Developer',
    date: 'Sep 20',
    datetime: '2020-09-20'
  },
  {
    id: 2,
    type: eventTypes.advanced,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    date: 'Sep 22',
    datetime: '2020-09-22'
  },
  {
    id: 3,
    type: eventTypes.completed,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    date: 'Sep 28',
    datetime: '2020-09-28'
  },
  {
    id: 4,
    type: eventTypes.advanced,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    date: 'Sep 30',
    datetime: '2020-09-30'
  },
  {
    id: 5,
    type: eventTypes.completed,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    date: 'Oct 4',
    datetime: '2020-10-04'
  }
]
const comments = [
  {
    id: 1,
    name: 'Leslie Alexander',
    date: '4d ago',
    imageId: '1494790108377-be9c29b29330',
    body:
      'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.'
  },
  {
    id: 2,
    name: 'Michael Foster',
    date: '4d ago',
    imageId: '1519244703995-f4e0f30006d5',
    body:
      'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.'
  },
  {
    id: 3,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body:
      'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.'
  }
]

export const VolunteerDashboard = () => {
  return (
    <>
      <VolunteerHeader />
      <main className='py-10'>
        {/* Page header */}
        <div className='max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8'>
          <div className='flex items-center space-x-5'>
            <div className='flex-shrink-0'>
              <div className='relative'>
                <span className='inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-500'>
                  <span className='text-xl font-medium leading-none text-white'>V</span>
                </span>
                <span
                  className='absolute inset-0 shadow-inner rounded-full'
                  aria-hidden='true'
                />
              </div>
            </div>
            <div>
              <h1 className='text-2xl font-bold text-gray-900'>
                Welcome, (volunteer first name here)
              </h1>
              <p className='text-sm font-medium text-gray-500'>
                joined{' '}
                on <time dateTime='2020-08-25'>August 25, 2020</time>
              </p>
            </div>
          </div>
        </div>

        <div className='mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-0 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3'>
          <div className='space-y-6 lg:col-start-1 lg:col-span-3'>
            {/* Description list */}
            <section aria-labelledby='applicant-information-title'>
              <div className='bg-white shadow sm:rounded-lg'>
                <div className='px-4 py-5 sm:px-6'>
                  <h2
                    id='applicant-information-title'
                    className='text-lg leading-6 font-medium text-gray-900'
                  >
                    Upcoming Events
                  </h2>
                </div>
                <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
                  <VolunteerEvents />
                </div>
              </div>
            </section>
          </div>

          <section
            aria-labelledby='timeline-title'
            className='lg:col-start-5 lg:col-span-1'
          >
            <div className='bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6'>
              <h2
                id='timeline-title'
                className='text-lg font-medium text-gray-900'
              >
                Announcements
              </h2>

              {/* Activity Feed */}
              <div className='mt-6 flow-root'>
                <ul className='-mb-8'>
                  {timeline.map((item, itemIdx) => (
                    <li key={item.id}>
                      <div className='relative pb-8'>
                        {itemIdx !== timeline.length - 1 ? (
                          <span
                            className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                            aria-hidden='true'
                          />
                        ) : null}
                        <div className='relative flex space-x-3'>
                          <div>
                            <span
                              className={classNames(
                                item.type.bgColorClass,
                                'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                              )}
                            >
                              <item.type.icon
                                className='w-5 h-5 text-white'
                                aria-hidden='true'
                              />
                            </span>
                          </div>
                          <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                            <div>
                              <p className='text-sm text-gray-500'>
                                {item.content}{' '}
                                <a
                                  href='#'
                                  className='font-medium text-gray-900'
                                >
                                  {item.target}
                                </a>
                              </p>
                            </div>
                            <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                              <time dateTime={item.datetime}>{item.date}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section
            aria-labelledby='timeline-title'
            className='lg:col-start-5 lg:col-span-1'
          >
            <div className='bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6'>
              <h2
                id='timeline-title'
                className='text-lg font-medium text-gray-900'
              >
                Your Next Volunteer Position
              </h2>
            </div>
            <ul className='space-y-3'>
              <li
                className='bg-white shadow overflow-hidden rounded-md px-6 py-4'
              >
                <div>
                  <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide'>
                    Documents
                  </h2>
                  <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    <li
                      className='col-span-1 flex shadow-sm rounded-md'
                    >
                      <div
                        className='flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                      >
                        D
                      </div>
                      <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
                        <div className='flex-1 px-4 py-2 text-sm truncate'>
                          <a
                            href='#'
                            className='text-gray-900 font-medium hover:text-gray-600'
                            target='_blank'
                            rel='noreferrer noopener'
                          >Event Title
                          </a>
                          <p className='text-gray-500'>Time</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}
