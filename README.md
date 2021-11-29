# BFI 250 Progress Bar Server

![image](link here)

The backend for BFI 250 [Front End](https://github.com/ejw773/bfi250)

**BFI 250 Progress Bar: Watch the Greatest Films of All Time. Track Your Progess. Skip a Few.**

[Live website](https://bfi250.com/)

## About This Project

Each decade since 1952, the British Film Institute's [Sight & Sound Magazine](https://en.wikipedia.org/wiki/Sight_%26_Sound) has been putting out a carefully compiled list of the greatest films of all time. The published lists are usually around 10 titles long, but in 2012 they put out a whopping [250 titles](https://fanwithamovieyammer.wordpress.com/the-sight-sound-top-250-list/).

I created the BFI 250 Progress Bar as a way to track my progress through these lists. Two important features for me:

- A button to "Skip" films I don't intend to see
- A visually simple progress bar
- Mobile-friendly

## :hammer_and_wrench: Backend Technologies Used

- [Node.js](https://nodejs.org/en/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [Heroku](https://www.heroku.com/)
- [Express](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)

## ⚙ How to run

### 1. Clone this repository

1. Under the repository name, click on the code button and copy the clone URL for this repository.
2. Open your terminal and type `git clone `, followed by the copied link from above.

### 2. Open the folder

After cloning the repository, use your favorite code editor to open the folder. I use [Visual Studio Code](https://code.visualstudio.com/).

### 3. Install the dependencies

Run `npm install` or `yarn install` in your terminal.

### 4. Setup a database and add environment variables

You will need to set up a [MongoDB](https://www.mongodb.com/) database. You will also need to create a .env file in the root directory, with the following keys:

MONGODB_URL
JWT_SECRET

After each key, add '=' (without quotes). After MONGODB_URL=, paste the URL to your MongoDB database. You'll also need to create your own random JWT_SECRET string for authentication; this will be used by [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).

### 5. Execute the application

Run `npm run start` in your terminal. If you are using [nodemon](https://www.npmjs.com/package/nodemon), run `npm run dev` in your terminal.

### 6. Seed the database

There are two important files inside /src/db/filmSeeders: filmSeeder.js, and rankSeeder.js. First run filmSeeder.js to populate the database with information on each film (year, director, etc.). Then run rankSeeder.js to create a new collection populated with information on BFI ranking for each film.

See comments inside rankSeeder.js for more information.

### 7. Access through API Platform

Use [Postman](https://www.postman.com/) or similar API platform to access the end points. Unless otherwise specified in the environment variable, the base URL is http://localhost:3000.
