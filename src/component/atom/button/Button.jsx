import "./style.scss";
export const Button = (props) => {
  return (
    <>
      <button {...props}>{props.children}</button>
    </>
  );
};
