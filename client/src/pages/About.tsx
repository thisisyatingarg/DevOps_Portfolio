import { Cloud, ServerCog, Group, Shield, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section className="pt-32 pb-24 px-6 bg-github-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-sf-pro text-4xl md:text-5xl font-bold text-github-dark mb-4">About Me</h1>
          <div className="w-24 h-1 bg-github-blue mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a dedicated AWS DevOps Engineer with 3 years of experience in cloud infrastructure, 
              automation, and modern development practices. My passion lies in creating robust, scalable 
              systems that enable teams to deliver high-quality software efficiently.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Throughout my career, I've specialized in designing and implementing CI/CD pipelines, 
              containerizing applications, and managing cloud infrastructure across multiple platforms. 
              I believe in the power of automation and continuous improvement to drive operational excellence.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-lg border border-github-border">
                <div className="text-2xl font-bold text-github-blue">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-github-border">
                <div className="text-2xl font-bold text-github-blue">25+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-github-border">
            <h3 className="font-sf-pro text-2xl font-semibold text-github-dark mb-6">Core Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Cloud className="text-github-blue text-xl" />
                <span className="text-gray-700">Cloud Architecture & Infrastructure</span>
              </div>
              <div className="flex items-center gap-3">
                <ServerCog className="text-github-blue text-xl" />
                <span className="text-gray-700">CI/CD Pipeline Design</span>
              </div>
              <div className="flex items-center gap-3">
                <Group className="text-github-blue text-xl" />
                <span className="text-gray-700">Containerization & Orchestration</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-github-blue text-xl" />
                <span className="text-gray-700">Infrastructure Security</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="text-github-blue text-xl" />
                <span className="text-gray-700">Monitoring & Observability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
