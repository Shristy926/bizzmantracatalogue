import React from 'react';
import Layout from '../Layout/Layout';

export default function Contact() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Contact Us</h1>
          <p className="lead">We'd love to hear from you. Get in touch with us!</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-md-6">
              <h3>Send us a message</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Your message here"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 mt-5 mt-md-0">
              <h3>Contact Information</h3>
              <p><strong>Address:</strong> 123 Fleet Street, Business City, IN</p>
              <p><strong>Email:</strong> support@dizitek.com</p>
              <p><strong>Phone:</strong> +91 12345 67890</p>
              <p><strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
