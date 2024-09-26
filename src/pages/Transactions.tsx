import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/react"

const Transactions: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className=''>
        <IonToolbar >
          <IonTitle>Transactions</IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen className="relative">
        <IonButton routerLink="/app/tab1/details" expand="full">
          Go deeper
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Transactions