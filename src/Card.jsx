// src/Card.jsx
import React from 'react';

function Card({ name, handle, image, description }) {
    return (
        <div className="column is-one-quarter">
            <div className="card">
                <div className="card-image has-text-centered pt-4">
                    <figure className="image is-inline-block" style={{ width: '96px', height: '96px' }}>
                        <img
                            src={image}
                            alt={name}
                            style={{ objectFit: 'contain', maxHeight: '100%' }}
                        />
                    </figure>
                </div>
                <div className="card-content has-text-centered">
                    <p className="title is-5">{name}</p>
                    <p className="subtitle is-6">{handle}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
