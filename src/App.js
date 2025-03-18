import "./App.css";
import Navbar from "./Navbar";
import Textform from "./Textform";
function App() {
  return (
    <>
      <Navbar text="TextUtils" home="let's start" />
      <div className="container my-4">
        <Textform
          logoName="Enter Text below to convert to uppercase/lowercase"
          heading="UP and GO"
        />
      </div>
    </>
  );
}

export default App;
