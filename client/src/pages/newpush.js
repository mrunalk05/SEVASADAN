import React, { useEffect } from 'react';
import mongoose from 'mongoose';

// Define the doctor schema
const doctorSchema = new mongoose.Schema({
  id: Number,
  name: String,
  specialization: String,
  fee: String,
  address: String,
  website: String
});

// Create the Doctor model
const Doctor = mongoose.model('Doctor', doctorSchema);

const App1 = () => {
  useEffect(() => {
    // Connect to MongoDB
    mongoose.connect('mongodb+srv://mrunal:abcd@cluster0.hlkdohh.mongodb.net/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Push the data into MongoDB
    const pushDataToMongoDB = async () => {
      try {
        // JSON data to be pushed
        const doctorsData = [
          {
            id: 1,
            name: "Dr. Ravi Gupta",
            specialization: "Neurology",
            fee: "₹1,500",
            address: "789 Park Avenue, New Delhi",
            website: "https://www.drravigupta.com"
          },
          // Add other doctors' data here
        ];

        // Insert the data into MongoDB
        await Doctor.insertMany(doctorsData);
        console.log('Data pushed to MongoDB successfully!');
      } catch (error) {
        console.error('Error pushing data to MongoDB:', error);
      }
    };

    // Call the function to push the data
    pushDataToMongoDB();

    // Disconnect from MongoDB when component unmounts
    return () => {
      mongoose.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Pushing Data to MongoDB</h1>
      {/* Your React component content */}
    </div>
  );
};

export default App1;
