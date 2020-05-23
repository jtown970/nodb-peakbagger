# peak bagger App

## application concept and wireframe
## application
-this is a peakbagger app 
-we will be working with a premade users in a json file
-full crud
  -get: will get all hikers and there info
  -post: will add a hiker to our list
  -put: will update our hikes info
  -delete: will delete a hiker from our list

  ### Funtionality 
  -I want a header at the top with a logo and a home button 
  -when the app loads all the hikers in our json file will be displayed with their info
  -below there will be a add user button on click will show a user input section with name number of summits and miles hiked
    this will be add to the list of hikers after the add button is clicked
  -the edit button next to each users info will let you change data in their section
  -delete button will take user off of the list of hikers

  ### endpoints
  GET: will get all of the users in our hikes.json file
  POST: will push the added hiker to our hikers list 
  PUT: will let us edit a hikers info
  DELETE: will remove a hiker from our list of hikers

  ### component Architecture
  - App.js (stateful: hold the hikers info, this.state.hikers)
   -header.js (functional: will just have the jsx for our header)
    <!-- -hikers.js (functional: will be in charge of displaying hikers list) -->
    -editHikers.js (stateful: will let you change/update hikers info   this.state.editing)
    -addHiker.js (stateful: lets users add a new hiker to the list of hikers this.state.name, this.state.miles, this.state.summits)
    -deleteHiker.js (stateful: useing this.state.id)

### design files
<img src="./design-imgs/wireframe-peakBagger.png">
<img src="./design-imgs/layout-peakbagger.png">
<img src="./design-imgs/components.png">
