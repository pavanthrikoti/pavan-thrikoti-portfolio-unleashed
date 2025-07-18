import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Globe, Database, Cloud, Wrench, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C', 'C++', 'SQL', 'JavaScript'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Web Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Database,
    title: 'Libraries & Frameworks',
    skills: ['OpenCV', 'Scikit-learn', 'Pandas', 'NumPy', 'Chart.js'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Cloud,
    title: 'Backend & Cloud',
    skills: ['MySQL', 'Firebase', 'Firestore', 'GCP', 'XAMPP'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Wrench,
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'StackBlitz', 'Figma', 'Vercel', 'Netlify'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: ['Communication', 'Team Leadership', 'Problem Solving', 'Decision Making'],
    color: 'from-pink-500 to-rose-500'
  }
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
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
      className="group"
    >
      <div className="h-full p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/50 hover:border-primary/20 transition-all duration-300 hover:shadow-card-hover">
        <div className="flex items-center mb-6">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
            <category.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="ml-4 text-xl font-semibold text-foreground">
            {category.title}
          </h3>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
              className="flex items-center group/skill"
            >
              <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 group-hover/skill:shadow-glow-primary transition-all duration-300" />
              <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 70% 20%, hsl(262, 83%, 58%) 0%, transparent 50%),
                           radial-gradient(circle at 20% 80%, hsl(142, 76%, 36%) 0%, transparent 50%)`
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
            Technical <span className="bg-gradient-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and skills I've mastered through 
            hands-on projects, coursework, and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Technology Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">Learning Journey</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Started with C/C++', 'Mastered Python & Java', 'Explored Web Development', 'Dived into Cloud & AI', 'Building Full-Stack Applications'].map((milestone, index) => (
              <motion.div
                key={milestone}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium"
              >
                {milestone}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}