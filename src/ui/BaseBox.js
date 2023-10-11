import { useBox } from '@react-three/cannon';
import { ToastProvider, useToasts } from 'react-toast-notifications';


const BaseBox = ({ ...props }) => {

  const { addToast } = useToasts();
  
  const [ref] = useBox((index) => ({
    type: 'Static',
    mass: 1,
    onCollide: (e) => {
      console.log(e);

      addToast("Collision detected", {
        appearance: 'error',
        autoDismiss: true,
      })
    },
    ...props,
  }));

  return (
    <mesh castShadow position={props.position} ref={ref}>
      <boxGeometry args={props.args} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

export default BaseBox;
