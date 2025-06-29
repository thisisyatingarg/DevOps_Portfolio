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
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="font-sf-pro text-5xl md:text-7xl font-bold text-github-dark mb-4 leading-tight">
            Yatin Garg
          </h1>
          <h2 className="font-inter text-xl md:text-2xl text-github-blue font-medium mb-6 tracking-wide">
            AWS DevOps Engineer
          </h2>
          <p className="font-inter text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable cloud infrastructure and streamlining development workflows. 
            Specializing in AWS cloud services, containerization, and modern CI/CD practices to deliver 
            reliable and efficient solutions.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            onClick={scrollToContact}
            className="bg-github-blue text-white px-8 py-3 hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 font-medium"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button 
            variant="outline"
            onClick={handleDownloadResume}
            className="border-github-border text-github-text px-8 py-3 hover:bg-github-light transition-all duration-200 font-medium"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 text-github-text">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-github-blue transition-colors duration-200 transform hover:scale-110"
          >
            <Github />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-github-blue transition-colors duration-200 transform hover:scale-110"
          >
            <Linkedin />
          </a>
          <Link
            href="/contact"
            className="text-2xl hover:text-github-blue transition-colors duration-200 transform hover:scale-110"
          >
            <Mail />
          </Link>
        </div>
      </div>
    </div>
  );
}
