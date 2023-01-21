import "./SkillsCard.css";
export const SkillsCard = ({
  icon,
  name,
  mainColor,
  ligthColor,
  textColor,
}: {
  icon: any;
  name: string;
  textColor?: string;
  mainColor: string;
  ligthColor: string;
}) => {
  let colorStyles = {
    backgroundColor: `${mainColor}`,
    boxShadow: `40px 0px ${ligthColor}`,
    color: `${textColor ? textColor : null}`,
  };
  return (
    <div className="skills-card" style={colorStyles}>
      {icon}
      <span>{name}</span>
    </div>
  );
};
