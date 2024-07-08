import Contact from '../models/contact.model.js';

// Controller function to handle POST requests to save form data
const createEnquiry = async (req, res) => {
    // Extract form data from request body
    const { name,  email, phone } = req.body;

    try {
        // Create a new Contact document
        const newEnquiry = new Contact({  name,  email , phone});

        // Save the new Contact document to MongoDB
        await newEnquiry.save();

        // Respond with success message
        res.status(201).json({ success: true, message: 'Contact saved successfully' });
    } catch (error) {
        // Handle errors
       console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export default createEnquiry;