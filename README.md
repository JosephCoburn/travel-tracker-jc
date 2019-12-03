# Travel Tracker

#### Description
*Keep track of all your travels with the Travel Tracker app! Login and create entries, input information and view, edit, or delete any entry using the intuitive navigation from the app's home page. Users can then see everywhere they've been using the Travel Tracker app! Click the sort button to filter your voyages by world region, country, or state. Now all you globetrotters can see exactly how much of the world you have explored!* 

[![Open App](https://i.imgur.com/7CoLiBt.png)](https://react-travel-tracker.herokuapp.com/)


#### Technologies Used:
*MongoDB/Mongoose, Express, React, Node, Heroku, AJAX, Javascript, HTML, CSS, Bootstrap, Git, GitHub*

#### Getting Started
*First, click the banner at the top or [click here](https://react-travel-tracker.herokuapp.com/). Click 'Login' to begin. Enter an email and password. You will not be sent any emails whatsoever from this. In fact, it doesn't even have to be a real email address. Just input something you'll remember. After Signup, you will automatically be logged in with that account. Click 'Add Voyage' on the navigation bar to start using the app! When inputting information, remember that the only required fields are 'Date', 'Region', 'Country', and 'Destination'.* 

*To view all voyages, click 'Travel Tracker in the top left. To access sort functionality, click 'Sort by:' in the top right. Follow the prompt to filter your voyages list based on the parameters selected here. Use the 'Actions' to view, edit, or delete a voyage.*


#### Core Functionality
- Signup with token-based authentication
- Create voyages with inputs including date, region, country, state, location, rating, companions, duration, cost, and notes
- Users' access limited to only their own voyages through authorization
- View all voyages from app's homepage
- Edit voyage details
- Delete a voyage
- Sort voyages by region, country, or state

#### Upcoming Functionality
- Render maps that dynamically update to fill in locations based on a user's voyages
- Include filters to render multiple maps (ex. USA Map displays national map with all corresponding states shaded. Countries Map displays a world map with all corresponding countries shaded. etc.)
- Include 'progress bars' for regions, countries, and states (ex. the USA progress bar displays a horizontal bar which fills with progress and shows: "You have been to X/50 states!")
- Include filters to sort by highest rated, future or past trips, and cost.
- Allow multiple states/countries/regions to be added for any voyage 
- Allow multiple voyages from the same trip to be linked, and collapsed into one trip
- Include 'Copy Voyage' to prefill a create new voyage.
- Allow users to 'favorite' voyages and access a list of their favorites.
- Award users 'badges' in the form of icons for completion of certain criteria (ex. 'You've been to all 50 states!', etc.)
- Allow users to view all badges.
- Allow photo uploads for a voyage.
- Allow users to add information to their profile including photos, bio, favorite locations, desired destinations, etc.

#### Additional Notes

*In order to use the sort functionality, users must input location properties (region, country, state/territory) using their proper names -- EXACTLY as they'd be found in an atlas. This means capitalization and exact characters must be used. For example, 'Texas' MUST be input as 'Texas'. If it is entered as 'texas', 'texas ', 'texus' ... etc, the sort functionality will not work.*
