import React from 'react';
import './AboutUs.css';

// Sample data for team members
const teamMembers = [
  { name: 'Mayank Jha', role: 'Software Developer', imageUrl: 'images/Mayank.WebP' },
  { name: 'Ankit Pandey', role: 'Architect', imageUrl: 'images/Ankit.jpg' },
  { name: 'Manvi Verma', role: 'Java Developer', imageUrl: 'images/manvi.WebP' },
  { name: 'Harsh Verma', role: 'Quantity Surveyor', imageUrl: 'images/Harsh.WebP' },


];

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Vision Section */}
      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          To revolutionize the way people experience e-learning, creating accessible, engaging, and
          cutting-edge educational resources that empower learners across the globe to achieve their
          goals and transform their futures.
        </p>
      </section>
      

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide affordable, high-quality education to learners at all levels. We
          are committed to delivering a range of courses, from beginner to expert, through interactive
          content, expert instructors, and community support.
        </p>
      </section>

      {/* Team Members Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-list">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.imageUrl} alt={`${member.name}`} className="team-member-photo" />
              <div className="team-member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
