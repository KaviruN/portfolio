interface SkillCardProps {
    name: string;
    icon: string;
}
const SkillCard: React.FC<SkillCardProps> = ({ name, icon }: SkillCardProps) => {
    return (
        <div className="skills__card">
            <div className="skills__icon">
                <i className={icon}></i>
            </div>
            <div className="skills__name">{name}</div>
        </div>
    );

}

export default SkillCard;