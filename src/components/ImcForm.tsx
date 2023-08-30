import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import {calculatorOutline, refreshOutline} from 'ionicons/icons';

const ImcForm : React.FC = ()=>{
  return (
    <IonCard>
              <IonCardHeader>
                <IonCardTitle>IMC</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonItem>
                        <IonLabel position='floating'>Poids en Kg</IonLabel>
                        <IonInput type='number'></IonInput>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonItem>
                        <IonLabel position='floating'>Taille en metre</IonLabel>
                        <IonInput type='number'></IonInput>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12" sizeMd="6" className="ion-text-center">
                      <IonButton
                        size="large"
                        expand="block"
                        color="secondary">
                        <IonIcon
                           slot="start" icon={calculatorOutline}/>
                        Calculer
                      </IonButton>
                    </IonCol>
                    <IonCol size="12" sizeMd="6" className="ion-text-center">
                    <IonButton fill="clear" >
                        <IonIcon  slot="start" icon={refreshOutline}/>
                        Réinitialiser
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
  );
};

export default ImcForm;
