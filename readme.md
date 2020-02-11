1. Download and install Nodejs and Yarn

2. pull this repo and do command 
   `yarn`  \
   in the same directory , this will install all the dependency and pacakges required to run

3.  `yarn start` \
    do it at the same directory , then should see the console message:
    Server running at http://127.0.0.1:3001/

4. Download and install Xampp

5. run Xampp-control and start Apache and MySql

6. visit http://localhost/phpmyadmin/ to verify Xampp service are working

7. manually create a new database named `nodejsSequelize` use GUI interface inside http://localhost/phpmyadmin/

8. the database ORM is Sequelize

    8.1 to setup database table needed for the quiz , do `sequelize db:migrate`

    8.2 now it's ready to try the endpoints given in the quiz

9. For Unit test , the test script is mocha and the testing library is chai which already been composed into this project , so in order to run all the tests in /test/api.js just simply do command  `yarn test` or to test individual question : \
        >  yarn test -g 'testQ1'\
        >  yarn test -g 'testQ2'\
        >  yarn test -g 'testQ3'\
        >  yarn test -g 'testQ4'

it's good to keep monitor the api endpoint result in http://localhost/phpmyadmin/ which provides GUI interface for mysql database