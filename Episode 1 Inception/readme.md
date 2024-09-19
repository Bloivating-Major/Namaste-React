--> VS Code uses Emmet so what we have done is used "!" mark within it. We will get the basic html skeleton.
--> We are creating a basic html page where we will write our simple Hello World Heading on screen.
--> We did this using h1 tag it is simple anyone can do that.
--> Now what we will do is perform the same action using JavaScript. 

--> So far what we did is made a div with ID [root]
      Then what we are doing is creating a heading in html using javascript
      we are first getting the root element and then storing it in the variable
      now appendchild() function makes anything append adds to the last element.

--> Now we will add react in our project.
        we will do it using CDN (Content Delivery Network)
        we used 2 links to import react in our html using script tag.
        Now 
        1st file that we have is React.Development.Js(this is the core file of react this is the core framework)
        2nd one is the React Dom this is the react library useful for DOM operations. 
        There are different types of React Used like React Native. 

      In this code we have used React.createElement to use React in our project and it takes
      3 parameters 
      1. which tag you want to ues
      2. object
      3. content in the tag you want!
        const heading = React.createElement("h1",{}, "Hello World from React!")
