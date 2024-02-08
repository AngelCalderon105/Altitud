'use client'
import { useState} from "react"

export default function Form() {
const [formData, setFormData] = useState({clientName:'',clientEmail:'', clientTimeline:'',clientDescription:''});
const [error, setError] = useState([]);

const handleChange = (evt) => {
    const changeField = evt.target.name;
    const newValue = evt.target.value;

    setFormData(currData => ({
        ...currData,
        [changeField]: newValue,
      }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    const { clientName, clientEmail, clientTimeline, clientDescription } = formData;


    const res = await fetch('api/contact',{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ clientName, clientEmail, clientTimeline, clientDescription}),
    } );

    const {msg} = await res.json();
    setError(msg);
    
    setFormData({clientName:'',clientEmail:'', clientTimeline:'',clientDescription:''});
};
    return(
   
       <form action="" onSubmit={handleSubmit}  className="bg-white rounded-xl flex flex-col justify-around text-sm sm:text-lg md:text-sm lg:text-lg px-3 sm:px-4 md:px-3 2xl:px-6 w-10/12 sm:w-9/12 md:w-10/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12 m-5">
        <ul className="text-black flex flex-col p-3">
            <li className="flex flex-col py-2">
                <label htmlFor="clientName">Full Name</label>
                <input name="clientName" type="text" className=" bg-lightest-blue rounded-md pl-2" placeholder="Your Name" id="clientName" onChange={handleChange} value={formData.clientName}/>
            </li>
            <li className="flex flex-col py-2">
                <label htmlFor="clientEmail">Your Email</label>
                <input name="clientEmail" type="text" className="bg-lightest-blue rounded-md pl-2" placeholder="Your Email" id="clientEmail" onChange={handleChange} value={formData.clientEmail}/>
            </li>
            <li className="flex flex-col py-2">
                <label htmlFor="Timeline">Timeline for Project</label>
                 <select name="clientTimeline" id="Timeline" className="bg-lightest-blue rounded-md pl-2" onChange={handleChange} value={formData.clientTimeline}>
                    <option value="">Select your timeframe</option>
                     <option value="1 month">1 month</option>
                     <option value="1-2 months">1-2 months</option>
                     <option value="2-4 month">2-4 months</option>
                     <option value="4-6 months">4-6 months</option>
                 </select>
            </li>

            <li className="flex flex-col py-2">
                <label htmlFor="clientDescription">Description</label>
                 <textarea name="clientDescription" id="clientDescription" className="bg-lightest-blue rounded-md pl-2" placeholder="Let us know about your website." rows="5"  onChange={handleChange} value={formData.clientDescription}></textarea>
            </li>

        </ul>
        <div className="flex justify-center p-3">
        <button className="bg-purple-blue rounded-md p-1.5 px-14 md:px-7">Submit</button>
        </div>
       </form>
   
    )
}