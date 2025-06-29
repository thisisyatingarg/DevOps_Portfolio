import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Multi-Cloud CI/CD Pipeline",
      description: "Designed and implemented a comprehensive CI/CD pipeline spanning AWS, Azure, and GCP. Features automated testing, security scanning, and deployment across multiple environments with rollback capabilities.",
      technologies: ["Jenkins", "Docker", "Kubernetes", "Terraform", "AWS"],
      status: "Enterprise Project",
      year: "2024",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Microservices Monitoring Stack",
      description: "Built a comprehensive observability platform for microservices architecture using Prometheus, Grafana, and ELK stack. Includes custom dashboards, alerting rules, and automated incident response workflows.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Kubernetes", "AWS"],
      status: "Production System",
      year: "2023",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Infrastructure as Code Framework",
      description: "Developed a reusable Terraform framework for multi-environment infrastructure deployment. Includes modules for networking, security, compute, and storage resources with automated compliance checks.",
      technologies: ["Terraform", "Ansible", "AWS", "Azure", "GitLab CI"],
      status: "Open Source",
      year: "2023",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "GitOps Deployment Pipeline",
      description: "Implemented GitOps workflow using ArgoCD for automated application deployment and configuration management. Features progressive delivery, automated rollbacks, and multi-cluster synchronization.",
      technologies: ["ArgoCD", "Kubernetes", "Helm", "GitHub Actions", "GCP"],
      status: "Production Ready",
      year: "2024",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const handleViewAllProjects = () => {
    window.open("https://github.com", "_blank");
  };

  return (
    <section className="pt-32 pb-24 px-6 bg-github-light dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-sf-pro text-4xl md:text-5xl font-bold text-github-dark dark:text-white mb-4 animate-slide-up">Featured Projects</h1>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
            Showcasing real-world implementations of DevOps best practices and cloud infrastructure solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={handleViewAllProjects}
            className="bg-github-blue text-white px-8 py-3 hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 font-medium"
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
