import useCounter, { useActions } from "../store/useCounter";

const Counter = () => {
  //   const increment = useCounter((state) => state.handleIncrement);
  const { handleIncrement } = useActions();
  return (
    <button
      style={{
        marginBottom: "20px",
        background: "black",
        color: "white",
        fontSize: "18px",
        fontWeight: "bolder",
      }}
      onClick={handleIncrement}
    >
      Handle Counter Value
    </button>
  );
};

export default Counter;
