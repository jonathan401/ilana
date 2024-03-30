---
isDraft: false
title: "Frontendmentor"
description: "This is the second post of my Astro blog."
publishDate: 2023-09-23
tags: ["fem", "astro"]
---

## My second post

This is the second post I'll be writing. Hoping to explain how I build stuff this should wrap around here should it not?

This is testing about the readme file

- I started out by structuring out the page content in HTML. This helped me create a mental map of how each section of the page were related and also added classnames using the BEM methodology.

- After structuring the html, I then proceeded to add styling using SCSS trying to work my way down the document. I applied the Mobile-first workflow although I had to go with the desktop first-workflow for the navigation (particularly the accordions) because I felt it was easier to build out the accordion for larger screens since it required less styling compared to the mobile view.

- To create the accordion and nav menu button functionality, I used html custom data attributes and aria values to toggle the visibilty of the accordion content and navigation meny respectively.

- A skip link was also included to help users navigate easily to the main content without having to go through the navigation menu if they so desired.

- SCSS Document structure:
  - abstracts - to hold global app variables
  - components - to hold resuabe components
  - regions - to hold sections of the website

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SCSS For styling

### What I learned

- This project challenged my stying skills. I had previously built it out using 'vanilla CSS' but the code became too long and hard for me to understand. So I decided to use SCSS which made it so much easier to break up the project into chunks that was easy to understand.

- One particular part of the project that got me almost frustrated was the feature section. An image is provided below:

I had initially tried using CSS abosolute positioning to recreate it but discovered that I'll have to undo and write a lot of styles to make sure that the desktop version was close to the design. So I used CSS grid which turned out to be the best solution I found to creating overlapping content. The code below:

```scss
 &--stacked {
    display: grid;

    & > * {
      grid-area: 1 / -1;
    }
```

creates a grid and the line `& > *` makes all children in the grid fill the grid space, making them overlap, I used margins to create the spaces between both contents in the grid. To add the background image provided in the design, I had to add an empty `div` element to serve as the 'back' of the feature card, I had tried using the `::after` psuedo element for this but it did not work out.

- When using BEM, I discovered that my block structure was becoming increasingly complex. For example:

```html
<nav class="nav">
  <a href="#" class="nav__home-link">Site name</a>
  <ul class="nav__link-list">
    <li class="nav__link-list-item">
      <a href="#" class="nav__link-list-item-link">link</a>
    </li>
  </ul>
</nav>
```

![](../../../public/placeholder-post-image.avif)
