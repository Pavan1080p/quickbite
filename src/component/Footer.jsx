import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#f0f0f0',
      color: '#333',
      padding: '20px',
      marginTop: '10px',
      borderTop: '1px solid #ddd',
      width: '100%',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        textAlign: 'left'
      }} className="row">
        
        {/* Brand Section */}
        <div className="col-md-3">
          <div>
            <h1>Quickbite</h1>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="col-md-3">
          <div style={{ display: 'flex' }}>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              style={{ 
                backgroundColor: '#d1d1d1',
                padding: '10px',
                borderRadius: '6px 0 0 6px',
                border: '1px solid #ddd',
                outline: 'none'
              }}
            />
            <button style={{
              backgroundColor: '#f97316',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '0 6px 6px 0',
              border: 'none',
              cursor: 'pointer'
            }}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Legal Pages Section */}
        <div className="col-md-3">
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Legal Pages</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: '#333', hover: 'underline' }}>Terms and Conditions</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Privacy</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Cookies</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Modern Slavery Statement</a></li>
            </ul>
          </div>
        </div>

        {/* Important Links Section */}
        <div className="col-md-3">
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Important Links</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Get Help</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Add Your Restaurant</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Sign Up to Deliver</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Create a Business Account</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>&copy; {new Date().getFullYear()} Quickbite. All rights reserved.</p>
        <p>
          Contact us at{' '}
          <a href="mailto:info@yourcompany.com" style={{ color: '#333', textDecoration: 'none' }}>
            info@quickbite.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
