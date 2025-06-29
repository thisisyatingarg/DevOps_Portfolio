import { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
  const { title, icon: Icon, skills } = category;

  return (
    <div className="bg-white p-6 rounded-xl border border-github-border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <Icon className="text-github-blue text-2xl mr-3" />
        <h3 className="font-sf-pro text-xl font-semibold text-github-dark">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-between">
            <span className="text-gray-700">{skill.name}</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-full ${
                    level <= skill.level ? 'bg-github-green' : 'bg-github-border'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
