# Portfolio Website

This is a portfolio website created using **Gatsby.js**, showcasing projects, skills, and contact information. The site is designed to be responsive and visually appealing, with smooth navigation and interactive elements.

## Features

- **Hero Section**: Introduction with a background image and navigation links.
- **About Me Section**: A brief description of the developer with an image.
- **Portfolio Section**: Displays projects with descriptions, links to live demos, and GitHub repositories.
- **Contact Section**: A form to send messages with validation.
- **Footer**: Includes a custom message and the current year.
- **Interactive Elements**: Smooth scrolling, modals, and hover effects.

## Technologies Used

- **Gatsby.js**: Static site generator for React.
- **React**: Front-end library for building user interfaces.
- **Styled Components**: For styling components with CSS-in-JS.
- **TypeScript**: For type safety and better development experience.
- **FontAwesome**: For icons.
- **Gatsby Plugins**:
  - `gatsby-plugin-image` for optimized images.
  - `gatsby-plugin-sharp` and `gatsby-transformer-sharp` for image processing.
  - `gatsby-plugin-styled-components` for styling.
  - `gatsby-plugin-smoothscroll` for smooth scrolling.
  - `gatsby-source-filesystem` for managing file sources.

## Setup Instructions

1. Set the required Node.js version:

   **Note**: This project requires Node.js version `22.14.0`. Ensure you have it installed or use the `.nvmrc` file to set it up.

   ```bash
   nvm use
   ```

2. Clone the repository:

   ```bash
   git clone https://github.com/KamilPartyka/Portfolio.git
   cd Portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run develop
   ```

5. Open the site in your browser:

   ```
   http://localhost:8000
   ```

6. To build the site for production:

   ```bash
   npm run build
   ```

7. To serve the production build locally:
   ```bash
   npm run serve
   ```

## Deployment

The site can be deployed using GitHub Pages. Run the following command:

```bash
npm run deploy
```

## Folder Structure

```
└── src
    ...
    └── components
        ...
        └── Button
            ├── Button.tsx
            ├── styles.ts
            └── index.ts
```

- **src**: Contains all source code.
  - **components**: Reusable UI components.
  - **sections**: Page sections like Hero, AboutMe, Portfolio, etc.
  - **theme**: Theme and global styles.
  - **pages**: Gatsby pages.
  - **data**: JSON data for portfolio items.

## Author

**Kamil Partyka**

- [GitHub](https://github.com/KamilPartyka)
- [LinkedIn](https://www.linkedin.com/in/kamil-partyka)
