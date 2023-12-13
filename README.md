# 🌟 Interactive Rating Component 🌟

This project is a challenge from [Frontend Mentor](https://www.frontendmentor.io). It's an interactive rating component that allows users to select and submit a number rating. After submitting a rating, users will see a "Thank you" card state. All interactive elements on the page have hover and focus states.

![Desktop Design preview for the Interactive rating component coding challenge](./design/desktop-design.jpg)
![Mobile Design preview for the Interactive rating component coding challenge](./design/mobile-design.jpg)

## 📚 Table of Contents 📚

1. [Overview](#overview)
2. [The Challenge](#the-challenge)
3. [Built With](#built-with)
4. [Getting Started](#getting-started)
5. [Features](#features)
6. [Useful Resources](#useful-resources)
7. [Author](#author)
8. [Acknowledgements](#acknowledgements)

## 🎯 Overview 🎯

This project is a simple interactive rating component. It's a great way to practice your HTML, CSS, and JavaScript skills. The design is provided by Frontend Mentor and you have to build it as close as possible to the given design.

## The Challenge

The challenge is to build out this interactive rating component and get it looking as close to the design as possible. You can use any tools you like to help you complete the challenge. Your users should be able to:

- Select and submit a number rating
- See the "Thank you" card state after submitting a rating
- See hover and focus states for all interactive elements on the page

## Built With

- HTML
- CSS
- JavaScript

## Getting Started

To get started, download the project and go through the `README.md` file. This will provide further details about the project and help you get set up.

## Features

This project has the following features:

- A rating component that allows users to select a number rating
- A "Thank you" card state that appears after a user submits a rating
- Hover and focus states for all interactive elements on the page

## Code Snippets

Here are some code snippets from the project:

**HTML (index.html)**
```html
<button id="submit-rating">Submit</button>
<section class="thank-you-after-rating" id="thank-you-state" style="display: none;">
  <div class="thank-you-image"></div>
  <div class="result-text">
    <h6>You selected <span id="rating-message"><!-- Add rating here --></span> out of 5</h6>
  </div>
  <h1>Thank you!</h1>
</section>
```

**CSS (styles/style.css)**
```css
.rating-option {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-blue);
  display: flex;
}

.rating-option:hover {
  background-color: var(--medium-gray);
  color: var(--white);
  cursor: pointer;
}

.rating-option.selected {
  background-color: var(--orange);
  color: var(--white);
}
```

**JavaScript (main.js)**
```javascript
var ratingOptions = document.querySelectorAll('.rating-option');
ratingOptions.forEach(function(option) {
  option.addEventListener('click', function() {
    // Remove 'selected' class from all options
    ratingOptions.forEach(function(opt) {
      opt.classList.remove('selected');
    });
    // Add 'selected' class to clicked option
    this.classList.add('selected');
  });
});
```

## Useful Resources

- [Frontend Mentor](https://www.frontendmentor.io) - This platform provides a variety of real-world projects that help you improve your coding skills.

## Author

- Twitter - [@cisco_research](https://twitter.com/cisco_research)
- Frontend Mentor - [@tuminha](https://www.frontendmentor.io/profile/tuminha)

## Acknowledgements

I would like to thank Frontend Mentor for providing this challenge. It was a great opportunity to improve my coding skills.

You can check out the live page [here](https://tuminha.github.io/interactive-rating-component/).

**Happy coding!** 🚀