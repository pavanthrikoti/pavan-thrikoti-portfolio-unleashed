import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Hero3D } from './Hero3D';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Hero3D />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold"
          >
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pavan Thrikoti
            </span>
            <br />
            <span className="text-foreground text-3xl sm:text-4xl md:text-5xl font-medium">
              Pottupalli
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            B.Tech Computer Science Engineering Student
            <br />
            <span className="bg-gradient-secondary bg-clip-text text-transparent font-semibold">
              Aspiring Software Developer
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Passionate about creating innovative solutions through code, with expertise in web development, 
            cybersecurity, and problem-solving. CGPA: 9.04 | NPTEL Discipline Star
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-6 group"
            >
              View Projects
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/pavanthrikoti', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/pavan-thrikoti-pottupalli', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:pavanthrikoti@gmail.com', label: 'Email' },
              { icon: FileText, href: '#', label: 'Resume' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-card/10 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                title={social.label}
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}