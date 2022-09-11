import { useState } from "react";
import Card from "./ui/Card";
import SearchBar from "./ui/SearchBar";
import styles from "./SelectAdvisor.module.css";

const advisors = [
  {
    id: 1,
    username: "Ester Howard",
    location: "Canada",
    industry: "Retail",
  },
  {
    id: 2,
    username: "Micheal Philps",
    location: "Canada",
    industry: "Retail",
  },
  {
    id: 3,
    username: "Tom Brady",
    location: "Canada",
    industry: "Retail",
  },
  {
    id: 4,
    username: "Parker Peter",
    location: "Canada",
    industry: "Retail",
  },
  {
    id: 5,
    username: "Smith Johnson",
    location: "Canada",
    industry: "Retail",
  },
];

const SelectAdvisor = () => {
  const [listofadvisors, setListOfAdvisors] = useState(advisors);

  return (
    <div className="h-auto lg:h-screen bg-primary-600">
      <div className="flex flex-col items-center">
        <div>
          <h4 className={styles.title}>Select Your Advisor</h4>
          <p className={styles.description}>Discover your next career move!</p>
        </div>
        <SearchBar advisors={listofadvisors} />
      </div>
      <div>
        <div className="p-5 text-center">
          <p className="font-secondary text-primary-200 text-[16px] leading-[19.07px] md:text-[20px]">
            There are <span className="font-bold ">{advisors.length}</span>{" "}
            Advisors Ready To Help You
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {advisors &&
            advisors.map((advisor) => (
              <Card
                key={advisor.id}
                username={advisor.username}
                location={advisor.location}
                industry={advisor.industry}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SelectAdvisor;
