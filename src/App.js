import "./index.css";
import Footer from "./Footer";
import Nav from "./Nav";
import MyRepositories from './MyRepositories';
 
function App() {
  return (
    <div>
      <Nav />
      <div >
      <MyRepositories />
    </div>
      <Footer />
    </div>
  );
}

export default App;
