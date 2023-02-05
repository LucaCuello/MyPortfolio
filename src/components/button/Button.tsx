import "./Button.css";

type ButtonProps = {
  content: string;
  direction: string;
  icon: React.ReactNode;
  download: boolean;
};

export const Button = ({ content, direction, icon, download }: ButtonProps) => {
  return (
    <button className="comp-button">
      {icon}
      <a href={direction} download={download}>
        {content}
      </a>
    </button>
  );
};
