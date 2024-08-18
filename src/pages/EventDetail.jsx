import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetail.css';

const eventDetails = {
  nukkad: {
    title: 'Nukkad Naatak',
    date: '18/9/24',
    description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus consectetur quod exercitationem molestiae asperiores quo perspiciatis et harum? Voluptatibus, fuga. Aspernatur ipsum, quibusdam deserunt magni reprehenderit incidunt. Atque, corporis.',
  },
  andha: {
    title: 'Andha Mor',
    date: '19/9/24',
    description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus consectetur quod exercitationem molestiae asperiores quo perspiciatis et harum? Voluptatibus, fuga. Aspernatur ipsum, quibusdam deserunt magni reprehenderit incidunt. Atque, corporis.',
  },
  treasure: {
    title: 'Treasure Hunt',
    date: '20/9/24',
    description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus consectetur quod exercitationem molestiae asperiores quo perspiciatis et harum? Voluptatibus, fuga. Aspernatur ipsum, quibusdam deserunt magni reprehenderit incidunt. Atque, corporis..',
  },
  vaachan: {
    title: 'Kavita Vaachan',
    date: '21/9/24',
    description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus consectetur quod exercitationem molestiae asperiores quo perspiciatis et harum? Voluptatibus, fuga. Aspernatur ipsum, quibusdam deserunt magni reprehenderit incidunt. Atque, corporis.',
  },
};

function EventDetail() {
  const { id } = useParams();
  const event = eventDetails[id];

  return (
    <div className="details">
      <div className="content">
        <h1>{event.title}</h1>
        <small>{event.date}</small>
        <p>{event.description}</p>
        <button className="register-button">Registration will be starting soon</button>
      </div>
    </div>
  );
}

export default EventDetail;
