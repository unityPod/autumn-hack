import { Link } from "react-router-dom";

interface ISelection {
  handleClose: (openState?: boolean) => void;
}

const Selection = (props: ISelection) => {
  const { handleClose } = props;

  return (
    <div>
      <h2>Are You An Advisor or A Job Hunter?</h2>
      <Link to="/job-hunter" onClick={() => handleClose(false)}>
        Job Hunter
      </Link>
      <Link to="/advisor" onClick={() => handleClose(false)}>
        Advisor
      </Link>
    </div>
  );
};

export default Selection;
