import "./AboutMeContainer.css";
export const AboutMeContainer = ({
  body,
  profilePicture,
}: {
  body: any;
  profilePicture: any;
}) => {
  return (
    <div className="aboutme-container">
      {body}
      {profilePicture}
    </div>
  );
};
