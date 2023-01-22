# Gists Reader
## Project setup

In the project directory run the following commands in order to install the project's dependencies

```
npm install
npm start
```

# Project description

This project's main purpose is to search for gists (a.k.a. github code snippets) using the Github API.

## Project features

1. `Latest Gists` - when the user starts the application there will be displayed the latest gists posted on Github.

2. `Filtering by Github username` - by typing a github username in the search input and pressing on submit (or "Enter" on the keyboard) the app will load the last 30 gists posted by that user. In case the input is empty and the form is submitted, the app will load once again the last 30 gists from Github.

3. `Viewing gist code` - by clicking on the "View Code" button present on each gist card on the interface, the app will open a modal with the code fetched from the Github API.

4. `Viewing gist details` - on each gist card there are loaded some details about that gist. For now, there are only displayed the description, programming languages and the last 3 forks of the snippet.


## Project design

The overall application design is not great, as it is only making use of a small color pallete, composed from black, white and shades of gray. However, there are some important things to mention about the app design

1. The application logo was created using an online logo generator.

2. All of the application's CSS code is organized using the `styled-components` library.


## Next features

The application in this moment is pretty small, containing only the basic functionality required for it to achieve its purpose. However, it would be cool to add some of the following features in the near future:

1. Add suggestions in the search input.

2. Filter by programming languages.

3. Implement Github OAuth in order for the user to easily access his own gists.

4. Add a newsletter subscription in order for any user to be notified when a gist is posted.

5. Implement a better interface design.


## Project architecture

All the code needed to further develop this project can be found in the `src` folder. It is organized in the following sub-folders:

```
src
├── components
├── images
├── services
├── shared
└──  types
```

Here is a short description for each folder:

1. `components` - this folder contains all the large components needed for the application (e.g. the Gists Cards or their container)

2. `images` - under this folder are placed all the static images from the application (e.g. the logo)

3. `services` - this folder contains the functions that call the Github API, either by using their library or by using the classic `fetch` 

4. `shared` - in here are all the reusable components (in this case it's only the modal and search components)

5. `types` - as its name suggests, in here are the type definitions for the data fetched from the API