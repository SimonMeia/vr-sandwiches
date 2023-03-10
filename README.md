# VR Sandwiches

VR Sandwiches is a VR game where you have to build your sandwich in a 3d kitchen following a given menu. The project has been realized in 3rd year of a Media Engeneering Bachelor. The project is optimized to be launched on a VR gear (Oculus Quest 2) but it is also playable on other VR devices and on desktop. The desktop version will have ingame issues such as the grabbing mechanics

### Boilerplate and assets

The project has been made on the top of my teacher's boilerplate : [A boilerplate for A-Frame 1.4, Vue 3.2 et Vite 4.1](https://github.com/Chabloz/a-frame-vite-vue-boilerplate)

External assets included in the project :

- aframe-blink-controls: https://github.com/jure/aframe-blink-controls (MIT License)
- simple-navmesh-constraint: https://github.com/AdaRoseCannon/aframe-xr-boilerplate (MIT Licence)

**Demo**: https://onivers.com/aframe-vue-boilerplate/

Create a folder for your project and :

### Clone (or fork, or download)
```sh
git clone https://github.com/SimonMeia/vr-sandwiches .
```
### Install
```sh
npm ci
```
### Dev
```sh
npm run dev
```
### Build
```sh
npm run build
```
### Running the project on desktop vs in VR
The project is optimized to be launched on a VR gear but it is also playable on desktop. To do so you have to go on the `src/components/TheScene.vue` file and change the `target` variable :
````javascript
// To play in desktop mode :
const target = "";

// To play in VR : 
const target = "#hand-right"
````