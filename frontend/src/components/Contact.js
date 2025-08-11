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
  useEffect(() => {
    emailjs.init('MWOQU85H3KnQNh3SP');
  }, []);

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
      const response = await emailjs.send(
        'service_6ahvylx',           // ← Fixed: removed escaped underscore
        'template_gqls6i4',          // ← Fixed: removed escaped underscore
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          to_email: 'thrivikr@buffalo.edu'
        }
      );

      // Success - detailed logging
      console.log('✅ EmailJS SUCCESS:', response.status, response.text);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });

      // Clear form
      setFormData({ 
        name: '', 
        email: '', 
        company: '', 
        subject: '', 
        message: '' 
      });

    } catch (error) {
      // Error - detailed logging for debugging
      console.error('❌ EmailJS DETAILED ERROR:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      console.error('Full error object:', JSON.stringify(error, null, 2));
      
      toast({
        title: "Message Failed",
        description: "There was an error sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... rest of your component code remains the same
