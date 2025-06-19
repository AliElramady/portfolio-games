import React from 'react';
import './AboutMe.css';

const AboutMe = () => (
  <section className="about-me animate-fadein">
    <img className="profile-pic" src="https://randomuser.me/api/portraits/men/32.jpg" alt="صورة شخصية" />
    <h2>نبذة عني</h2>
    <p><strong>الاسم:</strong> أحمد علي</p>
    <p><strong>المجال:</strong> Unity & Unreal Engine Developer</p>
    <p><strong>الخبرة:</strong> 5 سنوات | 12 مشروع ألعاب</p>
    <p><strong>المهارات الأساسية:</strong> C#, C++, Unity, Unreal, Blender, Photoshop</p>
  </section>
);

export default AboutMe; 