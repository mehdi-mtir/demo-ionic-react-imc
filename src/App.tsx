import { IonApp, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ImcForm from './components/ImcForm';
import ImcResult from './components/ImcResult';
import { useState } from 'react';

setupIonicReact();

const App: React.FC = () => {
  const [imc, setImc] = useState<number | null>(null);

  const setImcValue = (newImcValue:number | null)=>{
    if(newImcValue===null || newImcValue > 0 )
      setImc(newImcValue);

  }
  return(<IonApp>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Calculateur d'IMC</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol>
            <ImcForm imcHandler={setImcValue} />
          </IonCol>
        </IonRow>
        {
          !!imc && <IonRow>
          <IonCol>
            <ImcResult imcValue={imc} />
          </IonCol>
        </IonRow>
        }
      </IonGrid>
    </IonContent>
  </IonApp>
);
};

export default App;
