
import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'your-mysql-host',
  user: 'your-mysql-username',
  password: 'your-mysql-password',
  database: 'your-database-name',
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch data from MySQL
      db.query('SELECT id, name, address, city, image FROM schools', (error, results) => {
        if (error) throw error;

        console.log('Schools fetched:', results);
        res.status(200).json(results);
      });
    } catch (error) {
      console.error('Error fetching schools:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
