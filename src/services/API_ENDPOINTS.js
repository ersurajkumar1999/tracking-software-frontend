// Users end points 
const AUTH_LOGIN = "auth/login";
const AUTH_SIGNUP = "auth/signup";
const LOGIN_WITH_GOOGLE = 'auth/login-with-google';

// Common end points
const PROFILE = "profile";
const UPDATE_PROFILE = "update-profile";
const CHECK_USER_NAME_EXISTS = "check-username-exists";

// post
const CREATE_POST = "post/create";
const POSTS = "posts";


// user chat
const SEARCH_USER = "search-users";
const FETCH_ALL_CHATS = "fetch-all-chats";

const USER_LIST_FOR_CONNECTIONS = "user-list-for-connections";
const MY_RECEIVED_CONNECTIONS = "my-received-connections";
const MY_SEND_CONNECTIONS = "my-send-connections";

// connections
const SEND_REQUEST = "send-request";
const ACCEPT_REQUEST = "accept-request";

// Social Media
const UPDATE_SOCIAL_MEDIA = 'update-social-media';

// image 
const IMAGE_UPLOAD = "image-upload";

// users

const USERS = 'users';


// Exporting all variables at once
export {
    AUTH_LOGIN, AUTH_SIGNUP, LOGIN_WITH_GOOGLE,
    PROFILE, CHECK_USER_NAME_EXISTS,
    POSTS, CREATE_POST, UPDATE_PROFILE, SEARCH_USER, FETCH_ALL_CHATS, USER_LIST_FOR_CONNECTIONS,
    MY_RECEIVED_CONNECTIONS, MY_SEND_CONNECTIONS, SEND_REQUEST, ACCEPT_REQUEST, UPDATE_SOCIAL_MEDIA,
    USERS, IMAGE_UPLOAD
};