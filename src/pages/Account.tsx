import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow } from "@ionic/react"

const Account: React.FC = () => {
 
    const myStyle = {
        backgroundColor : '#135d54',
        width: '300px',
        height: '300px',
        border: '1px solid #fff'
    }
    
return (
    <IonPage>
        <IonHeader className=''>
            {/* <IonToolbar >
                    <IonTitle>Account</IonTitle>
                </IonToolbar> */}

        </IonHeader>

        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol offset="6" offset-md="4" offset-lg="2">
                        1
                    </IonCol>
                    <IonCol offset="6" offset-md="4" offset-lg="2">
                        2
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
)
}

export default Account