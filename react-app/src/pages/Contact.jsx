import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      company: '',
      country: '',
      product: '',
      quantity: '',
      message: ''
    });
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-description">
            Get in touch for pricing, samples, or any inquiries about our coconut products.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="contact-grid">
            <AnimatedSection>
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Send Us a Message</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="USA">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="India">India</option>
                      <option value="China">China</option>
                      <option value="Japan">Japan</option>
                      <option value="Australia">Australia</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label htmlFor="product">Product Interest *</label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Product</option>
                      <option value="desiccated-fine">Desiccated Coconut Fine</option>
                      <option value="desiccated-medium">Desiccated Coconut Medium</option>
                      <option value="coconut-flakes">Coconut Flakes</option>
                      <option value="vco">Virgin Coconut Oil</option>
                      <option value="coconut-cream">Coconut Cream</option>
                      <option value="coconut-milk-powder">Coconut Milk Powder</option>
                      <option value="multiple">Multiple Products</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="quantity">Estimated Quantity</label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 20 tons/month"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Please describe your requirements, specifications needed, or any questions you have..."
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-secondary" style={{ width: '100%' }}>
                  Send Inquiry
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="contact-info-card">
                <h3>Get in Touch</h3>
                
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <div>
                      <h4>Office Address</h4>
                      <p>Jl. Industri No. 123<br />Riau, Sumatra 28xxx<br />Indonesia</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <div>
                      <h4>Phone / WhatsApp</h4>
                      <p>+62 812 3456 7890</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <div>
                      <h4>Email</h4>
                      <p>export@tropicoco.com<br />sales@tropicoco.com</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <div>
                      <h4>Business Hours</h4>
                      <p>Monday - Friday: 8:00 - 17:00<br />Saturday: 8:00 - 12:00<br />(GMT+7 Jakarta Time)</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                  <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Quick Response</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', margin: 0 }}>
                    We typically respond within 24 hours. For urgent inquiries, please contact us via WhatsApp.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-secondary">
        <div className="container">
          <AnimatedSection className="section-header">
            <p className="section-subtitle">Our Location</p>
            <h2 className="section-title">Visit Our Factory</h2>
            <p className="section-description">
              Located in Riau, Sumatra - the heart of Indonesia&apos;s coconut production region.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div style={{ 
              background: 'var(--white)', 
              borderRadius: 'var(--radius-xl)', 
              padding: '2rem',
              textAlign: 'center'
            }}>
              <div style={{ 
                background: 'var(--gray-200)', 
                height: '400px', 
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)'
              }}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginBottom: '1rem' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <p>Riau, Sumatra, Indonesia</p>
                  <p style={{ fontSize: '0.875rem' }}>Factory tours available by appointment</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default Contact;
