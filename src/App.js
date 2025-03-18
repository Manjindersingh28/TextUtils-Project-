// import About from "./About";
import "./App.css";
import Navbar from "./Navbar";
import Textform from "./Textform";
function App() {
  return (
    <>
      <Navbar text="TextUtils" home="Home" about="About" />
      <div className="container my-4">
        <Textform
          logoName="Enter Text below to convert to uppercase/lowercase"
          heading="UP and GO"
        />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
