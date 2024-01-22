import "./style.scss";
export const Card = (props) => {
  return (
    <>
      <div data-component-name="card" className="card" {...props}>{props.children}</div>
    </>
  );
};
