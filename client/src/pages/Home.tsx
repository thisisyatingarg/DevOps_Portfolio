import { Download, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume
    window.open("#", "_blank");
  };

  const scrollToContact = () => {
    // Since we're using separate pages, we'll navigate to the contact page
    window.location.href = "/contact";
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-background dark:bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="font-sf-pro text-5xl md:text-7xl font-bold text-github-dark dark:text-white mb-4 leading-tight animate-slide-up">
            Yatin Garg
          </h1>
          <h2 className="font-inter text-xl md:text-2xl gradient-text font-medium mb-6 tracking-wide animate-slide-up" style={{animationDelay: '0.2s'}}>
            AWS DevOps Engineer
          </h2>
          <p className="font-inter text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
            Passionate about building scalable cloud infrastructure and streamlining development workflows. 
            Specializing in AWS cloud services, containerization, and modern CI/CD practices to deliver 
            reliable and efficient solutions.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <Button 
            onClick={scrollToContact}
            className="gradient-bg text-white px-8 py-3 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 font-medium animate-pulse-glow"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button 
            variant="outline"
            onClick={handleDownloadResume}
            className="border-github-border dark:border-gray-600 text-github-text dark:text-gray-300 px-8 py-3 hover:bg-github-light dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-medium backdrop-blur-sm"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 text-github-text dark:text-gray-400 animate-slide-up" style={{animationDelay: '0.8s'}}>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-github-blue dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 p-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            <Github />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-github-blue dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 p-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            <Linkedin />
          </a>
          <Link
            href="/contact"
            className="text-2xl hover:text-github-blue dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 p-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            <Mail />
          </Link>
        </div>
      </div>
    </div>
  );
}
