import { IonCard, IonCardTitle, IonCardHeader, IonCardContent } from "@ionic/react";


const ImcResult : React.FC = ()=>{

  return(
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Résultat</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Votre IMC est : ....
      </IonCardContent>
    </IonCard>
  );
};

export default ImcResult;
