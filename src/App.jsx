import "./App.css";
import Blogs from "./Componenets/Blogs/Blogs";
import Bookmarks from "./Componenets/Bookmarks/Bookmarks";
import Header from "./Componenets/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="md:flex">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
}

export default App;
