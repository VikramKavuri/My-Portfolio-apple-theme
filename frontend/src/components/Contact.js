import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Calendar, Clock } from 'lucide-react';
import { mockContactInfo } from '../mock/data';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS
  // useEffect(() => {
  //   emailjs.init('MWOQU85H3KnQNh3SP');
  // }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Use the explicit 4-parameter approach
    const response = await emailjs.send(
      'service_6ahvylx',                    // Service ID
      'template_gqls6i4',                   // Template ID  
      {                                     // Template parameters
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        to_email: 'thrivikr@buffalo.edu'
      },
      'tAgUh8kfCp_a0b60h'                   // Public Key (4th parameter as STRING)
    );

    console.log('✅ EmailJS SUCCESS:', response);
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      subject: '', 
      message: '' 
    });

  } catch (error) {
    console.error('❌ EmailJS ERROR:', error);
    
    toast({
      title: "Message Failed", 
      description: "There was an error sending your message. Please try again later.",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  // ... rest of your component code remains the same
