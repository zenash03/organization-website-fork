"use client";
import { useRef, useState } from "react";


export default function KontakPage() {
  const form = useRef();

  
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
    <div className="min-h-screen w-full md:mt-10 py-6 md:py-8 flex flex-col justify-start items-center">
      <h1 className="text-2xl font-semibold mb-5 text-gray-900">Kontak Kami</h1>
      <form className="flex flex-col w-full max-w-4xl px-8" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nama Pengirim" name="from_name" value={formValues.from_name} onChange={handleInputChange} className="font-medium w-full p-4 bg-gray-50 border border-gray-200 rounded-sm outline-gray-300 text-gray-700" />
        {
          errors.from_name && <p className="text-red-500 font-semibold text-right">{errors.from_name}</p>
        }

        <input type="email" placeholder="Email Pengirim" name="reply_to" value={formValues.reply_to} onChange={handleInputChange} className="font-medium w-full p-4 mt-4 bg-gray-50 border border-gray-200 rounded-sm outline-gray-300 text-gray-700" />
        {
          errors.reply_to && <p className="text-red-500 font-semibold text-right">{errors.reply_to}</p>
        }
        <textarea
          placeholder="Isi Pesan"
          name="message"
          value={formValues.message}
          onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
          className="font-medium w-full min-h-40 p-4 mt-4 bg-gray-50 text-gray-700 border border-gray-200 rounded-sm outline-gray-300"
        >
        </textarea>
        {
          errors.message && <p className="text-red-500 font-semibold text-right">{errors.message}</p>
        }
        <button className="text-white p-4 mt-4 bg-primary rounded-md" type="submit" >Send</button>
      </form>
    </div>
  );
}
