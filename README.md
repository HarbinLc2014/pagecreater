This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), which is used for Symbiote Company Interview.

## Running the Project

Clone the project directory into local disk.

In terminal, run `npm install -g json-server`.

If you are using mac, you need to add `sudo` command before the `npm install` command.


In server folder, run `json-server --watch db.json` command in terminal.


Open another terminal, run `npm install` in project root directory.

Run `yarn start` command.

### Testing process

Simply click `login` button to browse management page.

You can view all the pages including title and content in it through the page by clicking specific page title in the side menu.

You can add pages by clicking the add page button in the side menu.

You can sign out by clicking the log out button in the side menu.


### Warning

Make sure to run JSON server first so the port will not be occupied when react.js is making request to server and data can be retrieved successfully.
