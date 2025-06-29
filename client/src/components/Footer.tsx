import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-github-dark text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="font-sf-pro text-xl font-semibold mb-4">
            Yatin Garg
          </h3>
          <p className="text-gray-400 mb-6">
            Building scalable cloud infrastructure and streamlining development workflows
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
            >
              <Github className="text-2xl" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin className="text-2xl" />
            </a>
            <a 
              href="mailto:yatin.garg@example.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
            >
              <Mail className="text-2xl" />
            </a>
          </div>

          <div className="pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © 2024 Yatin Garg. Built with React and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
