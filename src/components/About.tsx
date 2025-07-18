import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Target, Lightbulb, Users } from 'lucide-react';

const stats = [
  { icon: Award, label: 'CGPA', value: '9.04' },
  { icon: Target, label: 'Projects', value: '10+' },
  { icon: Lightbulb, label: 'Skills', value: '20+' },
  { icon: Users, label: 'Certifications', value: '4' },
];

const highlights = [
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'NPTEL Discipline Star in Computer Science by IIT Madras with outstanding academic performance (CGPA: 9.04).'
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Top 10% rank in competitive coding contest at MITS and ranked 212th out of 4600+ students on GeeksforGeeks.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Passionate about creating innovative solutions through modern web technologies and emerging tech trends.'
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Strong communication and coordination skills with experience in team leadership and decision making.'
  }
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(262, 83%, 58%) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, hsl(142, 76%, 36%) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, hsl(194, 98%, 39%) 0%, transparent 50%)`
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
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate Computer Science Engineering student with a strong foundation in software development, 
            cybersecurity, and problem-solving. I believe in creating innovative solutions that make a difference.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/70 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="group p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:shadow-glow-accent transition-all duration-300">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-card/20 to-card/40 backdrop-blur-sm border border-border/30 rounded-2xl">
            <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
              "I'm passionate about leveraging technology to solve real-world problems. 
              My journey in computer science has been driven by curiosity, dedication, and 
              a commitment to continuous learning. I believe in writing clean, efficient code 
              and creating user-centric solutions that make a positive impact."
            </blockquote>
            <cite className="block mt-6 text-primary font-semibold">- Pavan Thrikoti Pottupalli</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}