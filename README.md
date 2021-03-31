# barbershop

This Project demonstrates the use of MERN with Redux to create a barber appointment shop

You can simply create an account, login and subsequently make a barbers appointment based on the calendar onepage checkout
It is then stored in the backend

It has the following features & Tech Stack:

MERN

Mongoose Express React Node Redux for state management

Redux in this case was chosen because for such an application at large and a fullstack application it is easier to use for state management.

Libraries can be found in the package json and include but are not limited to

Bcryptjs for security jsonwebtoken for checking for security
nodemon for reloading
express async handler to help loading and importing.
concurrently to run both backend and frontend with 1 command.

How to use in Development

Download the git repository

Make sure to install NPM at https://www.npmjs.com/get-npm
Run NPM Install to install all of the dependencies

Make sure to install dotenv to create local environment variables https://www.npmjs.com/package/dotenv

Create your own data base (MongoAtlas was used for this project)
Fill in the missing .env variables:
NODE_ENV =development PORT = 5000 or your preferred port MONGO_URI = {MONGODB URL} from a MongoDB server JWT_SECRET = {JWTPAsscode}

Then run "NPM run dev" to run the project, you can find it on http://localhost:3000/


Roadmap:
- Add user individual profiles & appointments
- Add CSS, styling & content.
- Add a mobile friendly version.
- Add the ability to see earlier which appointment dates are already taken on the frontend.
- Add sections for overview as an admin in order to check and change the status of the appointments.

Enjoy the project!
