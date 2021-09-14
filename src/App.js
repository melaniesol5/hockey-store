import './App.css';
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';
import Salespoints from './pages/Salespoints';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const categories = [
    {id:1, category: "sticks"},
    {id:2, category: "bags"},
    {id:3, category:"shoes"},
    {id:4, category: "accesories"},
    {id:5, category: "clothes"},
    {id:6, category: "salespoints"},
    
  ];
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <NavBar/>
      </header>
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        {categories.map(category => <Route key={category.id} exact path="/category/:categoryId"> <Catalog  key={category.id}/> </Route> )}
        <Route exact path="/salespoints/"> <Salespoints/> </Route>
        <Route exact path="/item/:id"> <Detail/> </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
