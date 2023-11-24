import React, { useState, useEffect } from 'react';

const App = () => {
  // State to store the dog image URL
  const [dogImage, setDogImage] = useState(null);
  // State to track loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the dog.ceo API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Set the dog image URL in the state
        setDogImage(data.message);
        // Update loading status
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Update loading status in case of an error
        setLoading(false);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      {/* Display loading message when data is being fetched */}
      {loading && <p>Loading...</p>}

      {/* Display dog image when data has been fetched */}
      {dogImage && (
        <img src={dogImage} alt="A Random Dog" style={{ width: '300px', height: '300px' }} />
      )}
    </div>
  );
};

export default App;
