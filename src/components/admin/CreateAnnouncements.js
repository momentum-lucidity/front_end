import { AdminHeader } from './AdminHeader'

const activityItems = [
  {
    announcement_id: 1,
    person: 'Lauren',
    title: 'Coaching sign-ups',
    announcement_text: 'Sign ups for coaching postition will being Monday Sept 9.  We will have 9 available spots.',
    date: 'Sept 1, 2021'
  },
  {
    announcement_id: 2,
    person: 'Lauren',
    title: ' Urgent - After School Volunteer Needed',
    announcement_text: 'We urgently need an open volunteer slot to be filled for Wed and Thurs afternoons with our after school program.  If you are able to help out please sign up under the events section.',
    date: 'Sept 2, 2021'
  },
  {
    announcement_id: 3,
    person: 'Maria',
    title: 'Fall Festival Meeting',
    announcement_text: 'Our final organization meeting for the 2021 fall festival will be held on Sept 28th at 7:30 pm',
    date: 'Sept 2, 2021'
  }
]

export const CreateAnnouncements = () => {
  return (
    <>
      <AdminHeader />
      <div>
        <ul className='divide-y divide-gray-200'>
          {activityItems.map((activityItem) => (
          <li key={activityItem.id} className='py-4'>
            <div className='flex space-x-3'>
              <div className='flex-1 space-y-1'>
                <div className='flex items-center justify-between'>
                  <p className='text-sm text-gray-500'>{activityItem.date}</p>
                  <h3 className='text-sm font-medium'>{activityItem.title}</h3>
                  <p className='text-sm text-gray-500'>posted by: {activityItem.person}</p>
                </div>
                <p className='text-sm text-gray-500'>
                  {activityItem.announcement_text}
                </p>

              </div>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </>
  )
}
