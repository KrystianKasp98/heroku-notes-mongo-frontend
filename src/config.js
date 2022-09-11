const isLocal = window.location.href.includes("localhost");

const config = {
  HOST: isLocal
    ? "http://localhost:5000/"
    : "https://heroku-notes-mongo-backend.herokuapp.com/",
};

export default config;