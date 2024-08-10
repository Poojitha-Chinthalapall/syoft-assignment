import React from 'react';
import './index.css'; // Assuming a separate CSS file for the dashboard

const Dashboard = () => {
    // Retrieve user data from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="dashboard-container">
            <h2>Welcome, {user?.user_firstname}!</h2>
            <div className="profile-section">
                <div className="profile-picture">
                    {/* Placeholder for user's profile picture */}
                    <img
                        src="https://via.placeholder.com/150"
                        alt="User Profile"
                        className="profile-img"
                    />
                </div>
                <div className="user-info">
                    <p><strong>Email:</strong> {user?.user_email}</p>
                    <p><strong>Phone:</strong> {user?.user_phone}</p>
                    <p><strong>City:</strong> {user?.user_city}</p>
                    <p><strong>Zipcode:</strong> {user?.user_zipcode}</p>
                </div>
            </div>
            <div className="additional-content">
                {/* Additional dashboard content or features */}
                <p>Here you can add more features like recent activities, notifications, or settings.</p>
            </div>
        </div>
    );
};

export default Dashboard;
