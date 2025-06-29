import ContactForm from "@/components/ContactForm";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-sf-pro text-4xl md:text-5xl font-bold text-github-dark mb-4">Get In Touch</h1>
          <div className="w-24 h-1 bg-github-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                <h3 className="font-sf-pro text-lg font-semibold text-github-dark">Email</h3>
                <a 
                  href="mailto:yatin.garg@example.com"
                  className="text-gray-600 hover:text-github-blue transition-colors"
                >
                  yatin.garg@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-github-blue/10 rounded-lg flex items-center justify-center">
                <Linkedin className="text-github-blue text-xl" />
              </div>
              <div>
                <h3 className="font-sf-pro text-lg font-semibold text-github-dark">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/yatingarg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-github-blue transition-colors"
                >
                  linkedin.com/in/yatingarg
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-github-blue/10 rounded-lg flex items-center justify-center">
                <Github className="text-github-blue text-xl" />
              </div>
              <div>
                <h3 className="font-sf-pro text-lg font-semibold text-github-dark">GitHub</h3>
                <a 
                  href="https://github.com/yatingarg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-github-blue transition-colors"
                >
                  github.com/yatingarg
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-github-blue/10 rounded-lg flex items-center justify-center">
                <MapPin className="text-github-blue text-xl" />
              </div>
              <div>
                <h3 className="font-sf-pro text-lg font-semibold text-github-dark">Location</h3>
                <p className="text-gray-600">Available for Remote Work</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
