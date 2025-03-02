// Функция для показа сообщения ошибки в input
export function showInputError(formElement, inputElement, errorMessage, settings) {
   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

   inputElement.classList.add(settings.inputErrorClass);
   errorElement.textContent = errorMessage;
   errorElement.classList.add('form__input-error_active');
}

// Функция для скрытия сообщения ошибки в input
export function hideInputError(formElement, inputElement, settings) {
   const errorElement = formElement.querySelector(`'${inputElement}-error`);

   inputElement.classList.remove(settings.inputErrorClass);
   errorElement.classList.remove('form__input-error_active');
   errorElement.textContent = '';
}

// Функция проверки валидации input
export function checkInputValidity(formElement, inputElement, settings) {
   if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, settings);
   } else {
      hideInputError(formElement, inputElement, settings);
   }
}

// Функция для проверки валидности всех input в коде
export function setEventListeners(formElement, settings) {
   const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
   const buttonElement = formElement.querySelector(settings.buttonSelector);

   toggleButtonState(inputList, buttonElement, settings);

   inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
         checkInputValidity(formElement, inputElement, settings);
         toggleButtonState(inputList, buttonElement, settings);
      });
   })
}

export function enableValidation(settings) {
   const formList = Array.from(document.querySelectorAll(settings.formSelector));
   formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
         evt.preventDefault();
      });
   })
}

export function hasInvalidInput(inputList) {
   return inputList.some((inputElement) => {
      return !inputElement.validity.valid ? true : false;
   })
}

// Фунция, изменяющая состояние кнопки
export function toggleButtonState(inputList, buttonElement, settings) {
   if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(settings.inactiveButtonClass);
   } else {
      buttonElement.classList.remove(settings.inactiveButtonClass);
   }
}