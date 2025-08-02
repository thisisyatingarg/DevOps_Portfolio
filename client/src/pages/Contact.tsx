import ContactForm from "@/components/ContactForm";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="pt-32 pb-24 px-6 bg-background dark:bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-sf-pro text-4xl md:text-5xl font-bold text-github-dark dark:text-white mb-4 animate-slide-up">Get In Touch</h1>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
            Ready to discuss your next DevOps project or explore opportunities? 
            I'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-github-blue/10 rounded-lg flex items-center justify-center">
                <Mail className="text-github-blue text-xl" />
              </div>
              <div>
                <h3 className="font-sf-pro text-lg font-semibold text-github-dark dark:text-white">Email</h3>
                <a 
                  href="mailto:yatingarg369@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-github-blue dark:hover:text-blue-400 transition-colors"
                >
                  yatingarg369@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-github-blue/10 rounded-lg flex items-center justify-center">
                <Linkedin className="text-github-blue text-xl" />
              </div>
              <div>
                <h3 className="font-sf-pro text-lg font-semibold text-github-dark dark:text-white">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/thisisyatingarg-83788b1a3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-github-blue dark:hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/thisisyatingarg-83788b1a3
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-github-blue/10 rounded-lg flex items-center justify-center">
                <Github className="text-github-blue text-xl" />
              </div>
              <div>
                <h3 className="font-sf-pro text-lg font-semibold text-github-dark dark:text-white">GitHub</h3>
                <a 
                  href="https://github.com/thisisyatingarg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-github-blue dark:hover:text-blue-400 transition-colors"
                >
                  github.com/thisisyatingarg
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-github-blue/10 rounded-lg flex items-center justify-center">
                <MapPin className="text-github-blue text-xl" />
              </div>
              <div>
                <h3 className="font-sf-pro text-lg font-semibold text-github-dark dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Faridabad, HR | Available for Remote Work</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
