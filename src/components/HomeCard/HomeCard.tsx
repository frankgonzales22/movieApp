import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge, IonItem, IonLabel, IonList, IonRow, IonCol, isPlatform, IonButton, IonIcon } from "@ionic/react"
import './HomeCard.css'
import { calendarOutline, cardOutline } from "ionicons/icons"

const HomeCard = () => {
    return (
        <>

            <IonCard style={{
                margin: '0 20px',
                // background: 'linear-gradient(to right, #FFFFFF, #AEAEAE, #EFEA50, #C2F9BA, #4FDB4F)',
                background: 'linear-gradient(to right,rgba(239, 234, 80, 0.3), rgba(194, 249, 186, 0.8),  rgba(79, 219, 79, 0.8))',

                // background: 'linear-gradient(to right,#EFEA50, #FFFFFF,  #C2F9BA)',
            }}>
                <IonRow className="grid">
                    <IonCol
                        className="end mt-4"
                    >
                        <div className="border border-red-500 rounded-full p-1 text-red-500 px-3">Unpaid</div>
                        <div className=" bg-green-700 rounded-full p-1 text-gray-100 px-3 mx-2">Active</div>
                    </IonCol>
                </IonRow>

                {isPlatform('ios') ?
                    (<IonCardHeader style={{
                        marginTop : '-30px'
                    }}>

                        <IonCardSubtitle className="mt-3">Due Date on 01 Sep 2024 </IonCardSubtitle>

                        <IonCardSubtitle>Amount Due</IonCardSubtitle>
                        <IonCardTitle>₱10,000.00</IonCardTitle>
                        <IonCardSubtitle>Life Plan Number</IonCardSubtitle>
                        <IonCardTitle>LOS006000B</IonCardTitle>


                    </IonCardHeader>)
                    :
                    (
                        <IonCardHeader style={{
                            marginTop : '-30px'
                        }}>
                            <IonCardTitle>
                                <strong>LOS006000B</strong>
                            </IonCardTitle>
                            <IonCardSubtitle>Life Plan Number</IonCardSubtitle>
                            <IonCardTitle>
                                <strong>
                                    ₱10,000.00
                                </strong>
                            </IonCardTitle>
                            <IonCardSubtitle>Amount Due</IonCardSubtitle>
                            <IonCardSubtitle className="mt-3">Due Date on 01 Sep 2024 </IonCardSubtitle>
                        </IonCardHeader>
                    )
                }

                <IonCardContent>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <IonButton
                            className="border border-green-500 rounded p-1 text-green-500 font-bold flex-grow mx-1"
                            fill="clear"
                            style={{ flexGrow: 1, fontWeight: 'bold' }}
                        >
                            <IonIcon
                                aria-hidden="true"
                                icon={calendarOutline}
                                className="mr"
                                style={{ height: '25px', width: '32px', marginRight: '5px' }} // Larger icon size
                            />
                            Remind Me
                        </IonButton>

                        <IonButton
                            style={{ backgroundColor: '#FF7043', flexGrow: 1, fontWeight: 'bold' }}
                            className="rounded p-1 text-gray-200 font-bold w-max"
                            fill="clear"
                        >
                            <IonIcon
                                aria-hidden="true"
                                icon={cardOutline}
                                className="mr"
                                style={{ height: '25px', width: '32px', marginRight: '5px' }} // Larger icon size
                            />
                            Pay Now
                        </IonButton>

                    </div>
                </IonCardContent>
            </IonCard>
        </>
    )
}

export default HomeCard