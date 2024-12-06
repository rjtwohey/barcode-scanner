import { IonButton } from '@ionic/react';
import './ExploreContainer.css';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerOptions, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  const barcodeScanner = async () => {
    const options: CapacitorBarcodeScannerOptions = {
      hint: CapacitorBarcodeScannerTypeHint.QR_CODE
    };
    const res = await CapacitorBarcodeScanner.scanBarcode(options);
    console.log(res);
  }

  return (
    <div id="container">
      <IonButton onClick={barcodeScanner}>Scan Barcode</IonButton>
    </div>
  );
};

export default ExploreContainer;
