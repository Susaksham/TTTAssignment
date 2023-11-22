# Next.js Project with Styled Components

This Next.js project leverages styled components for a seamless styling experience and is comprised of five key components:

1. **NavBar**
2. **Profile**
3. **Posts**
4. **Post**
5. **EngagementStats**

The page.js file orchestrates the three primary components:

1. **NavBar**
2. **Profile**
3. **Posts**

## Data Structure

User information is fetched from the **user.json** file, populating the **userDetails** state in **page.js**. The user data follows this structure:

```

{
  "id": "1",
  "backgroundImage": {
    "src": "/assets/backgroundImage.webp",
    "alt": "background image"
  },
  "profileImage": {
    "src": "/assets/profilePicture.2cce0b6a.png",
    "alt": "profile image"
  },
  "name": "Anuj Gosalia",
  "followStats": {
    "followers": 6482,
    "following": 245
  },
  "bio": "Co-founder & CEO at Terribly Tiny Tales",
  "socialLink": "http://www.instagram.com/anujgosalia",
  "engagementStats": {
    "stars": "125",
    "likes": "12",
    "views": "57.8k",
    "hearts": "26.0k"
  },
  "posts": [
    {
      "id": 1,
      "title": "A Changing World Order",
      "description": "The world is changing at a feverish pace. Friend, collegues and everyone engaged in knowledge work are beginning to sense this including.",
      "thought": "musing",
      "author": "anujgosalia",
      "date": {
        "month": "August",
        "day": 2
      },
      "readTime": 8,
      "views": 200
    },
    {
      "id": 2,
      "title": "India Vs Australia",
      "description": "Think about it - this cricket series was akin to therapy.\n\nLaying our childhood trauma up top, working with it slowly and slowly over two me",
      "thought": "thought",
      "author": "anujgosalia",
      "date": {
        "month": "January",
        "day": 21
      },
      "readTime": 1,
      "views": 156
    },
    {
      "id": 3,
      "title": "Write to build",
      "description": "Writing is the first step to create:\n \n - stories\n - products\n - companies.",
      "author": "anujgosalia",
      "thought": "thought",
      "date": {
        "month": "November",
        "day": 18
      },
      "readTime": 1,
      "views": 228
    }
  ]
}

```

## Components Overview

## 1. NavBar Component

- Creates the navigation bar containing the logo and course button, implemented in the ui component.

## 2. Profile Component

- Displays user information, including background image, profile image, username, followers, and bio.
- Passes user information to the EngagementStats component.

## 3. EngagementStats Component

- Displays engagement statistics such as stars, likes, views, and hearts.
- Receives user information from the Profile component.

## 4. Posts Component

- Maps through the user's posts and renders a Post component for each.
- Ensures that the post description remains identical.

## 5. Post Component

- Represents an individual post with details like title, description, thought type, author, date, read time, and views.

## Styling

The project uses styled components to style each component, ensuring a consistent and visually appealing design.

# How to Run

- Clone the repository.

- Install dependencies: `npm install`.
- Run the development server: `npm run dev`.
  Open http://localhost:3000 in your browser to view the application.
- Open http://localhost:3000 in your browser to view the application.
