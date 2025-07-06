import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");

async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
}

return (
    <main className="container">
        <h1>Welcome to Tauri + React</h1>

        <div className="row">
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo vite" alt="Vite logo" />
            </a>
            <a href="https://tauri.app" target="_blank">
                <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <p>Click on the Tauri, Vite, and React logos to learn more.</p>

        <form
        className="row"     
        onSubmit={(e) => {
            e.preventDefault();
            greet();
        }}>
            <input id="greet-input" onChange={(e) => setName(e.currentTarget.value)} placeholder="Enter a name..."/>
            <button type="submit">Greet</button>
        </form>
        <p>{greetMsg}</p>

    <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold text-center text-primary">
        ✅ TailwindCSS est bien actif
        </h1>

        <div className="flex justify-center">
            <button className="btn btn-primary">Bouton DaisyUI</button>
        </div>

        <div className="alert alert-info shadow-lg">
            <span>Si tu vois ça stylé → DaisyUI fonctionne aussi 😎</span>
        </div>
    </div>
</main>
);
}

export default App;
