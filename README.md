# Recipe REACT

Using a provided JSON data representing a collection of meal recipes, this is a micro frontend application that represent these criteria:

* Display a list (or table) of recipes from the provided JSON.
* Allow selection of multiple recipes.
* Show an alphabetically ordered list of distinct ingredients for the selected recipes. This should update as recipes are selected / unselected.



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need Node.js and npm installed on your terminal.

```
Node.js v11.2.0
npm 6.4.1
```

### Installing

A step by step series of examples that tell you how to get a development env running

On your terminal, `cd` (change directory) to the project's folder location, and run

```
npm install
```
Once all of the package is installed, you are ready to go to the next step to deploy the project locally on your computer.

## Deployment

On the same directory where you do the package installation, you will need to run

```
npm run dev
```
This is to run the webpack. If you encounter an issue while running this, most likely is because you might need to install some of the package (in this case `webpack`) globally `-g`, so root/Administrator might be needed.

```
sudo npm install -g webpack
```  

If you have successfully execute `npm run dev` and webpack is running, you will need to open another terminal window (so you can keep the webpack compiling), and head to the same directory. And now run  

```
npm start
```
If it is successfully running, you should get something like this on the last line of your terminal

```
Express listening to port  8080
```

Now, you can open up your preferred Internet Browser, and type the url [http://localhost:8080/](http://localhost:8080/).

The micro frontend application should be up and running on your browser now. 

## How To Use the Application

Simply, click the checkbox of the (MULTIPLE) recipe that you wanna cook, and it will display the list of the distinct ingredients that you will need to buy in the groceries store, and it is already alphabetically ordered as well. 

## Built With

* REACT
* Express
* Babel
* Webpack
* HTML5
* SCSS
* git


## Authors

* **Mario** - *Initial work* - [imoark](https://github.com/imoark)

## License

This project is licensed under the MIT License

