import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactSchema = new Schema({
    name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address.'],
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number.'],
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;