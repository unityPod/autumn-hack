import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  let navigate = useNavigate();
  const successSubmit = () => {
    setTimeout(() => navigate("/"), 3000);
  };

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: () => successSubmit(),
  });

  return (
    <div>
      <InlineWidget
        url="https://calendly.com/jjdate23"
        styles={{
          height: "100vh",
        }}
      />
    </div>
  );
};

export default Calendar;
