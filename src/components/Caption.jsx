
const Caption = ({title,text}) => {
  return (
    <div className="caption">
      <h1 className="title">{title}</h1>
      <p className="text">
       {text}
      </p>
    </div>
  );
};

export default Caption;
