# Horned Beasts

**Horned Beasts** is a student coding project that will create a JavaScript React application that will display images and information of horned animals. The application will allow you to filter the images by number of horns and chose your favorite image.

Developer: Manuch Sadri  
Tools: Visual Studio Code, React, React-Bootstrap, Netlify

---

## Lab 04

### Feature Requirements 04

- Feature #1: Filter by Numbers of Horns
  - As a user, I want to be able to view the beasts by the number of horns.

### Time Estimate Tracking 04

| Number & Name of Feature | #1: Display Display Modal |
|--------------------------|-------|
| Est. Time to Complete    | 03:00 |
| Start Time               | 19:00 |
| Finish Time              | 22:30 |
| Actual Time to Complete  | 03:30 |

---

## Lab 03

### Feature Requirements 03

- Feature #1: Display a Modal
  - As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image

- Stretch Goal: Fuzzy search
  - As a user, I want the ability to search my images so that I can view only the images containing specific titles or keywords.

### Time Estimate Tracking 03

| Number & Name of Feature | #1: Display Display Modal | Stretch: Search |
|--------------------------|-------|-------|
| Est. Time to Complete    | 02:00 | --:-- |
| Start Time               | 15:00 | --:-- |
| Finish Time              | unknown | --:-- |
| Actual Time to Complete  | unknown | --:-- |

---

## Lab 02

### Feature Requirements 02

- Feature #1: Display images
  - As a user, I want to view the images on the page so that I can browse the photo collection.

- Feature #2: Allow users to vote for their favorite beast
  - As a user, I want to be able to interact with the site and pick my favorite beast.

- Feature 3: Bootstrap
  - As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.

- Stretch Goal: Add Interaction
  - As a user, I want to be able to interact with each item on the page.

### Time Estimate Tracking 02

| Number & Name of Feature | #1: Display Images | #2: User Vote | #3: Bootstrap | Stretch: Interaction |
|--------------------------|--------------------|---------------|---------------|----------------------|
| Est. Time to Complete    | 01:00 | 00:30 | 00:30 | --:-- |
| Start Time               | 21:00 | 22:35 | 21:50 | --:-- |
| Finish Time              | 21:45 | 23:25 | 22:35 | --:-- |
| Actual Time to Complete  | 00:45 | 00:50 | 00:45 | --:-- |

---

## Lab 01

Feature Tasks:

- Complete the following steps to setup your repository:
  - Create a React application using `create-react-app` as demonstrated in class.
    - Use the command `npx create-react-app <repo-name>`.
  - Create a new repository on GitHub WITHOUT a README.md. We will import an “existing” repository with its own README
  - Follow the instructions given by GitHub to “push an existing repository from the command line” be sure to select HTTPS or SSH, whichever is relevant for you
  - Create a Branch and begin your work. As always, ACP often
- Your `App` component should render a `Header`, `Footer`, and `Main` component, each of which is defined in their own files.
- Your `Header` component needs to have an `<h1>` with a title.
- Your `Footer` component needs to contain your name as the author.
- The `Main` component needs to render at least two copies of a component called `HornedBeast`.
- The `Main` component needs to pass `title`, `imageUrl`, and `description` into each `HornedBeast` component. For the purpose of today’s lab, you can pass whatever title, url and description that you want into each `HornedBeast` commponent.
- The `HornedBeast` component needs to contain an `<h2>` that displays the title of the animal, an `<img`> element with `src`, `alt`, and `title` attributes, and a `<p>` that displays the description.
