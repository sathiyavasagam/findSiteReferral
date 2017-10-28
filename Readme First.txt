About TechStack:

The application built on MEAN stack ,which needs node server(npm package manager-node -v(0.12.7))
MongoDB -v(3.0.9 +),Express -v(4.5 +)


About Dependencies:
We have Package.json for node modules and bower.json file bower components which has all the dependencies list.

Do the below steps Once you went to the project directory

npm install -g bower (-g - To install globally)

   - npm install
   - bower install    (note: bower needs git to be already installed, install it before installing bower components. 'npm install -g git')

npm install -g gulp(-g -> To install globally)
     - npm install karma-jasmine --save-dev 
     -gulp

Go to browser and go to url http://localhost:8899


About Test suite:

client side Test:

---- 

Node API-Test

--- change directory to the project path (cd customer-app/) then start the node server

   - node server.js

-- open another terminal tab change directory to the project test folder path (cd customer-app/test/crud) and execute the following command

   - mocha addcustomerTest.js




