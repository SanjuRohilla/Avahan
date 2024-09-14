import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from './Carousel/ImageCarousel';
import './EventDetail.css';

const eventDetails = {
  nukkad: {
    title: 'Nukkad Naatak',
    nukkad: '18/9/24',
    time: '1:00 PM',
    venue: 'Front of Main Building',
    description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus consectetur quod exercitationem molestiae asperiores quo perspiciatis et harum? Voluptatibus, fuga. Aspernatur ipsum, quibusdam deserunt magni reprehenderit incidunt. Atque, corporis.',
    images: ['/src/assets/images/nukkad.jpg', '/src/assets/images/nukkad.jpg', '/src/assets/images/nukkad.jpg'],
    rulesFile: 'nukkad.txt',
    link: ''
  },
  andha: {
    title: 'Andha Mor',
    nukkad: '19/9/24',
    time: '1:00 PM',
    venue: 'Front of Main Building',
    description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus consectetur quod exercitationem molestiae asperiores quo perspiciatis et harum? Voluptatibus, fuga. Aspernatur ipsum, quibusdam deserunt magni reprehenderit incidunt. Atque, corporis.',
    images: ['/src/assets/images/nukkad.jpg', '/src/assets/images/nukkad.jpg', '/src/assets/images/nukkad.jpg'],
    rulesFile: 'andha.txt',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe7MepNkwXY6LI4rmwhz1f0cZg4xs1Ntq2MvXXNwO75Zp8tvw/viewform'
  },
  treasure: {
    title: 'Treasure Hunt',
    nukkad: '20/9/24',
    time: '1:00 PM',
    venue: 'Front of Main Building',
    description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus consectetur quod exercitationem molestiae asperiores quo perspiciatis et harum? Voluptatibus, fuga. Aspernatur ipsum, quibusdam deserunt magni reprehenderit incidunt. Atque, corporis.',
    images: ['/src/assets/images/nukkad.jpg', '/src/assets/images/nukkad.jpg', '/src/assets/images/nukkad.jpg'],
    rulesFile: 'treasure.txt',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe7MepNkwXY6LI4rmwhz1f0cZg4xs1Ntq2MvXXNwO75Zp8tvw/viewform'
  },
  vaachan: {
    title: 'Kavita Vaachan',
    nukkad: '21/9/24',
    time: '1:00 PM',
    venue: 'Front of Main Building',
    description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus consectetur quod exercitationem molestiae asperiores quo perspiciatis et harum? Voluptatibus, fuga. Aspernatur ipsum, quibusdam deserunt magni reprehenderit incidunt. Atque, corporis.',
    images: ['/src/assets/images/nukkad.jpg', '/src/assets/images/nukkad.jpg', '/src/assets/images/nukkad.jpg'],
    rulesFile: 'vaachan.txt' ,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe7MepNkwXY6LI4rmwhz1f0cZg4xs1Ntq2MvXXNwO75Zp8tvw/viewform'
  },
};

function EventDetail() {
  const { id } = useParams();
  const event = eventDetails[id];
  const [rules, setRules] = useState('');

  useEffect(() => {
    fetch(`/src/assets/txts/${event.rulesFile}`)
      .then((response) => response.text())
      .then((text) => setRules(text))
      .catch((error) => console.error('Error fetching rules:', error));
  }, [id]);

  return (
    <div className="details">
      <div className="content">
        <h1>{event.title}</h1>

        <div className='minor-details'>
          <div className='minor'>
            <img src='/src/assets/svgs/calendar.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="nukkad Icon" />
            <p className='small-text'>Date : {event.nukkad}</p>
          </div>
          <div className='minor'>
            <img src='/src/assets/svgs/location.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="nukkad Icon" />
            <p className='small-text'>Venue : {event.venue}</p>
          </div>
          <div className='minor'>
            <img src='/src/assets/svgs/time.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="nukkad Icon" />
            <p className='small-text'>Time : {event.time}</p>
          </div>
        </div>

        <p>{event.description}</p>

        {/* Conditional rendering for the "Register" button */}
        {id !== 'nukkad' && (
          <button className="register-button"><a href={event.link}>Register Now</a></button>
        )}

        {rules && rules.trim() !== '' ? (
          <div className="rules-contact-wrapper">
            <div className="rules-container">
              <p className='rules'>नियम</p>
              <div className="rules-div">
                <pre>{rules}</pre>
              </div>
            </div>
            <div className="contact-container">
              <div style={{ display: 'flex', gap: '10px' }}>
                <img src='/src/assets/svgs/contact.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
                <p className='rules'>Contact</p>
              </div>
              <div className='organizer'>Aryan: 9931603459</div>
              <div className='organizer' style={{ marginBottom: '50px' }}>Ayush: 9931603459</div>
            </div>
          </div>
        ) : (
          <div style={{ width: '90%', marginTop:'2rem' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <img src='/src/assets/svgs/contact.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
              <p className='rules'>Contact</p>
            </div>
            <div className='organizer'>Aryan Pareek : 9931603459</div>
            <div className='organizer' style={{ marginBottom: '50px' }}>Ayush: 9931603459</div>
          </div>
        )}

        <ImageCarousel images={event.images} />
      </div>
    </div>
  );
}

export default EventDetail;
