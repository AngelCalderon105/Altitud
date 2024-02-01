export default function Form() {
    return(
   
       <form action=""  className="  bg-white rounded-xl m-10 px-5 w-7/12 ">
        <ul className="text-black flex flex-col justify-around">
            <li className="flex flex-col py-1">
                <label htmlFor="customerName">Full Name</label>
                <input type="text" className=" bg-lightest-blue rounded-md pl-2" placeholder="Your Name" id="customerName"/>
            </li>
            <li className="flex flex-col py-1">
                <label htmlFor="customerEmail">Your Email</label>
                <input type="text" className="bg-lightest-blue rounded-md pl-2" placeholder="Your Name" id="customerEmail"/>
            </li>
            <li className="flex flex-col py-1">
                <label htmlFor="">Timeline for Project</label>
                 <select id="Timeline" className="bg-lightest-blue rounded-md pl-2">
                    <option value=" " disabled selected hidden>Select your timeframe</option>
                     <option value="option1">1 month</option>
                     <option value="option2">1-2 months</option>
                     <option value="option3">2-4 months</option>
                     <option value="option4">4-6 months</option>
                 </select>
            </li>

            <li className="flex flex-col py-1">
                <label htmlFor="customerDescription">Description</label>
                 <textarea id="customerDescription" className="bg-lightest-blue rounded-md pl-2" placeholder="Let us know about your website." rows="5"></textarea>
            </li>

        </ul>
        <div className="flex justify-center p-3">
        <button className="bg-purple-blue rounded-md p-1.5 px-4">Submit</button>
        </div>
       </form>
   
    )
}