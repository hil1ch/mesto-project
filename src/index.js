// index.js
import '../pages/index.css';

import { createCard } from './components/card';
import { openModal, closeModal } from './components/modal';
import { enableValidation} from './components/validate';

const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");
export const imagePopup = document.querySelector(".popup_type_image");

//Функция открытия модальных окон
const profileFormElement = profilePopup.querySelector(".popup__form");

export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(".popup__input_type_description");

export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(".profile__description");

// Добавление новой карточки
const cardFormElement = cardPopup.querySelector(".popup__form");
const inputNameForm = cardPopup.querySelector(".popup__input_type_card-name");
const inputUrlForm = cardPopup.querySelector(".popup__input_type_url");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

initialCards.forEach((card) => {
  createCard(card);
});

// Открытие попапа редактирования профиля
const profileButton = document.querySelector(".profile__edit-button");
profileButton.addEventListener("click", () => {
  openModal(profilePopup);
});

// Закрытие попапа редактирования профиля
const profileCloseButton = profilePopup.querySelector(".popup__close");
profileCloseButton.addEventListener("click", () => {
  closeModal(profilePopup);
});

// Редактирование имени и информации о себе
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  // Получаем значения из полей ввода
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  // Вставляем новые значения в элементы профиля
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;

  closeModal(profilePopup);
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

// Открытие и закрытие попапа добавления новой карточки
const profileAddButton = document.querySelector(".profile__add-button");
profileAddButton.addEventListener("click", () => {
  openModal(cardPopup);
});

const cardClosePopup = cardPopup.querySelector(".popup__close");
cardClosePopup.addEventListener("click", () => {
  closeModal(cardPopup);
});

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const nameValueFrom = inputNameForm.value;
  const urlValueForm = inputUrlForm.value;

  const card = {
    name: nameValueFrom,
    link: urlValueForm,
  };

  createCard(card);
  closeModal(cardPopup);
}

cardFormElement.addEventListener("submit", handleCardFormSubmit);

// Закрытие попапа с картинкой
const imagePopupClose = imagePopup.querySelector('.popup__close');
imagePopupClose.addEventListener('click', () => {
  closeModal(imagePopup);
});

// Создание объекта с настройками валидации

const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation(validationSettings);
