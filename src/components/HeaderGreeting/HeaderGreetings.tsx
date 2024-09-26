import { IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react"
import { notifications, notificationsOutline, search } from "ionicons/icons"
import './HeaderGreetings.css'

const HeaderGreetings = () => {
    return (
        <>
            <IonGrid>
                <IonRow className="justify-content-between p-2">
                    <IonCol
                        // className="bg-green-300"
                    >
                        <h1 className="text-2xl font-bold text-gray-900">Hello, Peter</h1>
                    </IonCol>
                    <IonCol
                        className="end"
                    >
                        <IonIcon
                            aria-hidden="true"
                            icon={search}
                            className="mx-4"
                            style={{ height: '30px', width: '28px' }}  // Adjust size here

                        />
                        <IonIcon
                            aria-hidden="true"
                            icon={notificationsOutline}
                            className="mr"
                            style={{ height: '40px', width: '28px' }}
                        />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    )
}

export default HeaderGreetings