# Grails 3.x + Angular 6 Single Project build template for getting started quickly.

Single project build template for getting started quickly.

## Setup
1. Install latest version of node.js (https://nodejs.org/en/)
2. Check if node.js is installed ( `node -v` )
3. Install angular cli `npm install -g @angular/cli`
4. Client code resides under src/main/client
5. Client code can be run by running `npm install` , `ng build` and `ng serve` under client directory(app runs on port 4200)
6. To build the client and server together , under project directory run `gradlew bootRun`
7. `gradle bootRun` builds the client code first using the gradle node plugin ( added in build.gradle) and places it under the    
    src/main/webapp directory
8. Both client and server packaged together in single war and deploys it on port 8080 (`http://localhost:8080`).

## References
http://guides.grails.org/angular2-combined/guide/index.html

https://github.com/srs/gradle-node-plugin

