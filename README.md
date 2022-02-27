# Budget-Mate
Budget-Mate is a web app I created to help roommates managed their shared finances. Having roommates can be difficult because lots of items are shared between each of the members. For instance, buying necessities like peanut butter will be used by everyone and so the cost is shared between all of the people. But, if one of the roommates has a peanut allergy, they should also be paying for the peanut butter. 

Unlike complicated Excel spreadsheets, **Budget-Mate** makes it easy for roommmates to input the items they are purchasing and assign the products to the people who use them and approriately split the bill.

## Features
* **Items:** Add and remove items using the name of the item, quantity purchased, and price purchased in order to see how much the item costs on the bill
* **People:** Add and remove people using their name and see how much each person is responsible for paying
* **Assign People to Items:** By clicking on the "plus" next to the item and selecting the people who are responsible for paying for it. When you click on the user, you will see s/he highlight blue and the person's name on the left side of the screen change the total next to their name.

## Technology
* **React** was used in order to render the frontend
* **Redux** to manage state between the people, items and the people-item assignments. This allows for changes on one side of the screen to change all other components accordingly since everything relies on a central store of data