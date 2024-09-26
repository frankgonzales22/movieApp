import { IonGrid, IonRow, IonCol, IonText } from "@ionic/react";
import { useHistory } from "react-router-dom";
import './TitleViewAll.css'; // Import your CSS file

interface TitleProps {
  title: string;
}

const TitleViewAll = ({ title }: TitleProps) => {
  const history = useHistory(); // Hook to programmatically navigate

  const handleViewAllClick = () => {
    if (title === "Products") {
      // Navigate to ProductsPage under Home
      history.push("/productsPage");
    } else if (title === "eServices") {
      // Navigate to another page for eServices (update this path as needed)
      history.push("/productsPage1");
    }
  };

  return (
    <IonGrid style={{ marginTop: "-10px", marginBottom: "-10px" }}>
      <IonRow className="justify-content-between p-2">
        <IonCol>
          <strong>{title}</strong>
        </IonCol>
        <IonCol className="end">
          {/* Clickable 'View All' text with class */}
          <IonText
            className="view-all-text"  // Add the class here
            onClick={handleViewAllClick}
          >
            View All
          </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default TitleViewAll;
