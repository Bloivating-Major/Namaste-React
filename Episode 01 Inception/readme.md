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
      3 arguments 
      1. which tag you want to use
      2. object
      3. content in the tag you want!
        const heading = React.createElement("h1",{}, "Hello World from React!")

--> Now we have created Heading we need to put it inside DIV as a children
        Now we need to create a root inside [React] for [DOM] manipulation.
        const root = ReactDOM.createRoot();     
        ==>[Note] Here if you see it properly we have used ReactDOM and earlier we used React this difference is because earlier we were using that functionality from Core React and Now we are using DOM functionality of React to make change.

        const root = ReactDOM.createRoot(document.getElementById("root"));

        Now we can just render our HTML Inside the root
        root.render(heading); 

--> React gives you ability to manipulate the DOM structure
  * Earlier we created h1 using react and we had an object within that.
    So what does that object do is it contains attributes.
  * React element is Object a normal javascript Object.
    IF you console.log(heading2); you will see it returns an OBJ
    Also it has props: within it there are children + attributes.


--> Now we will create a Tree Structure using React
      Div[id=parent]
              Div[id=child]
                  <h1>

      const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {}, "This is H1 Tag")));
      console.log(parent);
      root.render(parent);   

   <ReactElement(Object) = HTML(Browser Understands)> It becomes HTML          

--> Now if you want to create Siblings in that tree structure then you have to create an array to add 2 elements in React.createElement
      Div[id=parent]
              Div[id=child1]
                  <h1>
                  <h2>
              Div[id=child2]
                  <h1>
                  <h2>
      Same you can do is for childrens also you can pass array to it.

      See this will be the code for it.

      const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [
        React.createElement(
            "div", 
            {id: "child"},
            [
                React.createElement("h1", {}, "First Title From React! 1"),
                React.createElement("h1", {}, "Second Title From React! 1"),
            ]
        ),
        React.createElement(
            "div", 
            {id: "child"},
            [
                React.createElement("h1", {}, "First Title From React! 2"),
                React.createElement("h1", {}, "Second Title From React! 2"),
            ]
        ),
    ]
   );     This is get very Untidy and not good for us. 

   So for this we have something known as JSX

   root.render will replace all the HTML body when we run it.

   We call react Library because React only works in a place whatever you make root at.
   It can work independently in a little part of Portion.

   Not all Frameworks apart from React can be applied to small portion of your Application.