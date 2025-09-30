// import ListGroup from "./components/ListGroup"; => (import "function" from "filePath";)
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";
import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <ExpandableText>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
      libero, impedit eos minima quidem repellendus quis deleniti, porro ea
      ratione amet vero molestias doloremque ipsa reiciendis culpa consectetur
      ut. Officiis!
    </ExpandableText>
  );
}

export default App;

// EVENT HANDLER, DYNAMIC LIST RENDERING, PROPS, CHANGING STATE:
// function App() {
//   // return <div><Message></Message></div> OR
//   const items = ["Faisalabad", "Islamabad", "Karachi", "Sukkur", "Rawalpindi"];
//   //onSelectItem handler :
//   const handleSelectedItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       {/* <ListGroup /> */}
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectedItem}
//       />
//       {/*passing a static value in heading so no need to use curly bracket. */}
//     </div>
//   );
// }

// PASSING Children : (Alert Component)
// function App() {
//   return (
//     <Alert>
//       {/* This is the Alert Component ! (If children data type is string.) */}
//       {/* FOR HTML CODE : */}
//       Hello Ammad.
//       <p>This is the html code inside the component</p>
//       because of - children : ReactNode
//     </Alert>
//   );
// }

// WORKING WITH BUTTONS (With the help of state hook) :
// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
//       )}
//       <Button onClick={() => setAlertVisibility(true)} color={"danger"}>
//         Click me
//       </Button>
//     </div>
//   );
// }

// DONE TWO EXERCISES RELATED TO BUTTONS : (Increment, decrement, reset)
// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);
//   let [count, handlecount] = useState(0);

//   return (
//     <div>
//       <Button
//         color="primary"
//         onClick={() => handlecount(count >= 20 ? (count = 20) : count + 1)}
//       >
//         Increment
//       </Button>
//       <Button
//         color="secondary"
//         onClick={() => handlecount(count <= 0 ? (count = 0) : count - 1)}
//       >
//         Decrement
//       </Button>
//       <Button color="danger" onClick={() => handlecount((count = 5))}>
//         Reset
//       </Button>
//       <p></p>
//       <h1>Count : {count}</h1>
//     </div>
//   );
// }

// DEALING WITH OBJECTS (UPDATING STATE OBJECT) :
// function App() {
//   const [drink, setDrink] = useState({
//     title: "Cappecino",
//     price: 100,
//   });

//   const handleClick = () => {
//     setDrink({ ...drink, price: 150 });
//   };

//   return (
//     <div>
//       {drink.price}
//       <Button onClick={handleClick}>Click me</Button>
//     </div>
//   );
// }

//DEALING WITH STATE ARRAYS (Addition, Deletion, Updating):
// function App() {
//   const [tags, setTags] = useState(["Happy", "excited"]);

//   const handleClick = () => {
//     //Add :
//     // setTags([...tags, 'Angry']);

//     //Delete :
//     setTags(tags.filter((tag) => tag != "Happy"));

//     //Update :
//     setTags(tags.map((tag) => (tag === "excited" ? "notExcited" : tag)));
//   };

//   return (
//     <div>
//       {tags.map((tag) => tag + "  ")}
//       <Button onClick={handleClick}>Click me</Button>
//     </div>
//   );
// }

// DEALING WITH STATE ARRAY OF OBJECTS :
// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);

//  1. Without Immer Library :
//   const handleClick = () => {
//     setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
//   };

//  2. With Immer Library : (for installing immer library : go to console and type "npm i immer@version" version - 9.0.19)
//     const handleClick = () => {
//       setBugs(produce(draft => {
//         const bug = draft.find(bug => bug.id === 1);
//         if (bug) bug.fixed = true;
//      }))
//   };

//   return (
//     <div>
//       <Button onClick={handleClick}>Click me</Button>
//       <div>
//         {bugs.map((bug) => (
//           <div key={bug.id}>
//             {bug.title} - {bug.fixed ? "✅ Fixed" : "❌ Not fixed"}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// SHARING STATE BETWEEN COMPONENTS :
// function App() {
//   const [cart, setCart] = useState(["SunScreen", "Airpods", "Umbrella"]);

//   return (
//     <div>
//       <NavBar cartItemsCount={cart.length} />
//       <Cart
//         cartItems={cart}
//         onClear={() => {
//           setCart([]);
//         }}
//       ></Cart>
//     </div>
//   );
// }

// UPDATING STATES :
// function App() {
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       { id: 1, title: "Product 1", quantity: 1 },
//       { id: 2, title: "Product 2", quantity: 1 },
//     ],
//   });

//   const onclick = () => {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 1 ? { ...item, quantity: 2 } : item
//       ),
//     });
//   };
// }
