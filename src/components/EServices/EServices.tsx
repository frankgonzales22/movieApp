import { IonGrid, IonRow, IonCol, IonIcon } from "@ionic/react";
import {
    search,
    card,
    bookmarksOutline,
    giftOutline,
    arrowForwardCircleOutline,
    personCircleOutline,
    cardOutline,
    documentOutline,
    homeOutline,
    listCircleOutline,
    bagHandleOutline
} from "ionicons/icons";
import { CSSProperties } from 'react';

const EServices = () => {
    const itemStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
        color: 'green',
        borderRadius: '8px',
        border: '1px solid green',
        minHeight: '100px', // Ensure consistent height
    };

    const iconStyle: CSSProperties = {
        height: '30px',
        width: '30px',
        minWidth: '30px', // Prevent shrinking of icons
    };

    const textStyle: CSSProperties = {
        margin: 0,
        flexGrow: 1,
        textAlign: 'center' as const,
        color: 'black'
    };

    return (
        <>
            <IonGrid style={{ marginTop: '-30px' }}>
                <IonRow className="p-2">
                    {/* First Column (3 items) */}
                    <IonCol size="6" style={{ display: 'grid', gap: '10px' }}>
                        <div style={itemStyle}>
                            <IonIcon icon={personCircleOutline} style={iconStyle} />
                            <h5 style={textStyle}>Account Details</h5>
                            <IonIcon icon={arrowForwardCircleOutline} style={iconStyle} />
                        </div>

                        <div style={itemStyle}>
                            <IonIcon icon={bagHandleOutline} style={iconStyle} />
                            <h5 style={textStyle}>ROP</h5>
                            <IonIcon icon={arrowForwardCircleOutline} style={iconStyle} />
                        </div>

                        <div style={itemStyle}>
                            <IonIcon icon={documentOutline} style={iconStyle} />
                            <h5 style={textStyle}>File A Claim</h5>
                            <IonIcon icon={arrowForwardCircleOutline} style={iconStyle} />
                        </div>
                        <div style={itemStyle}>
                            <IonIcon icon={giftOutline} style={iconStyle} />
                            <h5 style={textStyle}>Rewards</h5>
                            <IonIcon icon={arrowForwardCircleOutline} style={iconStyle} />
                        </div>
                    </IonCol>

                    {/* Second Column (3 items) */}
                    <IonCol size="6" style={{ display: 'grid', gap: '10px' }}>
                        <div style={itemStyle}>
                            <IonIcon icon={cardOutline} style={iconStyle} />
                            <h5 style={textStyle}>Pay Plan</h5>
                            <IonIcon icon={arrowForwardCircleOutline} style={iconStyle} />
                        </div>

                        <div style={itemStyle}>
                            <IonIcon icon={listCircleOutline} style={iconStyle} />
                            <h5 style={textStyle}>Manage My Plan</h5>
                            <IonIcon icon={arrowForwardCircleOutline} style={iconStyle} />
                        </div>

                        <div style={itemStyle}>
                            <IonIcon icon={homeOutline} style={iconStyle} />
                            <h5 style={textStyle}>Book Chapel Service</h5>
                            <IonIcon icon={arrowForwardCircleOutline} style={iconStyle} />
                        </div>
                        <div style={itemStyle}>
                            <IonIcon icon={bookmarksOutline} style={iconStyle} />
                            <h5 style={textStyle}>Book Payment Collection</h5>
                            <IonIcon icon={arrowForwardCircleOutline} style={iconStyle} />
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    );
};

export default EServices;
