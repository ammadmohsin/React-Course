import ListGroup from "./components/ListGroup";
// import "function" from "filePath";

function App() {
  // return <div><Message></Message></div> OR
  const items = ["Faisalabad", "Islamabad", "Karachi", "Sukkur", "Rawalpindi"];
  //onSelectItem handler :
  const handleSelectedItem = (item : string) => {
    console.log(item);
  }

  return (
    <div>
      {/* <ListGroup /> */}
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem}/>
      {/*passing a static value in heading so no need to use curly bracket. */}
    </div>
  );
}

export default App;
