import SkillCard from "@/components/SkillCard";
import { Cloud, Group, RotateCcw, Code, TrendingUp, GitBranch, Database, Shield } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 5 },
        { name: "Azure", level: 3 },
        { name: "GCP", level: 3 },
	{ name: "Serverless", level: 3 },
        { name: "AWS EC2 (Compute)", level: 5 },
  	{ name: "AWS S3 (Object Storage)", level: 5 },
        { name: "AWS EKS (Kubernetes)", level: 4 },
        { name: "AWS RDS (Managed DB)", level: 4 },
        { name: "AWS IAM (Access Management)", level: 5 },
        { name: "AWS VPC (Networking)", level: 4 },
        { name: "AWS DynamoDB (NoSQL)", level: 4 },
        { name: "AWS Lambda (Serverless)", level: 3 },
        { name: "AWS CloudFormation (IaC)", level: 4 },
        { name: "AWS CloudWatch (Monitoring)", level: 3 },
        { name: "AWS SNS (Notification Service)", level: 4 },
        { name: "AWS Route 53 (DNS)", level: 3 },
      ]
    },
    {
      title: "Containerization",
      icon: Group,
      skills: [
        { name: "Docker", level: 5 },
        { name: "Kubernetes", level: 5 },
        { name: "ArgoCD", level: 4 },
      ]
    },
    {
      title: "CI/CD Tools",
      icon: RotateCcw,
      skills: [
        { name: "Jenkins", level: 5 },
        { name: "GitHub Actions", level: 5 },
        { name: "GitLab CI", level: 5 },
        { name: "Harness", level: 4 },
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: Code,
      skills: [
        { name: "Terraform", level: 5 },
        { name: "Ansible", level: 4 },
      ]
    },
    {
      title: "Web Frameworks",
      icon: Database,
      skills: [
        { name: "Flask", level: 4 },
        { name: "Django", level: 4 },
        { name: "Nginx", level: 5 },
        { name: "MySQL", level: 5 },
      ]
    },
    {
      title: "Security & Quality",
      icon: Shield,
      skills: [
        { name: "SonarQube", level: 4 },
        { name: "Trivy", level: 4 },
        { name: "OWASP", level: 4 },
      ]
    },
    {
      title: "Monitoring",
      icon: TrendingUp,
      skills: [
        { name: "Prometheus", level: 5 },
        { name: "Grafana", level: 5 },
        { name: "ELK Stack", level: 4 },
      ]
    },
    {
      title: "Version Control & OS",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 5 },
        { name: "Linux", level: 5 },
      ]
    }
  ];

  return (
    <section className="pt-32 pb-24 px-6 bg-background dark:bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-sf-pro text-4xl md:text-5xl font-bold text-github-dark dark:text-white mb-4 animate-slide-up">Technical Skills</h1>
          <div className="w-24 h-1 gradient-bg mx-auto mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
            Comprehensive expertise across cloud platforms, DevOps tools, and modern infrastructure technologies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
