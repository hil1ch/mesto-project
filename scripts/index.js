const placesList = document.querySelector(".places__list");
const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");

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

// Функция для отображения карточек
function createCard(card) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = card.link;
  cardTitle.textContent = card.name;

  // Лайк на карточки
  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__like-button_is-active");
    });

  // Удаление карточки
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", () => {
      cardElement.remove();
    });

  // Открытие попапа с картинкой
  cardElement.querySelector(".card__image").addEventListener("click", () => {
    imagePopup.querySelector(".popup__image").src = card.link;
    imagePopup.querySelector(".popup__caption").textContent = card.name;
    openModal(imagePopup);
  });

  placesList.append(cardElement);

  return cardElement;
}

initialCards.forEach((card) => {
  createCard(card);
});

//Функция открытия модальных окон
const profileFormElement = profilePopup.querySelector(".popup__form");

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

function openModal(popup) {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  popup.classList.add("popup_is-opened");
}

//Функция зыкрытия модальных окон
function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
}

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

// Добавление новой карточки
const cardFormElement = cardPopup.querySelector(".popup__form");
const inputNameForm = cardPopup.querySelector(".popup__input_type_card-name");
const inputUrlForm = cardPopup.querySelector(".popup__input_type_url");

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
