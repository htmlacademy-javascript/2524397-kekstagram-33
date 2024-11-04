const PHOTO_COUNTER = 25;
const PHOTO_DESCRIPTIONS = ['хорошее фото', 'нормальное фото', 'неудачное фото'];
const COMMENT_MESSAGES = ['Всё отлично!','В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const USER_NAMES = ['Антон','Александр','Алексей','Бездомный','Валерий','Владимир','Валентин','Воланд'];

const getRandomNumber = function (a, b) {
  const lowerValue = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upperValue = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const resultValue = Math.random() * (upperValue - lowerValue + 1) + lowerValue;
  return Math.floor(resultValue);
};

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

const usersPosts = Array.from({length: PHOTO_COUNTER}, getRandomUserPost);

//Чтобы линт не ругался на не использование переменной
usersPosts.forEach();
