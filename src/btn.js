import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / document.documentElement.scrollHeight) * 100;
      
      // Show button if scroll percentage is greater than 10%
      if (scrollPercentage > 10) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          style={buttonStyle}
        >
          ↑ {/* Up arrow icon */} 
        </button>
      )}
    </>
  );
}

// Inline CSS for the button (You can also use external CSS if you prefer)
const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: 'red',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default ScrollToTopButton;
