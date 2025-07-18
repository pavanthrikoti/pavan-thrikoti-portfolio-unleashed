import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Users, Calendar, BarChart3, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Faculty Availability Tracker',
    description: 'A comprehensive web application for real-time faculty availability tracking with advanced features for educational institutions.',
    longDescription: 'Built a full-stack web application that enables students to track faculty availability in real-time, improving communication and scheduling efficiency in educational environments.',
    type: 'Web Application',
    role: 'Full-Stack Developer',
    status: 'In Development',
    tech: ['React.js', 'Firebase', 'Firestore', 'CSS3', 'JavaScript'],
    features: [
      'Real-time faculty status tracking',
      'Secure login system with Firestore',
      'Responsive UI design for all devices',
      'Planned: Push notifications for status updates',
      'Planned: In-app chat functionality',
      'Planned: Analytics dashboard for usage insights'
    ],
    impact: {
      icon: Users,
      metric: '100+',
      description: 'Expected active users upon launch'
    },
    image: '/api/placeholder/600/400',
    gradient: 'from-blue-500 to-purple-600',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Personal Expense Tracker',
    description: 'A modern web-based expense tracking application with data visualization and mobile-responsive design.',
    longDescription: 'Developed a feature-rich expense tracking application that helps users manage their finances with intuitive visualizations and comprehensive CRUD operations.',
    type: 'Web Application',
    role: 'Frontend Developer',
    status: 'Completed',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'Local Storage'],
    features: [
      'Complete CRUD operations for expenses',
      'Interactive data visualization with Chart.js',
      'Mobile-responsive design',
      'Local storage for data persistence',
      'Category-based expense organization',
      'Export functionality for financial reports'
    ],
    impact: {
      icon: BarChart3,
      metric: '95%',
      description: 'User satisfaction with visualization features'
    },
    image: '/api/placeholder/600/400',
    gradient: 'from-green-500 to-emerald-600',
    githubUrl: '#',
    liveUrl: '#'
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group"
    >
      <div className="h-full bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:bg-card/50 hover:border-primary/20 transition-all duration-500 hover:shadow-card-hover">
        {/* Project Header */}
        <div className="relative p-6 bg-gradient-to-r from-card/50 to-card/30">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`} />
                <span className="text-sm text-muted-foreground">{project.type}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 text-xs rounded-full ${
                project.status === 'Completed' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
              }`}>
                {project.status}
              </span>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {project.role}
            </div>
          </div>
        </div>

        {/* Project Body */}
        <div className="p-6">
          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
            <div className="space-y-2">
              {project.features.slice(0, 4).map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
              {project.features.length > 4 && (
                <div className="text-sm text-primary font-medium">
                  +{project.features.length - 4} more features
                </div>
              )}
            </div>
          </div>

          {/* Impact Metric */}
          <div className="mb-6 p-4 bg-secondary/20 rounded-lg border border-border/30">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                <project.impact.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {project.impact.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {project.impact.description}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            <Button
              size="sm"
              className="flex-1 bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 60% 30%, hsl(142, 76%, 36%) 0%, transparent 50%),
                           radial-gradient(circle at 20% 70%, hsl(194, 98%, 39%) 0%, transparent 50%)`
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
            Featured <span className="bg-gradient-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development projects that demonstrate technical skills, 
            problem-solving abilities, and commitment to creating user-centric solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Additional Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-foreground">More Projects Coming Soon</h3>
              <p className="text-muted-foreground">
                Currently working on exciting new projects involving AI, machine learning, and advanced web technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}