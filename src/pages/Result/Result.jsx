import React from 'react';
import './Result.css'; // Assuming your CSS is in this file

const WinnerAnnouncement = () => {
    return (
        <div className="winner-announcement">
            {/* Banner Section */}
            <div className="banner1">
                <img src="/src/assets/results/banner.png" alt="Banner" className="banner1-img" />
            </div>

            <div className="banner1-heading">
                <h1>AAVAHAN</h1>
            </div>

            {/* Treasure Hunt Section */}
            <section className="event-section">
                <h2>Treasure Hunt</h2>
                <div className="winner-icons">
                    <div className="winner first-place">
                        <h3>Winner</h3>
                        <p>Advents of Gods and Demons</p>
                        <ul>
                            <li>Pritpal Keshar</li>
                            <li>Anirudhh Malhotra</li>
                        </ul>
                    </div>
                    <div className="winner second-place">
                        <h3>Runner Ups</h3>
                        <p>3 Idiots</p>
                        <ul>
                            <li>Sonakshi</li>
                            <li>Yadhu Krishnan</li>
                            <li>Arpit Gupta</li>
                        </ul>
                    </div>
                    <div className="winner third-place">
                        <h3>Second Runner</h3>
                        <p>Team Tissians</p>
                        <ul>
                            <li>Rita Bhagat</li>
                            <li>Mohammad Aadil</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Kavita Lekhan Section */}
            <section className="event-section">
                <h2>Kavita Lekhan</h2>
                <div className="winner-icons">
                    <div className="winner first-place">
                        <img src="/src/assets/results/first-place-icon.png" alt="1st Place Icon" className="icon" />
                        <p>Govind Singh Rathore</p>
                        <p>(Keshav Mahavidyalay Delhi)</p>
                    </div>
                    <div className="winner second-place">
                        <img src="/src/assets/results/second-place-icon.png" alt="2nd Place Icon" className="icon" />
                        <p>Aayush Kesharwani</p>
                        <p>(UIT Bhopal)</p>
                    </div>
                    <div className="winner third-place">
                        <img src="/src/assets/results/third-place-icon.png" alt="3rd Place Icon" className="icon" />
                        <p>Yuvaraj Singh</p>
                        <p>(NIT Raipur)</p>
                    </div>
                </div>
            </section>

            {/* Laghu Video Section */}
            <section className="event-section">
                <h2>Laghu Video</h2>
                <div className="winner-icons">
                    <div className="winner first-place">
                        <img src="/src/assets/results/first-place-icon.png" alt="1st Place Icon" className="icon" />
                        <p>Rohit Kumar Singh</p>
                        <p>(NIT Raipur)</p>
                    </div>
                    <div className="winner second-place">
                        <img src="/src/assets/results/second-place-icon.png" alt="2nd Place Icon" className="icon" />
                        <p>Prafulla Drivedi</p>
                        <p>(Lucknow University)</p>
                    </div>
                    <div className="winner third-place">
                        <img src="/src/assets/results/third-place-icon.png" alt="3rd Place Icon" className="icon" />
                        <p>Prateek</p>
                        <p>(Xavier's School of Management)</p>
                    </div>
                </div>
            </section>

            <div className="banner1-heading">
                <h1>MATRIBHUMI DIVAS</h1>
            </div>
        </div>
    );
};

export default WinnerAnnouncement;
