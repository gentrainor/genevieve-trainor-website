import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Main() {
    const books = [
        {
          title: 'Class Schedule & ToDo',
          image: '/WH.jpg', 
          link: 'https://github.com/gentrainor/Schedule-and-ToDo',
          description: 'A web app to manage your class schedule and tasks efficiently.',
        },
        {
            title: 'Spotify Wrapped',
            image: '/AW.jpg',
            link: 'https://github.com/gentrainor/Spotify-Wrapped',
            description: 'A personalized analysis of your Spotify listening history.',
        },
        {
            title: 'AI Educational Tool',
            image: '/GE.jpg',
            link: 'https://github.com/gentrainor/HackGt23',
            description: 'An AI-powered platform to assist in education and learning.',
        },
        {
            title: 'Personal Website',
            image: '/LW.jpg',
            link: 'https://github.com/gentrainor/genevieve-trainor-website',
            description: 'A portfolio showcasing my coding projects and experience.',
        }
    ];

    const socials = [
        {
          title: 'LinkedIn',
          image: '/AOGG.jpg', 
          link: 'https://www.linkedin.com/in/genevieve-trainor22/',
        },
        {
          title: 'GitHub',
          image: '/DG.jpg', 
          link: 'https://github.com/gentrainor',
        },
      ];

    const [hoveredBook, setHoveredBook] = useState(null);

    return (
        <div style={{ textAlign: 'center' }}>
          <h1>Genevieve's Bookstore</h1>
          <p>Click on a book to explore my coding projects!</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              marginTop: '20px',
            }}
          >
            {books.map((book, index) => (
              <Link key={index} href={book.link} target="_blank" style={{ textDecoration: 'none' }}>
                <div 
                  style={{
                    position: 'relative',
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setHoveredBook(index)}
                  onMouseLeave={() => setHoveredBook(null)}
                >
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={100}
                    height={150}
                    style={{
                      borderRadius: '5px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      transition: 'transform 0.3s ease-in-out',
                      transform: hoveredBook === index ? 'scale(1.1)' : 'scale(1)',
                    }}
                  />
                  <p style={{ marginTop: '10px', color: '#333' }}>{book.title}</p>

                  {/* Hover Description Box - Now Fixed Below the Book */}
                  {hoveredBook === index && (
                    <div style={{
                      position: 'absolute',
                      top: '110%', /* Keeps text below the book */
                      width: '100%', /* Matches book width so it stays still */
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      padding: '10px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      fontSize: '14px',
                      zIndex: 10,
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                      animation: 'fadeIn 0.3s ease-in-out',
                    }}>
                      {book.description}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Social Media Section - Moved Above <style jsx> */}
          <h2 style={{ marginTop: '40px' }}>Find Me Online</h2>
          <p>Click on a book to visit my social media profiles!</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              marginTop: '20px',
            }}
          >
            {socials.map((social, index) => (
              <Link key={index} href={social.link} target="_blank" style={{ textDecoration: 'none' }}>
                <div style={{ textAlign: 'center' }}>
                  <Image
                    src={social.image}
                    alt={social.title}
                    width={100}
                    height={150}
                    style={{ borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                  />
                  <p style={{ marginTop: '10px', color: '#333' }}>{social.title}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Fade-In Animation for Hover Effect */}
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
    );
}

