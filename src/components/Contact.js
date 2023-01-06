import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nozl2cd', 'template_axzrnqa', form.current, 'Zm7EFxpa6opHU7rcU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        e.target.reset()
  };


  return (
    
    <div>
      
    <form ref={form} onSubmit={sendEmail}>
    <section class=" dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-center text-white dark:text-white">Contact Me!</h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Send me a message here, or at <a className="text-secondary" href="mailto:nathaniel.rossloyo">nathaniel.rossloyo@gmail.com</a></p>

          
          <div class="space-y-8">
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium dark:text-gray-300">Your Email</label>
                  <input type="email" id="user_email" name="user_email" class="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email@gmail.com" required/>
              </div>
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium dark:text-gray-300">Your Name</label>
                  <input type="text" id="user_name" name="user_name" class="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required/>
              </div>
              <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium dark:text-gray-400">Your Message</label>
                  <textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-secondary focus:border-secondary dark:bg-gray-700 dark:border-gray-600 text-black dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
              </div>
              
              <button htmlFor="my-modal" className="btn btn-secondary" type="submit" value="send" class="btn btn-secondary">Send message</button>
              <p></p>

          
              <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Message Sent!</h3>
                <p className="py-4">Thanks for reaching out! I'll get back to you shortly.</p>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn btn-secondary">close</label>
                </div>
              </div>
            </div>
              
          </div>
      </div>
    </section>
    </form>
    </div>
  );
};

export default Contact

