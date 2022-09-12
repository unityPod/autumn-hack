import Profile from "./Profile";
import styles from "./Profile.module.css";
import { ReactComponent as ProfileImg } from "../../assets/images/profile-img.svg";

export default function ProfileAdvisor(){

    return(
        <>
        <div className={styles["container"]}>
        <div className={styles["small-container"]}>
        <ProfileImg className={styles["img"]} />
        <div>
        <h1 className={styles["title"]}>Ester Howard</h1>
        <div className={styles["title1"]}>Retail</div>
        <div className={styles["location"]}>Canada</div>
        </div>
        </div>
        <div className={styles["Bio"]}>Biography</div>
        <div className={styles["excerpt"]}>Hello there, I lead the company's international retail industry, 
            with responsibilties for business in Latin AmericaParagraphs are the building blocks of papers. 
            Many students define paragraphs in terms of length: 
            a paragraph is a group of at least five sentences, 
            a paragraph is half a page long, etc. In reality, though, 
            the unity and coherence of ideas among sentences is what constitutes a paragraph. 
            A paragraph is defined as “a group of sentences or a single sentence that forms a unit” 
            (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. 
            For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. 
            Ultimately, a paragraph is a sentence or group of sentences that support one main idea. 
            In this handout, we will refer to this as the “controlling idea,” because it controls 
            what happens in the rest of the paragraph.
        </div>
        <Profile />
        </div>
        </>
    )
}