import {createUsersPosts} from './generate-photo-data';
import {renderPosts} from './thumbnail-creator.js';
const picturesContainer = document.querySelector('.pictures');

renderPosts(picturesContainer, createUsersPosts);
