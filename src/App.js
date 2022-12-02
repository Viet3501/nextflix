import './App.scss'
import Home from '~/Pages/Home';
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import {publicRoutes as routes} from '~/routes'
function App() {
  // const userLoggin = useRef({name,pasword})

  return (
    <Router>
        <div className="App">
            <Routes>
              {routes.map((route,index) => {
                const Page = route.element
                return (
                  <Route key={index} path={route.path} element={<Page/>}></Route>
                )
              })}
            </Routes>
        </div>
    </Router>
  );
}

export default App;
