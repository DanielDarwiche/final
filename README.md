# React Portfolio SPA

A React app to display a list of repositories from Github.

## Project Description

This project is a React web application that displays a list of repositories from my Github account. It makes use of the Github API to fetch the repository data and renders it on the web page.

## Technical Choices

In building this application, several technical choices were made to ensure accessibility, semantic markup, compatibility, and responsiveness. These choices include:

-Use of React Hooks for state management.
-Some use of semantic HTML markup to improve accessibility and SEO.
-Use of responsive design to ensure the application displays well on different devices and screen sizes.
-Use of the Github API to fetch repository data.
-Use of conditional rendering to display the loading message when fetching data.
-Use of unique and meaningful id and key attributes for each list item to ensure compatibility with React's virtual DOM and improve performance.

## Web Accessibility and Semantic HTML
All text displayed on the website have high contrast against the background, so that people with visual impairments can easily read the text. Links have descriptive text, so that users can understand what will happen when they click on the links.
There is only one HTML file though.
Semantic tags are marked with HTML tags indicating what the content is( <h1>, <h2>, <ul>, <strong>).
Some parts of the React library might not work in older browsers but it is ok since the project was to create a react SPA.
CSS is used to style the page using a media screen query, so responsive design is written.

### Conclusion
This is a super simple but effective React web application that demonstrates how to fetch and display data from an API.  

