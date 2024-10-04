import { IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import React from 'react';
import { useHistory } from 'react-router-dom';


interface AccountListProps {
    accountItems: {
        title: string;
        items: { label: string; icon: string, color: string }[]; // Keep icon as an object type
    }[];
}

const AccountList: React.FC<AccountListProps> = ({ accountItems }) => {

    const history = useHistory(); // Hook to programmatically navigate

    const handleEndClick = () => {
        history.push("/accountInformation");
    };
    return (
        <>
            {accountItems.map((section, index) => (
                <IonItemGroup key={index} style={{ padding: '20px', marginTop: '15px' }}>
                    <IonLabel>
                        <h2 style={{ fontWeight: 'bold' }}>{section.title}</h2>
                    </IonLabel>
                    {section.items.map((item, itemIndex) => (
                        <IonItem key={itemIndex} detail style={{ padding: '8px 0' }} onClick={handleEndClick}>
                            <IonIcon icon={item.icon} style={{ marginRight: '6px', color: item.color }} />
                            <IonLabel>{item.label}</IonLabel>
                        </IonItem>
                    ))}
                </IonItemGroup>
            ))}

        </>
    );
};

export default AccountList;