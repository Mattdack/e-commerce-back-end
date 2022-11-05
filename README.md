# e-commerce-back-end

## Description 

This [repository](mattdack.github.io/e-commerce-back-end) contains the back end coding for an e-commerce website. The database is created and connected to utilizing the mysql2 node package. Models for products, categories, tags, and product tags are created through the sequelize node package. The server for the back end is established with the express node package and allows users to acquire, create, and delete data for the previously stated models. Additionally, there is optional seed data for the database included.

## Video of Application Usage
<a href = 'https://drive.google.com/file/d/1-ZbUYFGDTKUTtJVUV6ZPIj3v_HvFOphG/view'> Link to Video</a>

## Installation

After cloning this repository, users should open the server.js file in an integrated terminal. Initialize the node package manager with the command 'npm init -y'. Install the necessary node packages(mysql2, sequelize, express, and dotenv) and their dependencies with the commands 'npm install nameOfPackage' or in total at once "npm i". The repository git ignore prevents the upload of these packages and dependencies due to size. Prior to initializing the application, users must enter the mysql shell which is commonaly called with the command "mysql -uroot -ppasswor" where "root" and "password" are the users own mysql account information. While in the shell, utilize command "SOURCE db/schema.sql". After use command "exit" to leave the mysql shell and return to the integrated terminal.Users can optionally seed the database tables with placeholder information with command "node seeds/index.js".   After initializing the database, the application is accessible with the command 'node index.js' which will start up the server at localhost:3001.

## Usage 

Interfacing with this application will require third party applications such as Insomnia to send get, post, put, and delete requests to the various routes included. Please refer to the documentation for any such application in order to interface with the data.

## Credits

 Matthew Dacanay created this application after given some initial code by Trilogy Bootcamp staff. Technical concepts and public resources were referred to as needed. You can find other projects by Matthew at his [github page](github.com/mattdack).