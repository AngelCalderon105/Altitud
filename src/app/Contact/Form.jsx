export default function Form() {
    return(
   
       <form action=""  className="bg-white rounded-xl flex flex-col justify-around text-2xl sm:text-2xl md:text-base lg:text-lg 2xl:text-xl px-3 sm:px-4 md:px-3 2xl:px-6 w-10/12 sm:w-9/12 md:w-10/12 lg:w-9/12 xl:w-10/12 2xl:w-9/12 mb-40 md:mb-10 m-5">
        <ul className="text-black flex flex-col p-3">
            <li className="flex flex-col py-2">
                <label htmlFor="customerName">Full Name</label>
                <input type="text" className=" bg-lightest-blue rounded-md pl-2" placeholder="Your Name" id="customerName"/>
            </li>
            <li className="flex flex-col py-2">
                <label htmlFor="customerEmail">Your Email</label>
                <input type="text" className="bg-lightest-blue rounded-md pl-2" placeholder="Your Name" id="customerEmail"/>
            </li>
            <li className="flex flex-col py-2">
                <label htmlFor="Timeline">Timeline for Project</label>
                 <select id="Timeline" className="bg-lightest-blue rounded-md pl-2">
                    <option value=" " disabled selected hidden>Select your timeframe</option>
                     <option value="option1">1 month</option>
                     <option value="option2">1-2 months</option>
                     <option value="option3">2-4 months</option>
                     <option value="option4">4-6 months</option>
                 </select>
            </li>

            <li className="flex flex-col py-2">
                <label htmlFor="customerDescription">Description</label>
                 <textarea id="customerDescription" className="bg-lightest-blue rounded-md pl-2" placeholder="Let us know about your website." rows="5"></textarea>
            </li>

        </ul>
        <div className="flex justify-center p-3">
        <button className="bg-purple-blue rounded-md p-1.5 px-14 md:px-7">Submit</button>
        </div>
       </form>
   
    )
}