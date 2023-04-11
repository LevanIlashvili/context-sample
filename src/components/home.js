import { useContext } from "react"
import { valueContext } from "../providers/value.provider";
import { Card } from "./card";

export function Home() {
    const { value, setValue } = useContext(valueContext);
    
    return (
        <div className="App">
            <h1>React Hooks</h1>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <Card title={value} description={"Hello World"} />
      </div>
    )
}