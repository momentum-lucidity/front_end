import axios from "axios";
import { Link } from "react-router-dom";

export const AdminLogout = ({ token, setToken, setAuthUser }) => {
  axios
    .post(
      "https://momentum-lucidity.herokuapp.com/auth/token/logout/",
      {},
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(() => {
      setToken("");
      setAuthUser("");
    });

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              You have successfully logged out!
            </h2>
          </div>
          <div>
            <Link to="/">
              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Return to login page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
