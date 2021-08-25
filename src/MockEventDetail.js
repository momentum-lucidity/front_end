
------------------------------volunteerdash-------------------

<main className='py-10 bg-indigo-600 bg-opacity-5'>
<div className='max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8'>
  <div className='flex items-center space-x-5'>
    <div className='flex-shrink-0'>
      <div className='relative'>
        <img
          className='block h-28 w-auto'
          src={DCLogo}
          alt='Dream Big'
        />
      </div>
    </div>
    <div>
      <h1 className='text-3xl font-bold text-gray-900 mr-8'>
        Welcome, {authUser.display_name}
      </h1>
    </div>
    <VolunteerDashIntake token={token} authUser={authUser} />
  </div>
</div>

<div className='mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-2 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 sm:grid-cols-2'>

  <div className='space-y-6 lg:col-start-1 lg:col-span-1 row-span-5'>

    <div className='bg-white shadow sm:rounded-lg'>
      <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
        <VolunteerAnnouncements authUser={authUser} token={token} />
      </div>
    </div>

  </div>

  <section className=' grid row-span-1 lg:grid-flow-row-dense lg:col-start-5 lg:col-span-3'>
    <div className='bg-white space-y-3 px-4 py-5 shadow sm:rounded-lg sm:px-6'>
      <h2 className='text-2xl font-semibold text-gray-900'>
        Your Next Volunteer Position
      </h2>
      <div className='bg-white shadow rounded-md px-6 py-12'>

        <div className='mt-2 col-span-2 grid grid-cols-2'>
          <YourVolunteerSlots token={token} authUser={authUser} yourSlots={yourSlots} />
        </div>

      </div>
    </div>

  </section>

  <section className='lg:col-start-5 lg:col-span-3'>
    <div className='bg-white px-4 py-5 shadow sm:rounded-lg flex-initial sm:px-6'>
      <h1 className='text-2xl pb-1 font-semibold text-gray-900'>
        All Upcoming Events
      </h1>
      <VolunteerEvents authUser={authUser} token={token} allSlots={allSlots} yourSlots={yourSlots} setAllSlots={setAllSlots} />
    </div>
  </section>
</div>
</main>
</>
)
}


-----------------events----------

<section aria-labelledby='quick-links-title'>
<div className='rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px'>
  <h2 className='sr-only' id='quick-links-title'>
    Quick links
  </h2>
  {actions.map((action, actionIdx) => (
    <div
      key={action.name}
      className={classNames(
        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
        actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
        actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
        'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500'
      )}
    >
      <div>
        <span
          className={classNames(
            action.iconBackground,
            action.iconForeground,
            'rounded-lg inline-flex p-3 ring-4 ring-white'
          )}
        >
          <action.icon className='h-6 w-6' aria-hidden='true' />
        </span>
      </div>
      <div className='mt-8'>
        <h3 className='text-lg font-medium'>
          <a href={action.href} className='focus:outline-none'>
            {/* Extend touch target to entire panel */}
            <span className='absolute inset-0' aria-hidden='true' />
            {action.name}
          </a>
        </h3>
        <p className='mt-2 text-sm text-gray-500'>
          Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at
          blanditiis et quo et molestiae.
        </p>
      </div>
      <span
        className='pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400'
        aria-hidden='true'
      >
        <svg
          className='h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
        </svg>
      </span>
    </div>
  ))}
</div>
</section>