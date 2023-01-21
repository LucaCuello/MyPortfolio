import "./ProfilePicture.css";
import avatar from "../../assets/avatartransparent.png";
export const ProfilePicture = () => {
  return (
    <div className="picture-container">
      <img src={avatar} alt="avatar" draggable="false"></img>
    </div>
  );
};
