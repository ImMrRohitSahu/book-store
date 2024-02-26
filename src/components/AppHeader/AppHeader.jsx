import { useState } from "react";
import AddBook from "../AddBook/AddBook";

const AppHeader = () => {
  const [addPopUp, setAddPopUp] = useState(false);
  return (
    <>
      <div className="appheader">
        <h3>SplendorNet</h3>
        <div className="add-circle"onClick={()=>setAddPopUp(true)}>
          <h1>+</h1>
        </div>
      </div>
      {addPopUp && <AddBook setAddPopUp={setAddPopUp} />}
    </>
  );
};

export default AppHeader;
