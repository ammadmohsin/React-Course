import { useState } from "react";

// Passing data via Props :
// interface Props {
//   items: string[];
//   heading: string;
// }

// Passing data and funtions via props :
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  // onSelectItem is a property. its type is a function with a parameter item of data type string whose return type is void.
}

// Can also use (props : Props), then acces will be props.items or props.heading
function ListGroup({ items, heading, onSelectItem }: Props) {
  //   const items = ["Faisalabad", "Islamabad", "Karachi", "Sukkur", "Rawalpindi"];

  // Conditional Rendering :
  //   if (items.length === 0) {
  //     return <p>no item found</p>;
  //     }

  // Event Handler :
  //   const handleClick = (event: MouseEvent) => { // Import MouseEvent from "react".
  //     console.log(event);
  //   };

  //Managing State :
  // let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading} : </h1>
      {/* {items.length === 0? <p>No Items Found</p> : null}; */}
      {/* {items.length === 0 && <p>No items Found</p>} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              /* setSelectedIndex = index (This wont work as component cant access local variables : we use state hook)*/
                setSelectedIndex(index);
                onSelectItem(item);
            }}
          >
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
