import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Users from "./users";
import Any from "./any";


function App() {
  return (
      <div className="container mt-4 mb-4">

            {/*<CurrentUser>*/}
            <BrowserRouter>
              <Routes>

                <Route path="/users/*"
                element={<Users/>}/>
                <Route path="/any/*"
                  element={<Any/>}/>

              </Routes>
            </BrowserRouter>
           {/*</CurrentUser>*/}

      </div>
  );
}

export default App;
