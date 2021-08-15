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

export const registrationInfo = (
  email,
  username,
  password,
  display_name,
  legal_name,
  pronouns,
  availability,
  telephone,
  address2,
  city,
  state,
  zipcode,
  preferred_event
) => {
  return axios.post("https://momentum-lucidity.herokuapp.com/auth/users/", {
    email: email,
    username: username,
    password: password,
    display_name: display_name,
    legal_name: legal_name,
    pronouns: pronouns,
    availability: availability,
    telephone: telephone,
    address2: address2,
    city: city,
    state: state,
    zipcode: zipcode,
    user_status: "volunteer",
    intake_status: "registered",
    preferred_event: preferred_event,
  });
};

export const adminRegistration = (
  email,
  username,
  password,
  display_name,
  legal_name,
  pronouns,
  availability,
  telephone,
  address2,
  city,
  state,
  zipcode,
  preferred_event
) => {
  return axios.post("https://momentum-lucidity.herokuapp.com/auth/users/", {
    email: email,
    username: username,
    password: password,
    display_name: display_name,
    legal_name: legal_name,
    pronouns: pronouns,
    availability: availability,
    telephone: telephone,
    address2: address2,
    city: city,
    state: state,
    zipcode: zipcode,
    user_status: "coordinator",
    intake_status: "approved",
    preferred_event: preferred_event,
  });
};

export const getVolunteerList = () => {
  return (
    axios
      .get('https://momentum-lucidity.herokuapp.com/users/')
      .then((res) => res.data)
  )
}

export const getEventsList = () => {
  return axios
    .get("https://momentum-lucidity.herokuapp.com/events/")
    .then((res) => res.data);
};

export const getUserDetails = (token, id) => {
  return (
    axios
      .get(`https://momentum-lucidity.herokuapp.com/users/${id}/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
      .then((res) => res.data)
  )
}

export const deleteUser = (token, id) => {
  return (
    axios
      .delete(`https://momentum-lucidity.herokuapp.com/users/${id}/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
  )
}

export const getAnnouncements = () => {
  return (
    axios
    .get('https://momentum-lucidity.herokuapp.com/announcements/')
    .then((res) => res.data)
  )
}

export const createAnnouncement = (alert_header, text) => {
  return (
    axios
    .post('https://momentum-lucidity.herokuapp.com/announcements/', {
      alert_header: alert_header,
      text: text
    })
    .then((res) => res.data)
  )
}
