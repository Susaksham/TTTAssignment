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
    "src": "/backgroundImage.jpg",
    "alt": "background image"
  },
  "profileImage": { "src": "/profileImageSecond.jpeg", "alt": "profile image" },
  "name": "Anuj Gosalia",
  "followStats": {
    "followers": 6482,
    "following": 245
  },
  "bio": "Co-founder & CEO at Terribly Tiny Tales",
  "socialLink": "http://www.instagram.com/anujgosalia",
  "engagementStats": {
    "stars": "1k",
    "likes": "1.3k",
    "views": "13k",
    "hearts": "23k"
  },
  "posts": [
    {
      "id": 1,
      "title": "A Changing World Order",
      "description": "The world is changing at a feverish pace. Friend, colleagues, and everyone engaged in knowledge work are beginning to sense this including.",
      "thought": "musing",
      "author": "anujghosalia",
      "date": {
        "month": "August",
        "day": 2
      },
      "readTime": 8,
      "views": 200
    },
    // ... (other post entries)
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
