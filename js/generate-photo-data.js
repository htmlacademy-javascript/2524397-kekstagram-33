import { getRandomNumber } from './utils.js';
import {PHOTO_COUNTER, PHOTO_DESCRIPTIONS, COMMENT_MESSAGES, USER_NAMES} from './photo-data.js';


const getUserID = function () {
  let currentID = 0;
  return () => ++currentID;
};

const getUserIDWrapper = getUserID();

const getCommentID = function () {
  let currentID = 0;
  return () => ++currentID;
};

const getCommentIDWrapper = getCommentID();

const getRandomUserComment = function () {
  return {
    id: getCommentIDWrapper(),
    avatar: `img/avatar-${getRandomNumber(1,25)}.svg`,
    message: COMMENT_MESSAGES[getRandomNumber(0, COMMENT_MESSAGES.length - 1)],
    firstname: USER_NAMES[getRandomNumber(0, USER_NAMES.length - 1)],
  };
};

const getRandomUserPost = function () {
  return {
    id: getUserIDWrapper(),
    url: `photos/${getRandomNumber(1,25)}.jpg`,
    descriprion: PHOTO_DESCRIPTIONS[getRandomNumber(0, PHOTO_DESCRIPTIONS.length - 1)],
    likes: getRandomNumber(15, 200),
    comments: getRandomUserComment(),
  };
};

const createUsersPosts = () => Array.from({length: PHOTO_COUNTER}, getRandomUserPost);

export {createUsersPosts};
