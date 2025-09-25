// import ListGroup from "./components/ListGroup"; => (import "function" from "filePath";)
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let [count, handlecount] = useState(0);

  return (
    <div>
      <Button
        color="primary"
        onClick={() => handlecount(count >= 20 ? (count = 20) : count + 1)}
      >
        Increment
      </Button>
      <Button
        color="secondary"
        onClick={() => handlecount(count <= 0 ? (count = 0) : count - 1)}
      >
        Decrement
      </Button>
      <Button color="danger" onClick={() => handlecount((count = 5))}>
        Reset
      </Button>
      <p></p>
      <h1>Count : {count}</h1>
    </div>
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

// WORKING WITH BUTTONS :
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
