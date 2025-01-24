import Link from 'next/link';
import Image from 'next/image';

export default function Main() {
    const books = [
        {
          title: 'Class Schedule & ToDo',
          image: '/WH.jpg', 
          link: 'https://github.com/gentrainor/Schedule-and-ToDo',
        },
        {
            title: 'Spotify Wrapped',
            image: '/AW.jpg',
            link: 'https://github.com/gentrainor/Spotify-Wrapped',
        },
        {
            title: 'AI Educational Tool',
            image: '/GE.jpg',
            link: 'https://github.com/gentrainor/HackGt23',
        },
        {
            title: 'Personal Website',
            image: '/LW.jpg',
            link: 'https://github.com/gentrainor/genevieve-trainor-website',
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
    return (
        <div style={{ textAlign: 'center' }}>
          <h1>Genevieve's Bookstore</h1>
          <p>Click on a book to explore my coding projects!</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px', // Space between books
              flexWrap: 'wrap',
              marginTop: '20px',
            }}
          >
            {books.map((book, index) => (
              <Link key={index} href={book.link} target="_blank" style={{ textDecoration: 'none' }}>
                <div style={{ textAlign: 'center' }}>
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={100} // Adjust book width
                    height={150} // Adjust book height
                    style={{ borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                  />
                  <p style={{ marginTop: '10px', color: '#333' }}>{book.title}</p>
                </div>
              </Link>
            ))}
          </div>

        <h2 style={{ marginTop: '40px' }}>Find Me Online</h2>
      <p>Click on a book to visit my social media profiles!</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px', // Space between books
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
                width={100} // Adjust book width
                height={150} // Adjust book height
                style={{ borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
              />
              <p style={{ marginTop: '10px', color: '#333' }}>{social.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}