import "./App.css";

import { Routes, Route} from "react-router-dom";
import { Home } from "./Pages/Home";

function App() {

return (
    <div className="relative w-screen h-screen overflow-hidden flex bg-light-main-color-1 dark:bg-main-color-1 z-0 max-w-full">
            <div className="relative flex flex-col grow max-w-full min-w-0">
                <div className="bg-light-main-color-2 dark:bg-main-color-2 relative rounded-tl-lg grow overflow-hidden max-w-full">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </div>
);
}

export default App;
