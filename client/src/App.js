import { useState } from 'react';
import Button from '~/components/Button';

function App() {
    const [data, setData] = useState([]);
    fetch('http://localhost:8080/api/tutorials')
        .then((response) => response.json())
        .then((data) => setData(data));

    return (
        <div className='App'>
            {data.map((data) => (
                <li key={data.id}>
                    Title: {data.title}
                    <br />
                    Description: {data.description}
                </li>
            ))}
            <Button />
        </div>
    );
}

export default App;
