// src/pages/About.jsx
import React from 'react';
import { Heart, Target, Users, Globe, Shield, Code, Rocket, Sparkles } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & Product Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sarah Miller",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b786d4c5?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Park",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Maria Garcia",
      role: "Wellness Expert",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: <Heart />,
      title: "User Well-being First",
      description: "We prioritize mental health and digital wellness above all else"
    },
    {
      icon: <Shield />,
      title: "Privacy & Security",
      description: "Your data stays on your device - we don't track or sell it"
    },
    {
      icon: <Globe />,
      title: "Accessibility",
      description: "Making digital wellness accessible to everyone"
    },
    {
      icon: <Code />,
      title: "Open Source Spirit",
      description: "Transparent development and community-driven improvements"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="relative">
          {/* Animated Background */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-float"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                About ScreenTime Reducer
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              We're on a mission to help people build healthier relationships with technology 
              and reclaim their time for what truly matters.
            </p>
            
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full">
              <Sparkles className="text-yellow-500" />
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Founded in 2024 • Helping 10,000+ users worldwide
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Our Mission</h2>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              In a world where digital distractions are constantly competing for our attention, 
              we believe in empowering individuals to take control of their screen time and 
              focus on what truly matters.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Our mission is to provide simple, effective tools that help people reduce phone addiction, 
              improve focus, and cultivate healthier digital habits for a more balanced and fulfilling life.
            </p>
            
            <div className="flex items-center space-x-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  10K+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Active Users</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  250K+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Hours Saved</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  4.8
                </div>
                <div className="text-gray-600 dark:text-gray-400">User Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* 3D Card Effect */}
            <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl -z-10"></div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Rocket className="text-white" size={48} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Our Vision for 2025
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  To become the world's leading digital wellness platform, helping 1 million people 
                  achieve better focus and work-life balance.
                </p>
                
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold">
                  <Sparkles />
                  <span>Join Our Journey</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Core Values
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {value.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {value.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <Users className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Meet Our Team</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate individuals dedicated to making digital wellness accessible to everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-6">
                {/* Image Container */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>
                
                {/* Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Ring */}
                <div className="absolute -ins-4 rounded-full border-2 border-blue-400/30 group-hover:border-blue-400/50 transition-all duration-500"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                {member.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {member.role}
              </p>
              
              <div className="flex justify-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Digital Life?
          </h3>
          
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join our community of digital wellness enthusiasts and start your journey today.
          </p>
          
          <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Get Started For Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;