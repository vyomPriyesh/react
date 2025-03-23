import { useEffect, useState } from 'react';
import './App.css';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  const [more, setMore] = useState(false);
  const [share, setShare] = useState(false);

  
  // Get the protocol, host, and port of the current page
  const protocol = window.location.protocol;  // 'http:' or 'https:'
  const host = window.location.hostname;      // e.g., '192.168.29.202'
  const port = window.location.port;          // Port, if available
  
  // Dynamically update Open Graph meta tags
  useEffect(() => {
    // Clean the description to remove HTML tag
    
    // Update Open Graph meta tags in the head
    document.querySelector('meta[property="og:title"]').setAttribute('content', 'title');
    document.querySelector('meta[property="og:description"]').setAttribute('content', 'हम यहाँ नवसारी के आयोजन मैं भी नारी शक्ति के सामर्थ्य को देख सकते हैं। : प्रधानमंत्री श्री');
    document.querySelector('meta[property="og:image"]').setAttribute('content', `https://img.youtube.com/vi/9WsSyatVk-c/0.jpg`);
    document.querySelector('meta[property="og:url"]').setAttribute('content', `${protocol}//${host}${port ? `:${port}` : ''}/?nid=81`);
    document.querySelector('meta[property="og:site_name"]').setAttribute('content', 'Info Gujrat');
    document.title = 'title'; // Update the page title
  }, []);

  const shareUrl = `${protocol}//${host}${port ? `:${port}` : ''}/?nid=81`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`;

  return (
    <>
      <a
        target="_blank"
        href={whatsappUrl}
        data-title={'title'}
        data-description={'हम यहाँ नवसारी के आयोजन मैं भी नारी शक्ति के सामर्थ्य को देख सकते हैं। : प्रधानमंत्री श्री'}
        data-image={`https://img.youtube.com/vi/9WsSyatVk-c/0.jpg`}
        data-url={whatsappUrl}
        onClick={() => console.log('Updating OG Tags...')}
        id="whatsapp-share"
        className="text-green-600"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default App;
