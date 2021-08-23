import { useState } from 'react';
import { getAnnouncements, newAnnouncement } from '../../api';

export const CreateAnnoucements = (props) => {
  const { token, authUser, setAnnouncements, setLoading, setErrors } =
    props
  const [alertHeader, setAlertHeader] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(authUser.id)
    const user = authUser.id
    const success = await newAnnouncement([user], alertHeader, text, token)
      .then((res) => res.data)
      .catch((error) => {
        setErrors(error.message)
      })
    if (success) {
      getAnnouncements().then((data) => {
        setAnnouncements(data)
        setLoading(false)
      })
      setAlertHeader('')
      setText('')
    }
  }

  return (
    <main className='flex-1 relative focus:outline-none'>
      <div>
        <form className='space-y-5 my-8' onSubmit={handleSubmit}>
          <div className='space-y-8 divide-y divide-gray-200'>
            <div className='space-y-8'>
              <div>
                <label
                  htmlFor='announcement-heading'
                  className='block text-sm font-medium text-gray-700'
                >
                  Announcement Heading
                </label>
                <div className='mt-1'>
                  <input
                    id='announcement-heading'
                    name='announcement-heading'
                    value={alertHeader}
                    onChange={(event) => setAlertHeader(event.target.value)}
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md'
                  />
                </div>
              </div>

              <div className='sm:col-span-6'>
                <label
                  htmlFor='about'
                  className='block text-sm font-medium text-gray-700'
                >
                  Announcement Body
                </label>
                <div className='mt-1'>
                  <textarea
                    id='about'
                    name='about'
                    rows={2}
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md'
                    placeholder='Write your the body of your announcement here.'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='pt-1'>
            <div className='flex justify-end'>
              <button
                type='submit'
                className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none'
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
};
