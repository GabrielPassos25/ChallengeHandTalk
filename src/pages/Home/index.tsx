// Importação das bibliotecas utilizadas
import firebase from "firebase";
import React, { useState, useEffect } from "react";
import { Renderer, THREE } from "expo-three";
import { ExpoWebGLRenderingContext } from "expo-gl";
import { FlatList, Platform, ScrollView, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { BoxBufferGeometry, CylinderGeometry, DirectionalLight, DodecahedronGeometry, Mesh, MeshLambertMaterial, OctahedronGeometry, PerspectiveCamera, Scene, SphereGeometry, TetrahedronGeometry, TorusGeometry } from "three";

//Importação de componentes pré-construidos
import {auth} from '../../../firebase';
import { figures } from "../../utils/mocado";
import { SVGrender } from "../../components/SVGrender";
import { InputFigure } from '../../components/InputFigure';
import { FigureChoice } from "../../components/FigureChoice";

//Estilização dos componentes
import { Container, Title, AreaSelector, LogoContainer} from "./styles";


//Variáveis padrões para os componentes
interface Props {
  navigation: any;
}

//Variáveis auxiliares para fluxo do programa
global.THREE = global.THREE || THREE;
const Availablecolors = ["green", "blue", "red", "white", "purple", "black", "yellow"];

export function Home({ navigation } : Props) {
  const [figureSelected, setFigureSelected] = useState("00");
  const [bool, setBool] = useState(true);
  const [info, setInfo] = useState({"color_cube": "", "color_dodecahedron": "","color_triangle": "","color_ring": "","color_sphere": "","color_octahedron": "","color_cylinder": "","color_cone": "","email": "", "key": ""});
  const handleColorFigures = (text: string) => {
    switch(figureSelected){
      case "00":
        setInfo({...info, color_cube: text});
        break;
      case "01":
        setInfo({...info, color_dodecahedron: text});
        break;
      case "02":
        setInfo({...info, color_triangle: text});
        break;
      case "03":
        setInfo({...info, color_ring: text});
        break;
      case "04":
        setInfo({...info, color_sphere: text});
        break;
      case "05":
        setInfo({...info, color_octahedron: text});
        break;
      case "06":
        setInfo({...info, color_cylinder: text});
        break;
      case "07":
        setInfo({...info, color_cone: text});
        break;
    }
  }
  const handleColor3Figures = (text: string, figure: string) => {
    switch(figure){
      case "cube":
        info.color_cube = text;
        break;
      case "cone":
        info.color_cone = text;
        break;
      case "dodecahedron":
        info.color_dodecahedron = text;
        break;
    }
  }
  const onContextCreate = async (gl: ExpoWebGLRenderingContext) => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
    camera.position.z = 2;
    const renderer = new Renderer({ gl });
    const directionalLight = new DirectionalLight(0xffffff, 1.2);
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    let geometry: any;
    let material: any;
    switch(figureSelected){
      case "00":
        directionalLight.position.set(0, 0, 5);
        scene.add(directionalLight);
        geometry = new BoxBufferGeometry(1, 1, 1);
        material = new MeshLambertMaterial({ color: info.color_cube });
        const cube = new Mesh(geometry, material);
        scene.add(cube);
        const render = () => {
            requestAnimationFrame(render);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
            gl.endFrameEXP();
        }
        render();
        break;
      case "01":
        directionalLight.position.set(0, 0, 5);
        scene.add(directionalLight);
        geometry = new DodecahedronGeometry(1,0);
        material = new MeshLambertMaterial({ color: info.color_dodecahedron});
        const dodecahedron = new Mesh(geometry, material);
        scene.add(dodecahedron);
        const render1 = () => {
          requestAnimationFrame(render1);
          dodecahedron.rotation.x += 0.01;
          dodecahedron.rotation.y += 0.01;
          renderer.render(scene, camera);
          gl.endFrameEXP();
        }
        render1();
        break;
      case "02":
        directionalLight.position.set(0, 0, 5);
        scene.add(directionalLight);  
        geometry = new TetrahedronGeometry(1,0);
        material = new MeshLambertMaterial({ color: info.color_triangle});
        const triangle = new Mesh(geometry, material);
        scene.add(triangle);
        const render2 = () => {
            requestAnimationFrame(render2);
            triangle.rotation.x += 0.01;
            triangle.rotation.y += 0.01;
            renderer.render(scene, camera);
            gl.endFrameEXP();
        }
        render2();
        break;
      case "03":
        directionalLight.position.set(0, 0, 5);
        scene.add(directionalLight);
        geometry = new TorusGeometry(1,0.2,16, 100);
        material = new MeshLambertMaterial({ color: info.color_ring});
        const ring = new Mesh(geometry, material);
        scene.add(ring);
        const render3 = () => {
          requestAnimationFrame(render3);
          ring.rotation.x += 0.01;
          ring.rotation.y += 0.01;
          renderer.render(scene, camera);
          gl.endFrameEXP();
        }
        render3();
        break;
      case "04":
        directionalLight.position.set(0, 0, 5);
        scene.add(directionalLight);
        geometry = new SphereGeometry(1, 32, 16);
        material = new MeshLambertMaterial({ color: info.color_sphere});
        const sphere = new Mesh(geometry, material);
        scene.add(sphere);
        const render4 = () => {
            requestAnimationFrame(render4);
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            renderer.render(scene, camera);
            gl.endFrameEXP();
        }
        render4();
        break;
      case "05":
        directionalLight.position.set(0, 0, 5);
        scene.add(directionalLight);
        geometry = new OctahedronGeometry();
        material = new MeshLambertMaterial({ color: info.color_octahedron});
        const octahedron = new Mesh(geometry, material);
        scene.add(octahedron);
        const render5 = () => {
            requestAnimationFrame(render5);
            octahedron.rotation.x += 0.01;
            octahedron.rotation.y += 0.01;
            renderer.render(scene, camera);
            gl.endFrameEXP();
        }
        render5();
        break;
      case "06":
        directionalLight.position.set(0, 0, 5);
        scene.add(directionalLight);
        geometry = new CylinderGeometry(0.6, 0.6, 1, 32);
        material = new MeshLambertMaterial({ color: info.color_cylinder});
        const cylinder = new Mesh(geometry, material);
        scene.add(cylinder);
        const render6 = () => {
            requestAnimationFrame(render6);
            cylinder.rotation.x += 0.01;
            cylinder.rotation.y += 0.01;
            renderer.render(scene, camera);
            gl.endFrameEXP();
        }
        render6();
        break;
      case "07":
        directionalLight.position.set(0, 0, 5);
        scene.add(directionalLight);
        geometry = new CylinderGeometry(0.6, 0, 1, 32);
        material = new MeshLambertMaterial({ color: info.color_cone});
        const cone = new Mesh(geometry, material);
        scene.add(cone);
        const render7 = () => {
            requestAnimationFrame(render7);
            cone.rotation.x += 0.01;
            cone.rotation.y += 0.01;
            renderer.render(scene, camera);
            gl.endFrameEXP();
        }
        render7();
        break;
      case "08":
        navigation.navigate("ThreeFigures");
        break;
    }
  };
  const onContextCreate3Figures = async (figure: string, gl: ExpoWebGLRenderingContext) => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
    camera.position.z = 2;
    const renderer = new Renderer({ gl });
    const directionalLight = new DirectionalLight(0xffffff, 1.2);
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    let geometry: any;
    let material: any;
    switch(figure) {
      case 'cube':
        directionalLight.position.set(0, 0, 5);
        scene.add(directionalLight);
        geometry = new BoxBufferGeometry(1, 1, 1);
        material = new MeshLambertMaterial({ color: info.color_cube });
        const cube = new Mesh(geometry, material);
        scene.add(cube);
        const render = () => {
            requestAnimationFrame(render);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
            gl.endFrameEXP();
        }
        render();
        break;
      case 'cone':
        directionalLight.position.set(0, 0, 5);
        scene.add(directionalLight);
        geometry = new CylinderGeometry(0.6, 0, 1, 32);
        material = new MeshLambertMaterial({ color: info.color_cone});
        const cone = new Mesh(geometry, material);
        scene.add(cone);
        const render1 = () => {
            requestAnimationFrame(render1);
            cone.rotation.x += 0.01;
            cone.rotation.y += 0.01;
            renderer.render(scene, camera);
            gl.endFrameEXP();
        }
        render1();
        break;
      case 'dodecahedron':
        directionalLight.position.set(0, 0, 5);
        scene.add(directionalLight);
        geometry = new DodecahedronGeometry(1,0);
        material = new MeshLambertMaterial({ color: info.color_dodecahedron});
        const dodecahedron = new Mesh(geometry, material);
        scene.add(dodecahedron);
        const render2 = () => {
            requestAnimationFrame(render2);
            dodecahedron.rotation.x += 0.01;
            dodecahedron.rotation.y += 0.01;
            renderer.render(scene, camera);
            gl.endFrameEXP();
        }
        render2();
        break;
      }
  };
  useEffect(() => {
    setBool(false);
  }, [figureSelected]);
  useEffect(() => {
    if(!bool){
      setBool(true);
    }
  }, [bool]);
  async function getData() {
    const user = auth.currentUser;
    const aux2 = (await fetch('https://challengehandtalk-default-rtdb.firebaseio.com/users.json').then((response) => response.json()))
    const aux = Object.keys(aux2).filter((key) => aux2[key].email === user.email).map((key) => ({...aux2[key], key}));
    setInfo(aux[0]);
    setBool(false);
  }
  useEffect(() => {
    getData();
  }, [true]);
  async function setData(){
    for(let i=0; i < Object.values(info).length-2; i++){
      if(i >= 7){
        continue;
      }
      const value = Object.values(info)[i];
      if(!Availablecolors.includes(value)){
        Alert.alert("Erro!", "Cor inválida! Consulte as cores válidas e tente novamente!" + value);
        return;
      }
    };
    firebase.database().ref('users/' + info.key).set({
      color_cube: info.color_cube,
      color_dodecahedron: info.color_dodecahedron,
      color_triangle: info.color_triangle,
      color_ring: info.color_ring,
      color_sphere: info.color_sphere,
      color_octahedron: info.color_octahedron,
      color_cylinder: info.color_cylinder,
      color_cone: info.color_cone,
      email: info.email
    });
    setBool(false);
  }
  return (
    <Container>
        <LogoContainer>
            <SVGrender/>
        </LogoContainer>
        <AreaSelector>
            <Title>Visualizador de formas geométricas</Title>
            <FlatList
                data={figures}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <FigureChoice
                    active={item.id === figureSelected}
                    onPress={() => {setFigureSelected(item.id)}}
                    title={item.quant}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    height: 40,
                    justifyContent: "center",
                    paddingBottom: 5,
                    marginVertical: 20,
                }}
                />
        </AreaSelector>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}} bounces={false} >
          <KeyboardAwareScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={Platform.select({ios: {flex:1}})}>
            {
              figureSelected !== "08" ?
                bool ? <InputFigure onContextCreate = {onContextCreate} handleColor={handleColorFigures} setData={setData} description={"Deseja trocar a cor da figura geométrica?"} placeholder={"Nova cor"}/>
                : <></>
              :
                bool ?
                  <>
                    <InputFigure 
                      onContextCreate = {(gl : ExpoWebGLRenderingContext) => onContextCreate3Figures('cube', gl)} 
                      handleColor={(text) => handleColor3Figures(text, "cube")} 
                      setData={setData} 
                      description={"Deseja trocar a cor do cubo?"}
                      placeholder={"Nova cor - Cubo"}
                    /> 
                    <InputFigure 
                      onContextCreate = {(gl : ExpoWebGLRenderingContext) => onContextCreate3Figures('cone', gl)} 
                      handleColor={(text) => handleColor3Figures(text, "cone")} 
                      setData={setData} 
                      description={"Deseja trocar a cor do cone?"}
                      placeholder={"Nova cor - Cone"}
                    /> 
                    <InputFigure 
                      onContextCreate = {(gl : ExpoWebGLRenderingContext) => onContextCreate3Figures('dodecahedron', gl)} 
                      handleColor={(text) => handleColor3Figures(text, "dodecahedron")} 
                      setData={setData} 
                      description={"Deseja trocar a cor do dodecaedro?"}
                      placeholder={"Nova cor - Dodecaedro"}
                    /> 
                  </> 
                : <></>
            }
          </KeyboardAwareScrollView>
        </ScrollView>
    </Container>
  );
}
