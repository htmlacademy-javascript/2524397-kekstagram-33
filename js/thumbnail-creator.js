const userPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const userPictureFragment = document.createDocumentFragment();

const renderPosts = (picturesContainer, createUsersPosts) => {
  createUsersPosts.forEach(({ url, description, likes, comments}) => {
    const photoElement = userPictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__img').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments;
    userPictureFragment.append(photoElement);
  });

  picturesContainer.append(userPictureFragment);
};

export {renderPosts};
