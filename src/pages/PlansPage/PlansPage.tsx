import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from "@ionic/react"

const PlansPage:React.FC= () => {
  return (
    <IonPage>
      <IonHeader className=''>
        <IonToolbar className="primary">
            <IonButtons slot="start">
                <IonBackButton  defaultHref="/app/tab2"/>
            </IonButtons>
          <IonTitle>PlansPage</IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen className="relative">
  s
      </IonContent>
    </IonPage>
  )
}

export default PlansPage