import "./App.css";

import { Routes, Route} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Reader } from "./Pages/Reader";
import { NotFound } from "./Pages/404";

function App() {

return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reader/:id" element={<Reader />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
);
}

export default App;
