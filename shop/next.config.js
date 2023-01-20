/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_FIREBASE_API_KEY: "AIzaSyAXCXt5aYbs0QUJrUSZje_R4_BYJrplERk",
    REACT_APP_FIREBASE_AUTH_DOMAIN: "shoppy-bd1c0.firebaseapp.com",
    REACT_APP_FIREBASE_DB_URL:
      "https://shoppy-bd1c0-default-rtdb.asia-southeast1.firebasedatabase.app",
    REACT_APP_FIREBASE_PROJECT_ID: "shoppy-bd1c0",
    UNDSIGNEDKEY: "eu4vtx3f",
  },
};

module.exports = nextConfig;
