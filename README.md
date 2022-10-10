<h1 align="center">
  CRA-Maverick-Sandbox-App
</h1>

<p align="center">
  <img src="https://i.imgur.com/Fp7yqfX.png" alt="CRA Maverick App">
</p>

<p align="center">
  A Maverick sandbox built for experimenting with existing Maverick components.
</p>

## Installation Instructions
Clone this repo
- **npm install** to install all required dependencies
- **npm run start** to start the local server listening on [localhost:3000](http://localhost:3000)

## Tech Stack
- React

### built using: 
- React
- Tailwind CSS

## How to use
You will primarily be using the `src -> pages -> sandbox.js` file for exploring the Maverick components. Please note, that the `src -> App.js` file also has react-router-dom changes that are important to know for using components such as `<Navigation list="variant">`

## Information

### Packages
This app has specific package versions that are crucial in order to use Maverick. Please see below for a list of specific package versions Maverick projects require for use.

 - **react-router-dom**
   - Please use version 5. Newer versions break components such as `<Navigation variant="list" />`
 - **react**
   - Please use version 17, newer versions prevent the use of Maverick.
- **@testing-library/react**
  - Please use version 12, version 13 drops support for react version 17 and earlier.
