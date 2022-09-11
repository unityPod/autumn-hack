import Card from "./ui/Card";
import SearchBar from "./ui/SearchBar";
import styles from "./SelectAdvisor.module.css";

const advisors = [
  {
    id: 1,
    username: "Ester",
    location: "Canada",
    industry: "Retail",
  },
  {
    id: 2,
    username: "Ester",
    location: "Canada",
    industry: "Retail",
  },
  {
    id: 3,
    username: "Ester",
    location: "Canada",
    industry: "Retail",
  },
  {
    id: 4,
    username: "Ester",
    location: "Canada",
    industry: "Retail",
  },
  {
    id: 5,
    username: "Ester",
    location: "Canada",
    industry: "Retail",
  },
];

const SelectAdvisor = () => {
  return (
    <div className="h-auto lg:h-screen bg-primary-600">
      <div className="flex flex-col items-center">
        <div>
          <h4 className={styles.title}>Select Your Advisor</h4>
          <p className={styles.description}>Discover your next career move!</p>
        </div>
        <SearchBar />
      </div>
      <div>
        <div className="p-5 text-center">
          <p>There are {advisors.length} Advisors Ready To Help You</p>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {advisors && advisors.map((advisor) => <Card key={advisor.id} />)}
        </div>
      </div>
    </div>
  );
};

export default SelectAdvisor;
