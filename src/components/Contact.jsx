import { useState, useRef, useEffect } from "react";
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xjkypbbj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({
          success: true,
          error: false,
          message: "Your message has been sent successfully! I will get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus({
          success: false,
          error: true,
          message: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      setFormStatus({
        success: false,
        error: true,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      
      // Reset the form status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          success: false,
          error: false,
          message: "",
        });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <h2 className="section-heading">Get In Touch</h2>

      <div className="contact-content">
        <div className="contact-text fade-in">
          <p>
            I'm currently open to new opportunities and collaborations. Whether
            you have a question or just want to say hi, I'll do my best to get
            back to you!
          </p>
        </div>

        <form
          ref={formRef}
          className="contact-form fade-in delay-1"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              autoComplete="off"
            ></textarea>
          </div>

          <button type="submit" className="button" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {formStatus.message && (
            <div
              className={`form-status ${
                formStatus.success ? "success" : "error"
              }`}
            >
              {formStatus.message}
            </div>
          )}
        </form>
      </div>

      <div className="contact-alternative fade-in delay-2">
        <p>Prefer email? Reach out directly at:</p>
        <a href="mailto:ayeshashaw520@gmail.com" className="email-link">
          ayeshashaw520@gmail.com
        </a>
      </div>

      
    </section>
  );
};

export default Contact;