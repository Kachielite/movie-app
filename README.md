# Movie Planet - Movie Catalogue App

Welcome to Movie Planet, a feature-rich movie application that allows users to explore a vast catalogue of movies and
access
detailed information about each film. With Movie Planet, you can easily find essential details such as the crew, cast,
release
dates, similar movies, reviews, and recommendations.

## Key Features:

- **Multiple Categories:** Movies are conveniently sorted into various categories, including "Now Playing," "Top
  Rated," "Trending," "Popular," "Upcoming," and by genre, making it simple to discover your preferred films.

- **Infinite Scroll:** Enjoy a seamless browsing experience with our infinite scroll feature. As you scroll through a
  category, Movie Planet automatically loads more movies at the bottom, so you can keep exploring without interruption.

- **Powerful Search:** Looking for a specific movie? Movie Planet's robust search functionality allows you to quickly
  find any
  movie in the catalogue and access comprehensive information.

- **Watchlist:** Save movies of interest to your personalized watchlist for easy access later on. Never miss a movie you
  want to watch!

- **Movie Trailers:** Get a sneak peek before watching a film. Movie Planet enables you to view trailers directly within
  the
  app.

## Data Source:

Movie Planet fetches its movie data from TheMovieDB API, ensuring that you have access to an extensive and up-to-date
collection of movies.

## Technologies Used:

Movie Planet is built with modern technologies to provide a smooth and enjoyable user experience. Here are the main
technologies used:

- **Typescript:** The app is written in Typescript, which enhances code reliability and maintainability.

- **React:** I leverage the power of React, a popular JavaScript library, to build a dynamic and interactive user
  interface.

- **Redux:** For efficient state management, I use Redux, ensuring a consistent application state and seamless data
  flow.

- **Tailwind CSS:** Movie Planet is styled using Tailwind CSS, a utility-first CSS framework that enables us to create a
  visually stunning app with ease.

## Design Attribution:

The original design was created by **Anastasia Shlykova**. You can find her work on Figma [here](https://www.figma.com/@anashlykova). The design was modified and adapted to suit the current use case of the Movie Planet app.

# To Visit App:

[Movie App](https://mplanet.netlify.app/)

## Project Screen Shot

### Homepage

<img width="800" alt="homepage" src="./images/homepage.png">

### Category Page (Now Playing)

<img width="800" alt="now playing" src="./images/now_playing.png">

### Genre Page

<img width="800" alt="genre" src="./images/genre.png">

### Movie Details Page

<img width="800" alt="home" src="./images/movi.png">

### Cast Details page

<img width="800" alt="home" src="./images/cast.png">

## Reflection:

Developing Movie Planet has been an exciting journey for me. Throughout the development process, I faced various
challenges and learning opportunities. Some key takeaways from this project include:

- **API Integration:** Working with TheMovieDB API taught me valuable lessons in handling external data sources and
  effectively managing API calls within the app.

- **State Management:** Implementing Redux as our state management solution allowed me to centralize data and maintain a
  smooth flow of information across different components.

- **Infinite Scroll:** Designing the infinite scroll feature was a very challenging and rewarding experience, as it greatly enhanced the user
  experience by providing continuous content without the need for pagination.

- **Tailwind CSS:** Adopting Tailwind CSS simplified our styling process and enabled me to create a visually appealing
  user interface with minimal effort.

I am proud of the final product and hope that Movie Planet will bring joy and entertainment to its users. As I continue to
enhance the app, I welcome your feedback and contributions to make Movie Planet even better.

## Get Started:

To start using Movie Planet, follow these steps:

1. Clone the repository: `git clone https://github.com/Kachielite/movie-app`
2. Install dependencies: `npm install`
3. Rename the .env.example file to .env.local in the root directory of the project: `mv .env.example .env.local`
4. Get your API Read Access Token from TheMovieDB website:
  - Visit [TheMovieDB website](https://www.themoviedb.org/) and create an account (if you don't have one).
  - After creating an account, sign in and navigate to your account settings.
  - Go to the "API" section and request an API key for the Movie Database API (TMDb API).
  - Copy the API Read Access Token provided by TheMovieDB.
5. Open the .env.local file with a text editor, and add your API Read Access Token as the value for the `REACT_APP_ACCESS_TOKEN`
6. Save the .env.local file after adding your API Read Access Token.
7. Run the development server: `npm start`
8. Open `http://localhost:3000` in your web browser.

I hope you enjoy using Movie Planet to discover exciting movies and stay entertained. Feel free to contribute, report
issues, or suggest improvements. Happy movie browsing! 🎬🍿


