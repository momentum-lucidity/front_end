import axios from "axios";

export const requestLogin = (username, password) => {
  return axios.post(
    "https://momentum-lucidity.herokuapp.com/auth/token/login/",
    {
      username: username,
      password: password,
    }
  );
};

export const getAuthUser = (token) => {
  return axios
    .get("https://momentum-lucidity.herokuapp.com/auth/users/me/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => res.data);
};

export const registrationInfo = (
  email,
  username,
  password,
  displayName,
  legalName,
  pronouns,
  availability,
  telephone,
  address2,
  city,
  state,
  zip,
  preferredEvent
) => {
  return axios.post("https://momentum-lucidity.herokuapp.com/auth/users/", {
    username: `${username}`,
    password: `${password}`,
    display_name: `${displayName}`,
    legal_name: `${legalName}`,
    pronouns: `${pronouns}`,
    availability: `${availability}`,
    email: `${email}`,
    telephone: `${telephone}`,
    address2: `${address2}`,
    city: `${city}`,
    state: `${state}`,
    zipcode: `${zip}`,
    user_status: "volunteer",
    intake_status: "registered",
    preferred_event: `${preferredEvent}`,
  });
};

export const adminRegistration = (
  email,
  username,
  password,
  displayName,
  legalName,
  pronouns,
  availability,
  telephone,
  address2,
  city,
  state,
  zip,
  preferredEvent
) => {
  return axios.post("https://momentum-lucidity.herokuapp.com/auth/users/", {
    username: `${username}`,
    password: `${password}`,
    display_name: `${displayName}`,
    legal_name: `${legalName}`,
    pronouns: `${pronouns}`,
    availability: `${availability}`,
    email: `${email}`,
    telephone: `${telephone}`,
    address2: `${address2}`,
    city: `${city}`,
    state: `${state}`,
    zipcode: `${zip}`,
    user_status: "coordinator",
    intake_status: "approved",
    preferred_event: `${preferredEvent}`,
  });
};

export const getVolunteerList = () => {
  return axios
    .get("https://momentum-lucidity.herokuapp.com/users")
    .then((res) => res.data.results);
};

export const getEventsList = () => {
  return axios
    .get("https://momentum-lucidity.herokuapp.com/events/")
    .then((res) => res.data);
};

export const getEventDetails = (token, id) => {
  return axios
    .get(
      `https://momentum-lucidity.herokuapp.com/events/${id}/`,
      {},
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);
};

export const getUserDetails = (token, id) => {
  return axios
    .get(
      `https://momentum-lucidity.herokuapp.com/users/${id}`,
      {},
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);
};

export const deleteEvent = (token, id) => {
  return axios.delete(
    `https://momentum-lucidity.herokuapp.com/events/${id}/`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }
  );
};

export const editUser = (
  token,
  id,
  username,
  password,
  displayName,
  legalName,
  pronouns,
  availability,
  email,
  telephone,
  address2,
  city,
  state,
  zip,
  userStatus,
  intakeStatus,
  preferredEvent
) => {
  return axios.put(
    `https://momentum-lucidity.herokuapp.com/auth/users/${id}/`,
    {
      username: username,
      password: password,
      display_name: displayName,
      legal_name: legalName,
      pronouns: pronouns,
      availability: availability,
      email: email,
      telephone: telephone,
      address2: address2,
      city: city,
      state: state,
      zipcode: zip,
      user_status: userStatus,
      intake_status: intakeStatus,
      preferred_event: preferredEvent,
    },
    {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const deleteUser = (token, id) => {
  return axios.delete(
    `https://momentum-lucidity.herokuapp.com/users/${id}/`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }
  );
};

export const getAnnouncements = () => {
  return axios
    .get("https://momentum-lucidity.herokuapp.com/announcements/")
    .then((res) => res.data);
};

export const newAnnouncement = ([user], alertHeader, text, token) => {
  return axios.post(
    "https://momentum-lucidity.herokuapp.com/announcements/",
    {
      user: [user],
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
};

export const deleteAnnouncement = (token, id) => {
  return (
    axios
      .delete(`https://momentum-lucidity.herokuapp.com/announcements/${id}`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
          }
        }
      )
  )
}

export const editAnnouncement = (token, id, user, alert_header, text) => {
  return (
    axios
      .put(`https://momentum-lucidity.herokuapp.com/announcements/${id}`,
      {
        user: [user],
        alertpk : `${id}`,
        alert_header: alert_header,
        text: text
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
  )
}

export const getAnnouncementDetails = (token, id) => {
  return axios
    .get(
      `https://momentum-lucidity.herokuapp.com/announcements/${id}/`,
      {},
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);
};

export const editEvent = (
  token,
  id,
  user,
  event_header,
  date,
  start_time,
  end_time,
  type,
  description
) => {
  return axios.put(
    `https://momentum-lucidity.herokuapp.com/events/${id}/`,
    {
      user: [user],
      event_header: event_header,
      date: date,
      start_time: start_time,
      end_time: end_time,
      type: type,
      description: description,
    },
    {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};
