import { Container } from "./container"

export const Header = () => {
    const title = "Kim sang hun";
    return (
        <header>
                <div className="container header">
                <h1>{title}</h1>
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
                </div>
        </header>
    )
}