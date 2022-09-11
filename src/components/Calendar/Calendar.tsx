import { InlineWidget } from "react-calendly";

const Calendar = () => {
  return (
    <div className="h-screen">
      <InlineWidget
        url="https://calendly.com/jjdate23"
        styles={{
          height: "100vh",
        }}
      />
      <button>Finished</button>
    </div>
  );
};

export default Calendar;
