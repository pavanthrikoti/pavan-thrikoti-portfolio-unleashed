import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, ExternalLink, Star, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'Python Technology Stack',
    issuer: 'Infosys Springboard',
    date: '2024',
    description: 'Comprehensive certification covering Python programming, web frameworks, data science libraries, and application development.',
    skills: ['Python Programming', 'Web Development', 'Data Analysis', 'Django/Flask'],
    icon: '🐍',
    color: 'from-blue-500 to-green-500',
    credentialId: 'INF-PY-2024'
  },
  {
    title: 'Programming in Java',
    issuer: 'NPTEL (IIT Kharagpur)',
    date: '2023',
    description: 'Advanced Java programming certification from IIT Kharagpur covering object-oriented programming, data structures, and enterprise development.',
    skills: ['Java Programming', 'OOP Concepts', 'Data Structures', 'Enterprise Java'],
    icon: '☕',
    color: 'from-orange-500 to-red-500',
    credentialId: 'NPTEL-JAVA-2023'
  },
  {
    title: 'Generative AI',
    issuer: 'Google Cloud',
    date: '2024',
    description: 'Cutting-edge certification in Generative AI technologies, machine learning models, and AI application development on Google Cloud Platform.',
    skills: ['Machine Learning', 'AI/ML', 'Google Cloud', 'Neural Networks'],
    icon: '🤖',
    color: 'from-purple-500 to-pink-500',
    credentialId: 'GCP-AI-2024'
  },
  {
    title: 'Cisco Networking Academy',
    issuer: 'Cisco Systems',
    date: '2023',
    description: 'Professional networking certification covering network fundamentals, cybersecurity, and infrastructure management.',
    skills: ['Network Security', 'Cybersecurity', 'Network Administration', 'Infrastructure'],
    icon: '🔐',
    color: 'from-cyan-500 to-blue-500',
    credentialId: 'CISCO-NET-2023'
  }
];

const achievements = [
  {
    icon: Star,
    title: 'NPTEL Discipline Star',
    description: 'Awarded by IIT Madras for exceptional performance in Computer Science courses',
    highlight: 'Top 1% nationwide'
  },
  {
    icon: Award,
    title: 'Competitive Coding Excellence',
    description: 'Top 10% rank in competitive coding contest at MITS',
    highlight: 'Problem-solving skills'
  },
  {
    icon: CheckCircle,
    title: 'GeeksforGeeks Leaderboard',
    description: 'Ranked 212th out of 4600+ students from MITS on institutional leaderboard',
    highlight: 'Top 5% performer'
  }
];

const CertificationCard = ({ cert, index }: { cert: typeof certifications[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="h-full p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/50 hover:border-primary/20 transition-all duration-300 hover:shadow-card-hover">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`text-3xl w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center text-white font-bold`}>
            {cert.icon}
          </div>
          <div className="text-right">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-1" />
              {cert.date}
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {cert.title}
          </h3>
          <p className="text-primary font-semibold mb-3">{cert.issuer}</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {cert.description}
          </p>

          {/* Skills */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Skills Covered</h4>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-md text-xs text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Credential ID */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-mono">
              ID: {cert.credentialId}
            </span>
            <button className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm">
              <ExternalLink className="w-3 h-3 mr-1" />
              Verify
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 40% 20%, hsl(262, 83%, 58%) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, hsl(142, 76%, 36%) 0%, transparent 50%)`
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
            Certifications & <span className="bg-gradient-accent bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and academic achievements that validate my 
            technical expertise and commitment to continuous learning.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Academic & Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {achievement.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-2">
                  {achievement.description}
                </p>
                <span className="inline-block px-3 py-1 bg-gradient-accent text-white text-xs rounded-full">
                  {achievement.highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-card/20 to-card/40 backdrop-blur-sm border border-border/30 rounded-xl">
            <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-foreground">Continuous Learning Journey</h3>
              <p className="text-muted-foreground">
                Always expanding my skill set with the latest technologies and industry certifications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}