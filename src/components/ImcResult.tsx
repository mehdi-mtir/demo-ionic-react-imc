import { IonCard, IonCardTitle, IonCardHeader, IonCardContent } from "@ionic/react";
interface ImcResultProps{
  imcValue : number;
}

const ImcResult : React.FC<ImcResultProps> = (props)=>{

  return(
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Résultat</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Votre IMC est : {props.imcValue.toFixed(2)}
      </IonCardContent>
    </IonCard>
  );
};

export default ImcResult;
