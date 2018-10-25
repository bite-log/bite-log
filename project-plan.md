Project Plan Narrative

THE IDEA
Do you remember that amazingly, unbelievably delicious dish you ordered at that one restaurant that one time? Exactly! Therefore, we are introducing the next big thing in nosh culture: Bite.log. We are wanting to create a webapp that will help foodies keep track of their food encounters. Eventually, it will incorporate social connections with friends and gaining achievement levels, but at its core is the idea of remembering that unforgettable dish (and what to never order again!), and expanding into new horizons of grubbing adventures.

It is a webapp that is just about the people and their food. No calorie counter or diet measures, and no judgement. Just happy taste buds and bellies, and maybe a new go-to!

PAGES + FLOW
Login/Main Page
On this page the user will be able to enter their username and password to log into the webapp or an option the user can select to create a profile for the first time. If the user does not enter a username &/or password but tries to access any of the clickable features, the page will refresh with a validation prompt. Also on the main page will be information/how-to for using the webapp followed by mini bios about the team members.

New User Profile Page
If the user selects the “create profile” option, they will be redirected to a page that includes a form to store their username, password, and photo. It will also hold automatically hold two variables that will act as restaurant and entry counters to be used in the gallery header (both will start at 0). User information will be stored in an object constructor. Upon completion, they will be returned to the login/main page to sign in.

After signing in, the user can interact with the nav bar, which would lead to either of 2 pages…

New Bite Log
A user would be able to create a new entry here. The form would include fields for the name of the dish, restaurant, rating, category, if it is to be tagged as a favorite, photo (upload), and comment block. These would be the properties of a constructor function, and each new entry will be pushed into an array of previously created and stored entries.

Or

Gallery
From this page the user would see all of their logs.

Header. The header of the gallery would include the user’s photo in the center. To the left will be the restaurant counter. Each time a new restaurant is added through the entry object constructor, it will be added to an array. A loop would check if the array already has that restaurant listed, and if it does not, it will add 1 to the restaurant counter displayed in the header. To the left of the user photo will be an entry counter. Each time a new entry is logged, the counter will increase by 1.

View. The default display would be a grid view of their photos. When hovered over, the photos will fade and over top the information will be displayed. This display view will be changeable to a listview that will display the entries with their photos side-by-side with their details. This view will be adjusted on a onClick event listener in javascript tied to a display:hidden css rule for whichever option is not selected. The section of the page will refresh and re-render per the desired view.

Filters. The user will be able to change the order of the display to organize by favorites (operated by an if/else statement), category (operated by an if/else run through a for-loop of the array of entries), or rating (operated by a for loop containing multi levels of if/else statements to organize ratings by user-given stars/5).
