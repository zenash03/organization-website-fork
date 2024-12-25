"use client";
import { InstagramLogo, EnvelopeSimple } from "@phosphor-icons/react";
import { useRef, useState } from "react";


export default function KontakPage() {
  const form = useRef();

  const instagram = "https://instagram.com";
  const email = "example@gmail.com";
  
  const [errors, setErrors] = useState<{ from_name?: string; reply_to?: string; message?: string }>({});
  const [formValues, setFormValues] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  })
  
  const validateForm = () => {
    let validationErrors = {};
    if (!formValues.from_name) {
      validationErrors = { ...validationErrors, from_name: 'Name is required' };
    }
    if (!formValues.reply_to) {
      validationErrors = { ...validationErrors, reply_to: 'Email is required' };
    }
    if (!formValues.message) {
      validationErrors = { ...validationErrors, message: 'Message is required' };
    }
    return validationErrors;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationForms = validateForm();
    if (Object.keys(validationForms).length > 0) {
      setErrors(validationForms);
      return;
    }

    const toEmail = "recipient@example.com";
    const subject = formValues.from_name + " sent you a message";
    const mailtoLink = `mailto:${toEmail}?subject=${subject} Email&body=From: ${formValues.from_name}%0D%0AEmail: ${formValues.reply_to}%0D%0AMessage: ${formValues.message}`;
    window.location.href = mailtoLink;

    setErrors({});
    setFormValues({from_name: '', reply_to: '', message: ''});
    alert("Draft email created. Check the console for details.");
  }

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-start justify-center p-6 md:p-12 bg-gray-50">
      <div className="md:w-1/2 w-full md:pr-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Contact Us</h1>
        <form className="flex flex-col space-y-4 w-full" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              name="from_name"
              value={formValues.from_name}
              onChange={handleInputChange}
              className="font-medium w-full p-4 bg-white border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-primary text-gray-700"
            />
            {errors.from_name && (
              <p className="text-red-500 text-sm mt-1">{errors.from_name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              name="reply_to"
              value={formValues.reply_to}
              onChange={handleInputChange}
              className="font-medium w-full p-4 bg-white border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-primary text-gray-700"
            />
            {errors.reply_to && (
              <p className="text-red-500 text-sm mt-1">{errors.reply_to}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              className="font-medium w-full p-4 bg-white border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-primary text-gray-700 resize-none h-40"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="text-white font-bold p-4 bg-primary rounded-md hover:bg-primary-dark transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="md:w-1/2 w-full py-16 md:mt-0">
        <h5 className="text-2xl font-semibold mb-4 text-gray-900">
          Alternatively, reach us through:
        </h5>
        <div className="flex flex-col space-y-4">
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition duration-300 flex items-center"
            >
              <InstagramLogo size={28} className="mr-2" />
              <span className="text-base">Instagram</span>
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-gray-700 hover:text-primary transition duration-300 flex items-center"
            >
              <EnvelopeSimple size={28} className="mr-2" />
              <span className="text-base">Email</span>
            </a>
          )}
        </div>
      </div>
    </div>

    
  );
}
