## GULP STARTER DEV
A starter folder structure to get up and runnnig building a website.
Download and navigate to the folder.
Use the command `npm install` to install all node modules

We have two different Gulp command we can use here.
### Gulp
Usage -  `gulp` while in the folder
This is used for when we are in development mode.
It does a couple of tasks to help us : 
* It creates a localhost server where we can see our work
* It will watch all our files and update the localhost when anything is changed
* It will compile our sass and watch for errors
* While working in any Js file it will lint our code for warnings or errors

### Gulp Sassdoc
Usage -  `gulp sassdoc` while in the folder
This creates the sassdoc documentation and places it into the `docs` folder.
If you havent added and new elements (variables, mixins, functions) to the SCSS then you dont need to re-build the docs.


### Folder and file explanation
```
DEV FOLDER
	|-modules/     #Contains all Html modules needed for the page
		|--favicons.html
	|-pages/       #The working pages for the project
		|--index.html
	|-src/
		|-css
			|-maps #Sass source maps
			|-fonts #All fonts used for plugins
			|-img   #All images used for plugins
			|--styles.css #Compiled Css file
		|-fonts
			|-all fonts inside this folder
		|-img
			|-all images in this folder
		|-js
			|-plugins
				|- all javascript plugins inside this folder.
			|--jquery.js
			|--jqueryui.js
			|--settings.js
		|-scss
			|-base   #Contains global settings for the project and some Css helpers
				|--_global.scss
				|--_helpers.scss
			|-fonts
				|--_basicarrows.scss
			|-modules
				|- all modules from pages inside this folder in seperate files/
			|-plugins
				|- all plugin scss files inside this folder
			|-presets
				|-_bootstrap.scss
				|-_reset.scss
			|-settings  #Contiains the variables and mixins etc for the project
				|-_mixins.scss
				|-_variables.scss
			|--styles.scss  #Main SCSS file which calls all the other files
	|--index.html

DOCS FOLDER - Sassdoc folder
	|-assets
		|-css
			|-main.css
		|-images
			|-all images inside this folder for Sassdocs
		|-js
			|-main.min.js
	|--index.html
	
```

## General
All folder names should be lowercase and use hyphens.

