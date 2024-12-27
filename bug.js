```javascript
// Assuming you're using the MongoDB Node.js driver

const { MongoClient } = require('mongodb');

async function updateDocument() {
  const uri = "mongodb://localhost:27017/"; // Replace with your connection string
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('myDatabase');
    const collection = db.collection('myCollection');

    // Incorrect update operation
    const result = await collection.updateOne( 
      { name: 'John Doe' }, // filter
      { $set: { age: 30, name: 'Jane Doe' } } // update
    );
    console.log(result);
  } finally {
    await client.close();
  }
}

updateDocument();
```