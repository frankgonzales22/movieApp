import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react"
import { useGrossDeferredCol } from "../fetch_data/fetchSummary";
import { useState } from "react";

const Plans: React.FC = () => {

  const { data, isLoading } = useGrossDeferredCol();
  const [dataReady, setDataReady] = useState<any[]>([])
  const [ready, setReady] = useState(false)

  return (
    <IonPage className="bg-violet-500">
      <IonHeader className=''>
        <IonToolbar >
          <IonTitle>Plans</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="bg-violet-500">
        {/* <button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded p-2'
          onClick={() => {
            // setDataReady(data!)
            setReady(!ready)
            if (!ready) {
              setDataReady(data!)
            } else {
              setDataReady([])
            }
          }}
        >
          {ready ? 'NO' : 'LOAD DATA'}
        </button>

        {dataReady && [...new Set(dataReady.map(i => i['territoryCode']))].map(code => (
          <div key={code} className="">{code}</div>
        ))} */}
      </IonContent>
    </IonPage>
  )
}

export default Plans