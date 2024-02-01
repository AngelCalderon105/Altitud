export default function Form() {
    return(
   
       <form action=""  className="  bg-white rounded-xl m-5 px-5">
        <ul className="text-black flex flex-col justify-around pr-10 pl-10">
            <li className="flex flex-col py-1">
                <label htmlFor="customerName">Full Name</label>
                <input type="text" className=" bg-lightest-blue" placeholder="Your Name" id="customerName"/>
            </li>
            <li className="flex flex-col py-1">
                <label htmlFor="customerEmail">Your Email</label>
                <input type="text" className="bg-lightest-blue" placeholder="Your Name" id="customerEmail"/>
            </li>
            <li className="flex flex-col py-1">
                <label htmlFor="">Timeline for Project</label>
                 <select id="Timeline" className="bg-lightest-blue">
                    <option value="" disabled selected hidden>Select your timeframe</option>
                     <option value="option1">1 month</option>
                     <option value="option2">1-2 months</option>
                     <option value="option3">2-4 months</option>
                     <option value="option4">4-6 months</option>
                 </select>
            </li>

            <li className="flex flex-col py-1">
                <label htmlFor="customerDescription">Description</label>
                 <textarea id="customerDescription" className="bg-lightest-blue w-full" placeholder="Tell us about your website." rows="5"></textarea>
            </li>

        </ul>
        <div className="flex justify-center">
        <button className="bg-purple-blue rounded-md p-1.5 m-2">Submit</button>
        </div>
       </form>
   
    )
}