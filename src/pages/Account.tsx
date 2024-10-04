import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonButtons, IonButton, IonIcon } from "@ionic/react"
// import './Account.css'
import { chevronBackOutline, personCircleOutline, chevronForwardOutline } from "ionicons/icons"
import AccountHeader from "../components/AccountHeader/AccountHeader";
import AccountList from "../components/AccountList/AccountList";
import { accountItems } from "../components/AccountList/accountItems";
const Account: React.FC = () => {
    const handleEndClick = () => {
        console.log("End button clicked");
    };


    return (
        <IonPage >
            <IonHeader className='account-header'>
                <AccountHeader />
            </IonHeader>

            <IonContent >
                <AccountList accountItems={accountItems} />
            </IonContent>
        </IonPage>
    )
}

export default Account