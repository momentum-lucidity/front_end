import React from 'react'

export const Registration = () => {
  return (
    <>
      <div className='mt-10 sm:mt-0'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>Registration Information</h3>
              <p className='mt-1 text-sm text-gray-600'>Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form action='#' method='POST'>
              <div className='shadow overflow-hidden sm:rounded-md'>
                <div className='px-4 py-5 bg-white sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='legal-name' className='block text-sm font-medium text-gray-700'>
                        Legal name
                      </label>
                      <input
                        type='text'
                        name='legal-name'
                        id='legal-name'
                        autoComplete='given-name'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='preferred-name' className='block text-sm font-medium text-gray-700'>
                        Preferred name
                      </label>
                      <input
                        type='text'
                        name='preferred-name'
                        id='preferred-name'
                        autoComplete='family-name'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='email-address' className='block text-sm font-medium text-gray-700'>
                        Email address
                      </label>
                      <input
                        type='text'
                        name='email-address'
                        id='email-address'
                        autoComplete='email'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                        Password
                      </label>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        placeholder='Password'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                        Verify Password
                      </label>
                      <input
                        id='verify-password'
                        name='verify-password'
                        type='password'
                        autoComplete='current-password'
                        required
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        placeholder='Password'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='street-address' className='block text-sm font-medium text-gray-700'>
                        Street address
                      </label>
                      <input
                        type='text'
                        name='street-address'
                        id='street-address'
                        autoComplete='street-address'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='city' className='block text-sm font-medium text-gray-700'>
                        City
                      </label>
                      <input
                        type='text'
                        name='city'
                        id='city'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='state' className='block text-sm font-medium text-gray-700'>
                        State / Province
                      </label>
                      <input
                        type='text'
                        name='state'
                        id='state'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='postal-code' className='block text-sm font-medium text-gray-700'>
                        ZIP / Postal
                      </label>
                      <input
                        type='text'
                        name='postal-code'
                        id='postal-code'
                        autoComplete='postal-code'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='phone-number' className='block text-sm font-medium text-gray-700'>
                        Phone Number
                      </label>
                      <div className='mt-1 relative rounded-md shadow-sm'>
                        <input
                          type='text'
                          name='phone-number'
                          id='phone-number'
                          className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md'
                          placeholder='+1 (555) 987-6543'
                        />
                      </div>
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='preferred-language' className='block text-sm font-medium text-gray-700'>
                        Preferred Language
                      </label>
                      <select
                        id='preferred-language'
                        name='preferred-language'
                        className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
                        defaultValue='English'
                      >
                        <option>English</option>
                        <option>Spanish</option>
                      </select>
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='preferred-events' className='block text-sm font-medium text-gray-700'>
                        Preferred Events
                      </label>
                      <fieldset className='space-y-5'>
                        <legend className='sr-only'>I'm interested in helping with these events</legend>
                        <div className='relative flex items-start'>
                          <div className='flex items-center h-5'>
                            <input
                              id='soccer'
                              name='Soccer Games'
                              type='checkbox'
                              className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                            />
                          </div>
                          <div className='ml-3 text-sm'>
                            <label htmlFor='soccer' className='font-medium text-gray-700'>
                              Soccer Games
                            </label>
                          </div>
                        </div>
                        <div>
                          <div className='relative flex items-start'>
                            <div className='flex items-center h-5'>
                              <input
                                id='afterschool'
                                aria-describedby='afterschool'
                                name='afterschool'
                                type='checkbox'
                                className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                              />
                            </div>
                            <div className='ml-3 text-sm'>
                              <label htmlFor='afterschool' className='font-medium text-gray-700'>
                                After School Care
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className='relative flex items-start'>
                            <div className='flex items-center h-5'>
                              <input
                                id='diapers'
                                aria-describedby='offers-description'
                                name='diapers'
                                type='checkbox'
                                className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                              />
                            </div>
                            <div className='ml-3 text-sm'>
                              <label htmlFor='diapers' className='font-medium text-gray-700'>
                                Diaper Drive
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='availibility' className='block text-sm font-medium text-gray-700'>
                        Availibility
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text-area'
                          name='availibility'
                          id='availibility'
                          className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                          aria-describedby='availibilty-description'
                        />
                      </div>
                      <p className='mt-2 text-sm text-gray-500' id='availibility-description'>
                        List your preferred times for volunteer opportunites.
                      </p>
                    </div>

                    <div className='col-span-6 sm:col-span-4' />

                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
