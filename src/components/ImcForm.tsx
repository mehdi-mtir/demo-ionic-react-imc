import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonRow , InputCustomEvent} from "@ionic/react";
import {calculatorOutline, refreshOutline} from 'ionicons/icons';
import { useState } from "react";

interface ImcFormProps {
  imcHandler : (imc :number | null)=> void
}

const ImcForm : React.FC<ImcFormProps> = (props : ImcFormProps)=>{
  const [poids, setPoids] = useState<number | null>(null);
  const [taille, setTaille] = useState<number | null>(null);
  const calculerImc = ()=>{
    if(poids === null || taille === null)
      return;

    const newImc = (poids / (taille * taille));
    props.imcHandler(newImc);
  }
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
                        <IonInput
                          type='number'
                          value={poids}
                          onIonInput={
                            (event : InputCustomEvent)=>{
                              setPoids(+(event?.target?.value as string))
                            }
                          }></IonInput>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonItem>
                        <IonLabel position='floating'>Taille en metre</IonLabel>
                        <IonInput
                         type='number'
                         value={taille}
                         onIonInput={
                          (event : InputCustomEvent)=>{
                            setTaille(+(event?.target?.value as string))
                          }
                        }></IonInput>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12" sizeMd="6" className="ion-text-center">
                      <IonButton
                        size="large"
                        expand="block"
                        color="secondary"
                        onClick={calculerImc}>
                        <IonIcon
                           slot="start" icon={calculatorOutline}/>
                        Calculer
                      </IonButton>
                    </IonCol>
                    <IonCol size="12" sizeMd="6" className="ion-text-center">
                    <IonButton
                      fill="clear"
                      onClick={()=>{
                        setPoids(null);
                        setTaille(null);
                        props.imcHandler(null);
                      }} >
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
