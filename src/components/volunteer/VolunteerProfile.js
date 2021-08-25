import { VolunteerDashIntake } from './VolunteerDashIntake.js'
import { VolunteerHeader } from './VolunteerHeader.js'
import { VolunteerProfileSectionHeader } from './VolunteerProfileSectionHeader.js'

export const VolunteerProfile = (props) => {
  const { token, authUser } = props
  return (
    <div>
      <div className='relative min-h-screen bg-indigo-400 bg-opacity-5'>
        <VolunteerHeader authUser={authUser} token={token} />
        <main className='flex-1 mt-8 relative overflow-y-auto focus:outline-none'>
          <div className='bg-white px-6 mx-32 shadow overflow-hidden sm:rounded-lg'>
            <div className='px-4 pt-4 sm:px-12' />
            <VolunteerProfileSectionHeader authUser={authUser} token={token} />
            <div className='border-t border-gray-200 px-4 py-5 sm:px-12'>
              <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                <div className='sm:col-span-1'>
                  <dt className='text-md font-medium text-gray-500'>Full name</dt>
                  <dd className='mt-1 text-sm text-gray-900'>Legal Name: {authUser.legal_name}</dd>
                  <dd className='mt-1 text-sm text-gray-900'>Username: {authUser.username}</dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-md font-medium text-gray-500'>Personal Identifiers</dt>
                  <dd className='mt-1 text-sm text-gray-900'>Preferred Name: {authUser.display_name}</dd>
                  <dd className='mt-1 text-sm text-gray-900'>Pronouns: {authUser.pronouns}</dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-md font-medium text-gray-500'>Contact Information</dt>
                  <dd className='mt-1 text-sm text-gray-900'>{authUser.telephone}</dd>
                  <dd className='mt-1 text-sm text-gray-900'>{authUser.email}</dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-md font-medium text-gray-500'>Address</dt>
                  <dd className='mt-1 text-sm text-gray-900'>{authUser.address2}</dd>
                  <dd className='mt-1 text-sm text-gray-900'>{authUser.city}, {authUser.state}  {authUser.zipcode}</dd>
                </div>
                <div className='sm:col-span-2'>
                  <dt className='text-md font-medium text-gray-500'>Notes</dt>
                  <dd className='mt-1 text-sm text-gray-900'>Availability: {authUser.availability}</dd>
                  <dd className='mt-1 text-sm text-gray-900'>Preferred Event Types: {authUser.preferred_event}</dd>
                </div>
                <div className='sm:col-span-2'>
                  <dt className='text-md mb-2 font-medium text-gray-500'>Volunteer Intake Status</dt>
                  <VolunteerDashIntake token={token} authUser={authUser} />

                </div>
              </dl>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
