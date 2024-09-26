import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react"
import Banner from "../components/Banner/Banner"

const Account:React.FC = () => {
    return (
        <IonPage>
            <IonHeader className=''>
                {/* <IonToolbar >
                    <IonTitle>Account</IonTitle>
                </IonToolbar> */}

            </IonHeader>

            <IonContent fullscreen className="relative">
                <Banner />
            </IonContent>
        </IonPage>
    )
}

export default Account