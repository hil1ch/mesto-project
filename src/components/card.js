import { openModal } from "./modal";
import { imagePopup } from "../index";
const placesList = document.querySelector(".places__list");

export function createCard(card) {
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