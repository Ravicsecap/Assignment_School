
import mysql from 'mysql';

// Create a connection to the MySQL server
const db = mysql.createConnection({
  host: 'your-mysql-host',
  user: 'your-mysql-username',
  password: 'your-mysql-password',
});

// Connect to MySQL server
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL server:', err);
    throw err;
  }

  console.log('Connected to MySQL server');

  // Create the database and tables if they don't exist
  db.query(
    `CREATE DATABASE IF NOT EXISTS mydatabase;
     USE mydatabase;
     CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name TEXT,
        address TEXT,
        city TEXT,
        state TEXT,
        contact INT,
        image TEXT,
        email_id TEXT
     );`,
    (error) => {
      if (error) throw error;
      console.log('Database and table created or already exist');
    }
  );
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, address, city, state, contact, image, email_id } = req.body;

      // Insert data into MySQL
      db.query(
        'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (text,text,text,text,text,text,text)',
        [name, address, city, state, contact, image, email_id],
        (error, results) => {
          if (error) throw error;

          console.log('School added:', results);
          res.status(200).json({ success: true });
        }
      );
    } catch (error) {
      console.error('Error adding school:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
