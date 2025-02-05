import React from 'react'
import Image from "next/image";
import { assets } from '@/assets/assets';
const Contacct = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d2f1a738-897e-4c5c-b63b-50c98b861118");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div id="contact" className={`w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]`}>
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect With Me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get In Touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo officiis
        beatae esse iusto voluptates ipsam officia nemo, veniam possimus
        nesciunt modi ratione inventore eligendi unde, animi pariatur?
        Excepturi, sapiente dignissimos.
      </p>


      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
            <input type="text" placeholder='Enter Your Name' required name="name" id="" className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
            <input type="email" placeholder='Enter Your Email' required name="email" id="" className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
        </div>
        <textarea rows='6' placeholder='Enter Your Message' name='message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>

        <button type="submit" className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-700'>Submit Now 
<Image src={assets?.right_arrow_white} alt='' className='w-4'/>

      </button>
      <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contacct