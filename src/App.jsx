import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 py-8 sm:py-12 md:py-16">
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
