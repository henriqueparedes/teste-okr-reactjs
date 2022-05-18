import "./greenButton.css";

export default function GreenButton(props) {
  const { text } = props;
  return (
    <>
      <button className="green-button" type="submit">
        {text}
      </button>
    </>
  );
}
