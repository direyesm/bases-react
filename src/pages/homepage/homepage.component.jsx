import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.style.scss";
// pattern design;
//1.stateless component: que solo renderizan data ()
//2. statefull component: renderizar y manejan procesos lógicos {}

const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
