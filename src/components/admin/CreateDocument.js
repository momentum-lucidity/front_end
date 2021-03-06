import { useState } from "react";
import { getDocuments, createDocument } from "../../api";

export const CreateDocument = (props) => {
  const { token, authUser, setDocuments, setLoading, setErrors } = props;
  const [docHeader, setDocHeader] = useState("");
  const [url, setUrl] = useState("");
  const user = authUser.id;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(authUser.id);
    const success = await createDocument([user], docHeader, url, token)
      .then((res) => res.data)
      .catch((error) => {
        setErrors(error.message);
      });
    if (success) {
      getDocuments().then((data) => {
        setDocuments(data);
        setLoading(false);
        setDocHeader("");
        setUrl("");
      });
    }
  };

  return (
    <main className="flex-1 relative focus:outline-none">
      <div>
        <form className="space-y-5 my-8" onSubmit={handleSubmit}>
          <div className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 ">
              <div>
                <label
                  htmlFor="announcement-heading"
                  className="block text-sm font-medium text-gray-700"
                >
                  Resource Heading
                </label>
                <div className="mt-1">
                  <input
                    id="announcement-heading"
                    name="announcement-heading"
                    value={docHeader}
                    onChange={(event) => setDocHeader(event.target.value)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="announcement-body"
                  className="block text-sm font-medium text-gray-700"
                >
                  Resource URL
                </label>
                <div className="mt-1">
                  <input
                    id="announcement-body"
                    name="announcement-body"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
