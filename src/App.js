import Hello from "./component/Hello";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      {/* <p style={{ color: "Green", border: "2px solid yellow" }}>Hello John</p>
      <p style={{ color: "Green", border: "2px solid yellow" }}>Hello Jack</p>
      <p style={{ color: "Green", border: "2px solid yellow" }}>Hello Jane</p> */}
      <Header />
      <Hello name="John" />
      <Hello name="Jack" />
      <Hello name="Jame" />
      <Footer />
    </div>
  );
}

export default App;
