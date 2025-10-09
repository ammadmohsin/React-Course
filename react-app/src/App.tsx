// import ListGroup from "./components/ListGroup"; => (import "function" from "filePath";)
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";
// import ExpandableText from "./components/ExpandableText";
// import Form from "./components/Form";
// import ExpenseForm from "./expense-tracker/components/ExpenseForm";
// import ExpenseList from "./expense-tracker/components/ExpenseList";
// import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
// import ProductList from "./components/ProductList";
// import React, { useRef } from "react";
// import axios, { AxiosError, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient, { CanceledError, AxiosError } from "./services/api-client";
import { Controller } from "react-hook-form";

// Axios Library => working on data : (jsonplaceholder-dummy data)
// 1. fetching data : axios.get()
// 2. understanding Promise : axios.then()
// 3. handlig errors : axios.catch()
// 4. working with async/await
// 5. cancelling a fetch request : controller: AbortController
// 6. setting up Loading Indicator
interface User {
  id: number;
  name: string;
}

function App({ id, name }: User) {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  // 1. With async and await :
  // useEffect(() => {
  //   const controller = new AbortController();

  //   const fetchUsers = async () => {
  //     try {
  //       const res = await axios.get<User[]>(
  //         "https://jsonplaceholder.typicode.com/users",
  //         { signal: controller.signal }
  //       );
  //       setUsers(res.data);
  //     } catch (err) {
  //       // we cannot type cast in catch block
  //       setError((err as AxiosError).message);
  //     }
  //   };
  //   fetchUsers();
  //   return () => controller.abort();
  // }, []);

  // 2. (without async/await) With axios Library :
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    // .finally(() => {
    //   setLoading(false);
    // });

    return () => controller.abort();
  }, []);

  // Deleting Data :
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    apiClient.delete("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  // Creating Data :
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Ammad Mohsin" };
    setUsers([newUser, ...users]);

    apiClient
      .post("/users", newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  // Updating Data :
  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + " ! " };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    apiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div>
      {isLoading && <p className="spinner-border"></p>}
      {error && <p className="text-danger">{error}</p>}
      <div className="mb-3">
        <button className="btn btn-primary" onClick={addUser}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-success mx-4"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
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

// ACtivity : Create a Expandabale text component.
// function App() {
//   return (
//     <ExpandableText maxChars = {10}>
//       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
//       libero, impedit eos minima quidem repellendus quis deleniti, porro ea
//       ratione amet vero molestias doloremque ipsa reiciendis culpa consectetur
//       ut. Officiis!
//     </ExpandableText>
//   );
// }

// Expense Tracker Project :
// function App() {
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const [expenses, setExpenses] = useState([
//     { id: 1, description: "aaa", amount: 10, category: "Utilities" },
//     { id: 2, description: "bbb", amount: 10, category: "Groceries" },
//     { id: 3, description: "ccc", amount: 10, category: "Entertainment" },
//     { id: 4, description: "ddd", amount: 10, category: "Utilities" },
//   ]);

//   const visibleCategories = selectedCategory
//     ? expenses.filter((expense) => expense.category === selectedCategory)
//     : expenses;

//   const handleOnDelete = (id: number) => {
//     setExpenses(expenses.filter((expense) => expense.id != id));
//     console.log("Deleted : " + id);
//   };

//   return (
//     <div>
//       <ExpenseForm
//         onSubmit={(expense) =>
//           setExpenses([...expenses, { id: expenses.length + 1, ...expense }])
//         }
//       ></ExpenseForm>
//       <div className="mb-4 mt-4">
//         <ExpenseFilter
//           onSelectCategory={(category) => setSelectedCategory(category)}
//         ></ExpenseFilter>
//       </div>
//       <ExpenseList expenses={visibleCategories} onDelete={handleOnDelete} />
//     </div>
//   );
// }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                        CONNECTING TO THE BACKEND :
// working with useEffect() hook:
// function App() {
//   const ref = useRef<HTMLInputElement>(null);

//   // afterRender
//   useEffect(() => {
//     // Side Effect :
//     if (ref.current) ref.current.focus();
//   });

//   useEffect(() => {
//     document.title = "Ammad React Course";
//   });

//   return (
//     <div>
//       <input ref={ref} type="text" className="form-control" />
//     </div>
//   );
// }

// Effect Dependencies :
// function App() {
//   const [category, setCategory] = useState("");

//   return (
//     <div>
//       <select
//         className="form-select"
//         defaultValue={""}
//         onChange={(event) => setCategory(event.target.value)}
//       >
//         <option value="" disabled>
//           {" "}
//           Select Category
//         </option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       <ProductList category={category}></ProductList>
//     </div>
//   );
// }

// Effect Dependencies :
// function App() {
//   const connect = () => console.log("Connecting ...");
//   const disconect = () => console.log("Disconnecting ...");

//   useEffect(() => {
//     connect();
//     return () => disconect();
//   });

//   return <div></div>;
// }
