import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    clientName:  {
        type: String,
        required:[true,'Name is required'],
        trim: true,
        minLength:[2,'Name must be longer than 2 characters'],
        maxLength:[50, 'Name must be lesser than 50 characters'] 
    },
    clientEmail:  {
        type: String,
        required:[true,'Email is required'],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"]
    },
    clientTimeline:{
        type: String,
        required:[true,'Timeline is required'] 
    },
    clientTelephone: {
        type:String,
        required:[true,'Phone number required'],
        match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, 'Invalid phone number']
    },
    clientDescription:  {
        type: String,
        required:[true,'Description is required'],
        trim: true,
        minLength:[2,'Description must be longer than 2 characters'],
        maxLength:[50, 'Description must be lesser than 50 characters'] 
    },
    entryDate: {
        type:Date,
        default:Date.now
    },
    
   
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;