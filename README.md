# Pikadex
This web application is used to create and log Pokedexes across all of the main Pokemon games, as well as tracking your progress against different users.

Live demo [_here_](https://www.the-pikadex.herokuapp.com/).


## Table of Contents
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [How to Setup](#setup)
* [Project Status](#project-status)
* [Contact](#contact)


## Technologies Used
1. Node
2. Express
3. PosgreSQL
4. Prisma
5. React
6. Redux 
7. Tailwind

## Features


## Screenshots


## Setup

### Local Setup
First, you are going to want to clone this repo:
```bash
git clone https://github.com/jlgranof/Pikadex.git
```

Before we can actually use the application, we must set up our database and environment variables.

### Setup for Heroku
Before we can connect the app with Heroku, we need to have a Heroku account. If you do not have one, create one here: https://signup.heroku.com/. Add a new application in the Heroku Dashboard and name it. Uder the resource tab for the application, click "Find more add-ons" and add the "Heroku Postgres: add-on, using the free Hobby Dev setting.

First use the command line to login to heroku:
```bash
heroku login
```
You will be taken to Heroku's website to approve the login.


Next, you will need to attach the git repository to heroku, this will not mess up the connection to a github repository.
```bash
heroku git:remote -a <name-of-Heroku-app>
```

Now we can push the repository to Heroku and run the build process by:
```bash
git push heroku main
```

Finally we can migrate and seed the database:
```bash
heroku run npm run prisma migrate deploy
heroku run npm run prisma db seed
```

## Project Status
In Progress!!!!!!!!!!!!!!!!!!!

## Contact
Created by [Jeff Granof](https://jlgranof.github.io/).