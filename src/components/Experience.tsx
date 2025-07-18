import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Calendar, MapPin, Trophy, TrendingUp, Users, Lock } from 'lucide-react';

const experience = {
  title: 'Cybersecurity Intern',
  company: 'Cisco AICTE Virtual Internship Program',
  duration: 'June 2023 - August 2023',
  location: 'Remote',
  description: 'Specialized in network security, threat analysis, and implementing security protocols to protect digital infrastructure.',
  achievements: [
    {
      icon: Shield,
      metric: '30%',
      description: 'Reduced security vulnerabilities through comprehensive threat assessment and mitigation strategies'
    },
    {
      icon: Users,
      metric: '500+',
      description: 'Increased secure connectivity for students by implementing robust network security protocols'
    },
    {
      icon: Lock,
      metric: '40%',
      description: 'Reduced unauthorized access attempts through advanced security monitoring and access controls'
    }
  ],
  skills: ['Network Security', 'Threat Analysis', 'Security Protocols', 'Risk Assessment', 'Incident Response', 'Security Monitoring'],
  highlights: [
    'Conducted comprehensive security audits and vulnerability assessments',
    'Implemented multi-layered security protocols for network infrastructure',
    'Developed incident response procedures for security threats',
    'Collaborated with cross-functional teams on security best practices',
    'Created security documentation and training materials'
  ]
};

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, hsl(194, 98%, 39%) 0%, transparent 50%),
                           radial-gradient(circle at 80% 30%, hsl(262, 83%, 58%) 0%, transparent 50%)`
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
            Professional <span className="bg-gradient-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience in cybersecurity and network protection, 
            delivering measurable impact through innovative security solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-primary" />
            
            <div className="relative pl-20 pb-12">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-primary rounded-full shadow-glow-primary" />
              
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:bg-card/50 hover:border-primary/20 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-2">
                      {experience.company}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg">
                      <Shield className="w-4 h-4 mr-2" />
                      Cybersecurity
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      className="text-center p-6 bg-secondary/20 rounded-lg border border-border/30"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-lg mb-4">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                        {achievement.metric}
                      </div>
                      <p className="text-sm text-muted-foreground leading-tight">
                        {achievement.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-primary" />
                    Key Highlights
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {experience.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-gradient-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.8 + (index * 0.05) }}
                        className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm text-foreground"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to bring my cybersecurity expertise and development skills to your team
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-accent text-white rounded-lg font-semibold hover:shadow-glow-accent transition-all duration-300"
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}