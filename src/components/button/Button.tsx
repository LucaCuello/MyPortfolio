import "./Button.css";

export const Button = ({
  content,
  test,
  icon,
  download,
}: {
  content: string;
  test: any;
  icon: any;
  download: boolean;
}) => {
  return (
    <button className="comp-button">
      {icon}

      <a href={test} download={download}>
        {content}
      </a>
    </button>
  );
};
