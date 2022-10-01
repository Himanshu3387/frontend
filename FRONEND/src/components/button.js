const Button = (props) => {
  const { title, onClick } = props;
  return (
    <button onClick={onClick} style={styles.button}>
      {title}
    </button>
  );
};

const styles = {
  button: {
    position: "sticky",
    width: "25%",
    height: 40,
    backgroundColor: "green",
    color: "white",
    borderRadius: 25,
    border: "none",
    marginTop: 10,
    left: "725px",
    margin:"30px"
  },
};

export default Button;
