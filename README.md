# Code-Bucket 
## Getting Started

1. First `cd` into the directory containing the ruby files
2. Next run the server with the `rails s` command in the terminal
3. Last run `npm start` on the terminal for front-end part of this application


## Objective
Code-Bucket is an front-end web development environment built with Ruby on Rails and React with Hooks that allows users to experiment and practice different front-end web development techniques.

Features

* Use the **three** editors ( HTML, CSS, JavaScript ) to build entire projects and track the results immediately.
* Save project progress with a name and picture of it in its current state
* Load projects and pick up right where you left off.
* Toggle "Light" and "Dark" mode

## Text-Editors

The main feature of this application are the three text editors that enables users to develop and write front-end code. The editors are labeled by what language they recognize, HTML, CSS or JavaScript. They where made using Ace-Editors react components which then runs the source code in the browser header before sending it to the display

## iFrame Display

The display is an iframe window that reads all the source code from the three editors and displays it properly. Because html code can contain `<style>` and `<script>` tags the source code must be structured in the traditional html doc file structure

`<HTML>`\
`<body>Some HTML code</body>`\
`<style> Some CSS code </style>`\
`<script> Some JS code </script>`\
`</HTML>`

## Save/Update

The Save button saves the current state of all three editors as the source code into a long text. A rails API generates an image from the source code text, and the user can come back to their project anytime. The same concept holds true for the update of a project but instead the back-end attempts to locate the project first then overrides the long text column with the new source code.

## Edit/Remove

The edit and remove buttons are located under Collections after highlighting a project for a set time. The edit button will pick up the last saved state of the project and perfectly parse the source code into the three text editors using the html tags defined above. The remove button is to the right of the edit button and simply would remove a project from the database.

## Collections

The collections page shows a list of projects created by the User. Choose to edit or delete any project listed in your collections, or return to the home page and continue working on a new project.

## Dark Mode

A toggle to change the theme to be more suitable for areas with less natural light