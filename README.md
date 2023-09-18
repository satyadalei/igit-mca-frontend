
# IGIT MCA Frontend Web Application

This README describes a basic folder structure of our frontend application & also describes a little bit about API interactions 

**Deployed on:** [vercel.com](https://vercel.com/)

Check app running live @ 👉 
[https://igit-mca-backend.onrender.com](https://igit-mca-backend.onrender.com)

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Project Structure](#project-structure)


## Introduction

This application interacts with API of [igit backend](https://github.com/satyadalei/igit-mca-backend) for performing CRUD operations on a set of things, such as users registration, login, new batch create etc.

## Technologies Used
[![](https://skillicons.dev/icons?i=react,html,css,javascript,next,materialui,firebase)](https://skillicons.dev)
- **Next.js**: A react-based web framework
- **Firebase**: For using google authentication
- **HTML, CSS, javascript**
- **React MUI:** A user interface framework that provides pre-defined and customizable React components


## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/satyadalei/igit-mca-frontend.git
   cd igit-mca-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   Create a `.env.local` file in the root of the project and define the following variables:

   ```plaintext
    NEXT_PUBLIC_APIKEY=
    NEXT_PUBLIC_AUTHDOMAIN=
    NEXT_PUBLIC_PROJECTID=b
    NEXT_PUBLIC_STORAGEBUCKET=
    NEXT_PUBLIC_MESSAGINGSENDERID=
    NEXT_PUBLIC_APPID=
    NEXT_PUBLIC_MEASUREMENTID=

    NEXT_PUBLIC_BASE_URL=
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

## Project Structure

The project structure follows a typical Next.js application structure:

```plaintext
project-root/
  |-- firebase/
      |-- firebase.js       # combines firebase api keys & exports as javascript objcet 
  |-- public/
      |-- images/
          |-- semester1.jpg
          |-- pagenotfound.jpg
          |-- ...(other images)
  |-- src/
      |-- app/              # main folder for different pages
      |-- components/       # components of home page & some common page
      |-- context/          # All context apis
      |-- data/             # contains semester data with subject teachers in javascript object format
  |-- .env.local            # Environment variable configuration
  |-- .eslintrc.json
  |-- .gitignore            # ignores some file
  |-- jsconfig.json
  |-- next.config.js
  |-- package-lock.json
  |-- package.json
  |-- README.md             # Project documentationentry point
```

