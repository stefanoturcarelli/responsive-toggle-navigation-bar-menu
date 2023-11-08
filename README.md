# Grid Toggle Menu

## Description

This project is a toggle menu with a grid layout. It allows users to open and close the menu by clicking a button. The menu button is designed to expand the left column when opened.

## Table of Contents

- [Project Structure](#project-structure)
- [HTML Structure](#html-structure)
- [CSS Styling](#css-sytling)
- [JavaScript Logic](#javascript-logic)
- [Technologies used](#technologies-used)
- [Demo](#demo)
- [License](#license)
- [References](#references)

## HTML Structure

To start creating this project first lay down the HTML structure as follows:

```html
<body>
  <div class="grid">
    <div class="left">
      <div class="menu-btn"></div>
    </div>
    <div class="right"></div>
  </div>
</body>
```

## CSS Styling

Start building the style with the properties for the grid (the parent element):

```css
.grid {
  display: grid;
}
```

Next, define and size the two columns using the `grid-template-columns` property. Make the `left` column narrow. Later we will increase its width on click. The right column takes up the rest of the remaining space, thanks to the `auto` keyword.

```css
.grid {
  display: grid;
  grid-template-columns: 48px auto;
}
```

Add the `transition` property to the grid to animate it.

```css
.grid {
  transition: 300ms;
}
```

Grid with menu closed:

<img src = './assets/screenshot.png'>

Grid with menu opened:

<img src = './assets/screenshot-open.png'>

## JavaScript Logic

The logic behind the functionality results by toggling between an open and close CSS classes.

Start by selecting the HTML elements:

```javascript
const grid = select('.grid');
const menuBtn = select('.menu-btn');
```

The CSS classes we will toggle between are the following:

This CSS class will expand the left grid column.

```css
.grid-open {
  transition: 300ms ease-in-out;
  grid-template-columns: 80% auto;
}
```

This CSS class shows the hamburger menu icon and sets its size.

```css
.menu-btn {
  height: 3rem;
  background-color: #ffe2e2;
  cursor: pointer;
  background: center no-repeat url('./menu.png');
  background-size: 2rem;
  transition: all 0.1s ease-in-out;
}
```

    This CSS class shows the arrow icon after opening the menu.

```css
.btn-container-open {
  background: right no-repeat url('./close.png');
  background-size: 2rem;
  background-position: right 0.5rem top 0.5rem;
  transition: all 0.1s ease-in-out;
}
```

Create a function called `openMenu()` that will toggle between classes.

```javascript
function openMenu() {
  grid.classList.toggle('grid-open');
  menuBtn.classList.toggle('btn-container-open');
}
```

Add an event listener that will call the function `openMenu()` when you click on the menu button

```javascript
onEvent('click', menuBtn, () => {
  openMenu();
});
```

## Technologies Used

This project uses the following technologies and languages:

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Demo

You can [see a demo here](https://stefanoturcarelli.github.io/grid-toggle-menu/)

## License

This project is licensed under the [MIT License](LICENSE).

## References

- <a href = 'https://css-tricks.com/animating-css-grid-how-to-examples/' target = '_blank'>CSS tricks - Animating CSS Grid (How To + Examples)</a>
