import { useState } from "react";
import axios from "axios";

export const CreateAnnoucements = (props) => {
  const { token, authUser } = props;
  const [alertHeader, setAlertHeader] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    axios.post(
      "https://momentum-lucidity.herokuapp.com/announcements/",
      {
        user: [authUser.id],
        alert_header: alertHeader,
        text: text,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    event.preventDefault();
    setAlertHeader('')
    setText('')
  };

  return (
      <main className='flex-1 relative focus:outline-none'>
        <div className="py-6">
          <form
            className="space-y-8 divide-y divide-gray-200"
            onSubmit={handleSubmit}
          >
            <div className="space-y-8 divide-y divide-gray-200 sm:border-t sm:border-gray-200">
              <div className="pt-8 space-y-8 ">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Add A New Announcement
                  </h3>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="announcement-heading"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Announcement Heading
                  </label>
                  <div className="mt-1">
                    <input
                      id="announcement-heading"
                      name="announcement-heading"
                      value={alertHeader}
                      onChange={(event) => setAlertHeader(event.target.value)}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Announcement Body
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      value={text}
                      onChange={(event) => setText(event.target.value)}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Write your the body of your announcement here.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
          {/* /End replace */}
        </div>
        </main>
  );
}
