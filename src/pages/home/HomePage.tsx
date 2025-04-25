import { Link } from "react-router-dom";


export default function HomePage() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <label>Home Page</label>
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
                    <Link to="/css-page">Ir para css Page</Link>
                    <Link to="/styled-component-page">Ir para Styled Component Page</Link>
                    <Link to="/tawind-page">Ir para Tailwind Page</Link>
                </nav>
            </header>
        </div>

    );
}
