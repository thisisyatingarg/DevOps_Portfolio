import { Cloud, ServerCog, Group, Shield, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section className="pt-32 pb-24 px-6 bg-github-light dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-sf-pro text-4xl md:text-5xl font-bold text-github-dark dark:text-white mb-4 animate-slide-up">About Me</h1>
          <div className="w-24 h-1 gradient-bg mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a dedicated AWS DevOps Engineer with 3 years of experience in cloud infrastructure, 
              automation, and modern development practices. My passion lies in creating robust, scalable 
              systems that enable teams to deliver high-quality software efficiently.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Throughout my career, I've specialized in designing and implementing CI/CD pipelines, 
              containerizing applications, and managing cloud infrastructure across multiple platforms. 
              I believe in the power of automation and continuous improvement to drive operational excellence.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-github-border dark:border-gray-700 hover-lift">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-github-border dark:border-gray-700 hover-lift">
                <div className="text-2xl font-bold gradient-text">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-github-border dark:border-gray-700 hover-lift glass-effect">
            <h3 className="font-sf-pro text-2xl font-semibold text-github-dark dark:text-white mb-6">Core Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <Cloud className="text-github-blue dark:text-blue-400 text-xl group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-github-blue dark:group-hover:text-blue-400 transition-colors duration-200">Cloud Architecture & Infrastructure</span>
              </div>
              <div className="flex items-center gap-3 group">
                <ServerCog className="text-github-blue dark:text-blue-400 text-xl group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-github-blue dark:group-hover:text-blue-400 transition-colors duration-200">CI/CD Pipeline Design</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Group className="text-github-blue dark:text-blue-400 text-xl group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-github-blue dark:group-hover:text-blue-400 transition-colors duration-200">Containerization & Orchestration</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Shield className="text-github-blue dark:text-blue-400 text-xl group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-github-blue dark:group-hover:text-blue-400 transition-colors duration-200">Infrastructure Security</span>
              </div>
              <div className="flex items-center gap-3 group">
                <TrendingUp className="text-github-blue dark:text-blue-400 text-xl group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-github-blue dark:group-hover:text-blue-400 transition-colors duration-200">Monitoring & Observability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
