import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ModelPreview from "./components/client/ModelPreview.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import DiamondDemo from "./components/client/DiamondDemo.jsx";
import Login from "./components/client/Login.jsx";
import Signup from "./components/client/Signup.jsx";
// import ConfiguratorLayout from "./components/client/ConfiguratorLayout.jsx";
import Configurator from "./components/client/Configurator.jsx";
import { UserExperience } from "./components/shared/UserExperience.jsx";
// import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import AuthRoutes from "./utils/AuthRoutes.jsx";
import { AuthProvider } from "./utils/AuthProvider.jsx"
import PrivateRoutes from "./utils/PrivateRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <Routes>

          <Route path="/" element={<AuthRoutes />}>
            <Route exact path="login" element={<Login />} />
            <Route exact path="signup" element={<Signup />} />
          </Route>
        
          <Route path="/" 
          // element={<PrivateRoutes />}
          >  
            <Route exact path="user" element={<UserExperience />}>
              <Route
                exact
                path="configurator"
                element={<Configurator />}/>
            </Route>
          </Route>

        </Routes>
      </AuthProvider>

      {/* <Routes>
        <Route exact path="/testRoute" element={<App />} />
        <Route exact path="/clientPreview" element={<ModelPreview />} />
        <Route exact path="/" element={<DiamondDemo />} /> */}

        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route
          exact
          path="/login"
          // element={auth === false ? <Login /> : <Redirect to="/" />}
          element={<Login />}
        /> */}


      {/* </Routes> */}
    </React.StrictMode>
  </BrowserRouter>
);
