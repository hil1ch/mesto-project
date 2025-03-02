const popups = document.querySelectorAll('.popup');

export function openModal(popup) {
   document.addEventListener('keydown', closeByEscape);
   popup.classList.add("popup_is-opened");
}

export function closeModal(popup) {
   document.removeEventListener('keydown', closeByEscape);
   popup.classList.remove("popup_is-opened");
}

// Функция закрытия попапа на escape
export function closeByEscape(evt) {
   if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_is-opened');
      closePopup(openedPopup);
   }
}

// Закрытие попапа при нажатии на оверлей
popups.forEach((popup) => {
   popup.addEventListener('mousedown', (evt) => {
      if (
         evt.target.classList.contains('popup') ||
         evt.target.classList.contains('popup__close')
       ) {
         closePopup(popup);
       }
   });
})