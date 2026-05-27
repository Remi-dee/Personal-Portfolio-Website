import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

const contactOptions = [
  {
    icon: <MdOutlineEmail size={20} />,
    label: "Email",
    value: "remidanielaluko@gmail.com",
    href: "mailto:remidanielaluko@gmail.com",
    cta: "Send email",
  },
  {
    icon: <BsLinkedin size={18} />,
    label: "LinkedIn",
    value: "Remi Daniel Aluko",
    href: "https://linkedin.com/in/remi-daniel-aluko",
    cta: "Connect",
  },
  {
    icon: <BsWhatsapp size={18} />,
    label: "WhatsApp",
    value: "+234 903 539 1575",
    href: "https://wa.me/2349035391575",
    cta: "Message",
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_jpnhu97",
      "template_km520xf",
      form.current,
      "Mmh0fFVAyyrywVZFc"
    );
    alert("Message sent!");
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
          Get in touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contact Me
        </h2>
        <p className="text-slate-400 mb-12 max-w-lg">
          Open to new opportunities, collaborations, or just a good conversation.
          Drop me a message and I'll get back to you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact options */}
          <div className="space-y-4">
            {contactOptions.map(({ icon, label, value, href, cta }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 bg-[#111118] border border-white/5 rounded-xl hover:border-indigo-500/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                  <p className="text-sm text-slate-200 truncate">{value}</p>
                </div>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors shrink-0"
                >
                  {cta} →
                </a>
              </div>
            ))}
          </div>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full bg-[#111118] border border-white/5 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/40 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full bg-[#111118] border border-white/5 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/40 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              required
              className="w-full bg-[#111118] border border-white/5 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/40 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-indigo-500 text-white text-sm font-medium rounded-xl hover:bg-indigo-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
