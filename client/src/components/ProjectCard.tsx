import { Github, ExternalLink, Star, Clock } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  year: string;
  githubUrl: string;
  liveUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, technologies, status, year, githubUrl, liveUrl } = project;

  return (
    <div className="bg-white rounded-xl border border-github-border overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-sf-pro text-xl font-semibold text-github-dark">{title}</h3>
          <div className="flex gap-2">
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-github-text hover:text-github-blue transition-colors"
            >
              <Github className="text-lg" />
            </a>
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-github-text hover:text-github-blue transition-colors"
            >
              <ExternalLink className="text-lg" />
            </a>
          </div>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-github-blue/10 text-github-blue text-sm rounded-full font-fira"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Star className="text-yellow-500 mr-1 h-4 w-4" />
          <span className="mr-4">{status}</span>
          <Clock className="mr-1 h-4 w-4" />
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
}
