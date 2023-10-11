import { useBox } from '@react-three/cannon';
import { useGLTF, Sparkles } from '@react-three/drei';
import { ToastProvider, useToasts } from 'react-toast-notifications';


const ThreeModel = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/assets/models/model.gltf');
  const { addToast } = useToasts();
  const [ref] = useBox((index) => ({
    type: 'Static',
    mass: 1,
    args: props.args,
    position: props.position,

    ...props,
  }));

  return (
    <group ref={ref} {...props} dispose={null}>
      <Sparkles count={200} scale={[20, 20, 10]} size={3} speed={2} />
      <mesh
      onClick={() => {
        addToast("You clicked on a tree", {
          appearance: 'success',
          autoDismiss: true,
        })
      }}
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes['tree-beech'].geometry}
        material={materials.color_main}
      />
    </group>
  );
};

export default ThreeModel;
