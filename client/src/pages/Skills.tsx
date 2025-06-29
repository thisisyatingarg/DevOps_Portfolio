import SkillCard from "@/components/SkillCard";
import { Cloud, Group, RotateCcw, Code, TrendingUp, GitBranch } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 5 },
        { name: "Microsoft Azure", level: 4 },
        { name: "Google Cloud Platform", level: 4 },
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
        { name: "GitLab CI", level: 4 },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
