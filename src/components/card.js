import { Button } from "./button";

export function Card({ description }) {
    return (
        <div className="card">
            <p>{description}</p>
            <Button />
        </div>
    )
}