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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-github-border dark:border-gray-700 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 hover-lift glass-effect group">
      <div className="flex items-center mb-4">
        <Icon className="text-github-blue dark:text-blue-400 text-2xl mr-3 group-hover:scale-110 transition-transform duration-200" />
        <h3 className="font-sf-pro text-xl font-semibold text-github-dark dark:text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={skill.name} className="flex items-center justify-between animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
            <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    level <= skill.level 
                      ? 'bg-github-green dark:bg-green-400 animate-pulse-glow' 
                      : 'bg-github-border dark:bg-gray-600'
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
