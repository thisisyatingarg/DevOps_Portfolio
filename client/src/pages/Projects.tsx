import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Scalable 3-Tier Flask, Nginx, MySQL Deployment",
      description: "Designed and deployed a high-availability, scalable 3-tier architecture handling 10,000+ concurrent users with Nginx as a load balancer. Achieved 60% downtime reduction using AWS EKS and Kubernetes for better fault tolerance and orchestration.",
      technologies: ["Flask", "Nginx", "MySQL", "AWS EKS", "Kubernetes", "Docker"],
      status: "Production System",
      year: "Sep 2023 - Present",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Automated CI/CD Pipeline for Django Web App",
      description: "Developed a real-time CI/CD pipeline on AWS using Jenkins, GitHub Actions, and GitLab CI, reducing deployment errors by 40%. Integrated SonarQube and Trivy for code quality and security scans, ensuring compliance with OWASP security guidelines.",
      technologies: ["Django", "Jenkins", "GitHub Actions", "GitLab CI", "SonarQube", "Trivy", "AWS"],
      status: "Production Ready",
      year: "Mar 2024 - Present",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "AWS Multi-Environment Infrastructure Automation",
      description: "Automated the provisioning and management of multi-environment (test, dev, prod) AWS infrastructure using Terraform. Created AWS EC2 instances, S3 buckets, and DynamoDB tables with optimized resource allocation for each environment, reducing manual intervention by 80%.",
      technologies: ["Terraform", "AWS EC2", "AWS S3", "AWS DynamoDB", "Infrastructure as Code"],
      status: "Enterprise Project",
      year: "Jun 2024 - Present",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Cloud Infrastructure Management at TCS",
      description: "Managed over 50+ cloud servers across 5+ environments, automating provisioning, scaling, and monitoring. Built end-to-end CI/CD pipelines using Jenkins, GitLab CI, and Harness, reducing deployment time by 60% and minimizing failures.",
      technologies: ["Docker", "Kubernetes", "Linux", "AWS", "Jenkins", "Harness", "Prometheus", "Grafana"],
      status: "Professional Experience",
      year: "Oct 2022 - Present",
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
