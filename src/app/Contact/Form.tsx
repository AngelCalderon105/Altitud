'use client'
import { useState } from "react";
import checkMark from '../assets/confirmation.svg'
import Image from "next/image";
interface FormData {
    clientName: string;
    clientEmail: string;
    clientTimeline: string;
    clientTelephone: string;
    clientDescription: string;
}

interface ValidationData {
    clientName: boolean;
    clientEmail: boolean;
    clientTimeline: boolean;
    clientTelephone: boolean;
    clientDescription: boolean;
}

export default function Form() {
    const [formData, setFormData] = useState<FormData>({ clientName: '', clientEmail: '', clientTimeline: '', clientTelephone:'', clientDescription: ''  });
    const [validation, setValidation] = useState<ValidationData>({ clientName: true, clientEmail: true, clientTimeline: true, clientTelephone:true, clientDescription: true  });
    const [error, setError] = useState<string | null>(null);
    const [confirmation,setConfirmation] = useState<Boolean>(false);
    
    // Email validation regex
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i;
    const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

    const validateInput = (name:string, value:string) => {
        if (name === 'clientEmail') {
            return emailRegex.test(value);
        }
        else if(name ==='clientTelephone') {
            return phoneRegex.test(value);
        }
        // Add other validations as needed
        return true;
    };

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = evt.target;
        let isValid = true;
    //resets error state if field is cleared
        if (value.length > 0) {
            isValid = validateInput(name, value);
        }
    
        setFormData(currData => ({
            ...currData,
            [name]: value
        } as FormData));
    
        setValidation(currValidation => ({
            ...currValidation,
            [name]: isValid
        }));
    
        if (name === 'clientEmail' && !isValid) {
            setError("Invalid Email");
        } else if (name === 'clientTelephone' && !isValid) {
            setError("Invalid Phone Number");
        } else {
            setError(null);
        }
    };
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        // If all fields are entered and valid
        if (!validation.clientEmail || !validation.clientTelephone ||!validation.clientName || !validation.clientTimeline) {
            // If either is invalid, set an appropriate error message and return early
            setError("Please fill all fields out and try again.");
            return;
        }
    
        // Rest of your submission logic
        const { clientName, clientEmail, clientTimeline, clientTelephone, clientDescription } = formData;
        const res = await fetch('../api', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ clientName, clientEmail, clientTimeline, clientTelephone, clientDescription }),
        });
    
        const { msg,confirmation } = await res.json();
       
        if(!confirmation) {
            setConfirmation(true);
        }
        else {
             setError(msg);
        }

       
        // Reset form data after successful submission
        setFormData({ clientName: '', clientEmail: '', clientTimeline: '', clientTelephone: '', clientDescription: '' });
    };
    
 const handleClosePopup = () => {
            setConfirmation(false);
        }

    const ConfirmationPopup: React.FC = () => {
            return (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
        <div className="flex flex-col items-center text-center bg-purple-700  rounded-2xl shadow-lg m-5 p-5 w-9/12 sm:w-1/2 md:w-5/12 lg:w-4/12 xl:w-3/12">
                   <Image src={checkMark} className="w-28 " alt="confirmation"/>
                <h1>Thank you for your interest in Altitud. We will get back to you ASAP!</h1>
                <button onClick={handleClosePopup} className="mt-4 bg-purple-blue rounded-md p-1.5 px-4">Close</button>
            </div>
            </div>
            )
        }
    function isKeyOfValidationData(key: string): key is keyof ValidationData {
        return key in validation;
    }
    // Function to return the appropriate input class
   const getInputClass = (fieldName: string) => {
    if (isKeyOfValidationData(fieldName)) {
        return `bg-lightest-blue rounded-md p-1 ${validation[fieldName] ? '' : 'border-2 border-red-500 '}`;
    }
    return 'bg-lightest-blue rounded-md p-1'; // Default class if fieldName is not a valid key
};
    return(
          
       <form action="" onSubmit={handleSubmit}  className="bg-white rounded-xl flex flex-col justify-around text-xl px-3 sm:px-4 md:px-3 2xl:px-6 w-11/12 sm:w-10/12 2xl:w-9/12 my-5">
         {confirmation && <ConfirmationPopup />}
        <ul className="text-black flex flex-col p-3">
            <li className="flex flex-col py-2">
                <label htmlFor="clientName">Full Name</label>
                <input name="clientName" type="text" className=" bg-lightest-blue rounded-md  p-1 " placeholder="Your Name" id="clientName" onChange={handleChange} value={formData.clientName}/>
            </li>

            <li className="flex flex-col py-2">
            <label htmlFor="clientTelephone">Your Phone Number {!validation.clientTelephone ? <p className="text-red-500">Invalid Telephone Number</p> : ''} </label> 
            <input name="clientTelephone" type="text" className={getInputClass('clientTelephone')} placeholder="(xxx)-xxx-xxxx" id="clientTelephone" onChange={handleChange} value={formData.clientTelephone} />
             </li>
        
            <li className="flex flex-col py-2">
                <label htmlFor="clientEmail">Your Email {!validation.clientEmail ? <p className="text-red-500">Invalid Email</p>: ''}</label>
                <input name="clientEmail" type="text" className={getInputClass('clientEmail')} placeholder="Your Email" id="clientEmail" onChange={handleChange} value={formData.clientEmail}/>
            </li>

            <li className="flex flex-col py-2">
                <label htmlFor="Timeline">Timeline for Project</label>
                 <select name="clientTimeline" id="Timeline" className="bg-lightest-blue rounded-md p-1" onChange={handleChange} value={formData.clientTimeline}>
                    <option value="" disabled hidden>Select your timeframe</option> 
                     <option value="1 month">1 month</option>
                     <option value="1-2 months">1-2 months</option>
                     <option value="2-4 month">2-4 months</option>
                     <option value="4-6 months">4-6 months</option>
                 </select>
            </li>

            <li className="flex flex-col py-2">
                <label htmlFor="clientDescription">Description</label>
                 <textarea name="clientDescription" id="clientDescription" className="bg-lightest-blue rounded-md pl-2" placeholder="Let us know about your website." rows={5}  onChange={handleChange} value={formData.clientDescription}></textarea>
            </li>

        </ul>
        <div className="flex justify-center pb-3  md:p-3">
        <button className="bg-purple-blue rounded-md p-1.5 px-14 ">Submit</button>
        </div>
       </form>
   
    )
}