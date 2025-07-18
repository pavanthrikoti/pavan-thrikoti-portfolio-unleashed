import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pavanthrikoti@gmail.com',
    href: 'mailto:pavanthrikoti@gmail.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9492122861',
    href: 'tel:+919492122861',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'pavan-thrikoti-pottupalli',
    href: 'https://linkedin.com/in/pavan-thrikoti-pottupalli',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'pavanthrikoti',
    href: 'https://github.com/pavanthrikoti',
    color: 'from-gray-700 to-gray-900'
  }
];

const quickActions = [
  {
    icon: MessageCircle,
    title: 'Quick Chat',
    description: 'Let\'s discuss your project ideas',
    action: 'Start Conversation',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Calendar,
    title: 'Schedule Meeting',
    description: 'Book a time that works for both of us',
    action: 'Schedule Now',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Send,
    title: 'Send Message',
    description: 'Drop me a message anytime',
    action: 'Send Email',
    gradient: 'from-cyan-500 to-blue-500'
  }
];

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, hsl(194, 98%, 39%) 0%, transparent 50%),
                           radial-gradient(circle at 70% 80%, hsl(262, 83%, 58%) 0%, transparent 50%),
                           radial-gradient(circle at 90% 40%, hsl(142, 76%, 36%) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to work on new projects 
            and collaborate with amazing people. Let's build something great together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">Get in Touch</h3>
            
            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="flex items-center p-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center mr-4 group-hover:shadow-lg transition-all duration-300`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h4>
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  className="p-4 bg-card/20 backdrop-blur-sm border border-border/30 rounded-lg hover:bg-card/40 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.gradient} flex items-center justify-center mr-3`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{action.title}</div>
                        <div className="text-xs text-muted-foreground">{action.description}</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                      {action.action}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Collaboration"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how we can work together..."
                    rows={6}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg py-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 p-6 bg-card/20 backdrop-blur-sm border border-border/30 rounded-xl text-center"
            >
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Location</h4>
              <p className="text-muted-foreground">
                Andhra Pradesh, India
                <br />
                <span className="text-sm">Available for remote work worldwide</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 pt-8 border-t border-border/30 text-center"
        >
          <p className="text-muted-foreground">
            © 2024 Pavan Thrikoti Pottupalli. Crafted with passion and precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}