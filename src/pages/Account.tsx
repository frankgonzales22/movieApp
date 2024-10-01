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
                {/* <IonToolbar>

                    <IonGrid>
                        <IonRow>
                            <IonIcon icon={personCircleOutline} style={{ fontSize: '32px', borderRadius: '50%' }} color="light" />
                            <IonCol size="10" onClick={handleEndClick}>
                                JOSE FRANK GONZALES
                            </IonCol>
                            <IonIcon onClick={handleEndClick} icon={chevronForwardOutline} style={{ fontSize: '32px', borderRadius: '50%' }} color="light" />

                        </IonRow>
                    </IonGrid>
                </IonToolbar> */}
                <AccountHeader />
            </IonHeader>

            <IonContent >
                <AccountList accountItems={accountItems} />
                
            </IonContent>
        </IonPage>
    )
}

export default Account