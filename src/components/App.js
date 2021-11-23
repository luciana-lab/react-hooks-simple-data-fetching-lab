// create your App component here
import { useState, useEffect } from 'react';

function App() {
    const [image, setImage] = useState('')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(resp => resp.json())
            .then(data => setImage(data.message))
    }, [])

    if (!image) return <p>Loading...</p>

    return (
        <div>
            <img alt="A Random Dog" src={image} />
        </div>
    )
}

export default App;