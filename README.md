# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Задание урок 5.6 Hooks

1. Доработать финальный пример с урока:
    - У каждого товара есть кнопка удаления из корзины.
    - Рассчитывается финальная стоимость заказа.
2. Реализовать пользовательский хук useInputRequired().

В данном хуке, помимо возвращаемого значения и функций изменения(`onChange`), на событие `onBlur` повесить логику обязательного/необязательного поля с возможностью передачи флага `required` вторым параметром хука. Ошибка должна храниться отдельным состоянием. То есть, если поле ввода будет пустым и не в фокусе, то возникнет предупреждение, что данное поле обязательно должно быть заполнено.

Можете создать отдельную компоненту или придумать как добавить к основной рабочей ветке.
.