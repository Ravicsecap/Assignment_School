
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    // Fetch data from MySQL
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/getSchools');
        setSchools(response.data);
      } catch (error) {
        console.error('Error fetching schools', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Schools</h1>
      <div className="school-list">
        {schools.map((school) => (
          <div key={school.id} className="school-card">
            <img src={`/schoolImages/${school.image}`} alt={school.name} />
            <h2>{school.name}</h2>
            <p>{school.address}</p>
            <p>{school.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSchools;
