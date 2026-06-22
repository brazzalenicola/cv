import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

type SkillGroup = {
  title: string;
  items: readonly string[];
};

interface SkillsProps {
  skillGroups: readonly SkillGroup[];
  className?: string;
}

export function Skills({ skillGroups, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>
      {skillGroups.map((group) => (
        <div key={group.title}>
          <h6 className="inline-flex gap-x-1 font-semibold leading-none mb-1">{group.title}</h6>
          <ul className="flex list-none flex-wrap gap-1 p-0 mb-3" aria-label={`${group.title} skills`}>
            {group.items.map((skill) => (
              <li key={skill}>
                <Badge className="print:text-[10px]" aria-label={`Skill: ${skill}`}>
                  {skill}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
