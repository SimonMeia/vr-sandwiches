import { nextSliceHeight, sandwich } from "../stores/sandwiches.js";

AFRAME.registerComponent("grabbable", {
    schema: {
        target: { type: "selector", default: "#camera-rig" },
        modelName: { type: "string" },
    },
    init: function () {
        this.initialPos = { ...this.el.object3D.position };
        this.initialRot = this.el.getAttribute("rotation");
        this.targetPos = new THREE.Vector3();
        this.targetRot = new THREE.Quaternion();
        this.pos = new THREE.Vector3();
        this.rot = new THREE.Quaternion();
        this.target = null;
        this.el.addEventListener("click", (evt) => setTimeout(() => this.grab(evt)));
        this.data.target.addEventListener("click", (evt) => this.ungrab(evt));
    },
    grab: function (evt) {
        console.log("grab");
        if (this.target === null) {
            let scene = this.el.sceneEl;
            let baseObject = this.el.cloneNode(true);
            baseObject.setAttribute("position", this.initialPos);
            baseObject.setAttribute("rotation", this.initialRot);
            baseObject.setAttribute(
                "grabbable",
                `modelName:${this.data.modelName}; target:#${this.data.target.id}`
            );
            baseObject.setAttribute("gltf-model", this.data.modelName);
            baseObject.setAttribute("scale", this.el.object3D.scale);
            scene.appendChild(baseObject);
            this.el.removeAttribute("clickable");
            this.target = this.data.target;
        }
    },
    ungrab: function (evt) {
        console.log("ungrab");
        console.log(evt)
        if (this.target === null) return;
        this.target = null;
        if (
            this.el.object3D.position.x >= -0.24 &&
            this.el.object3D.position.x <= 0.9 &&
            this.el.object3D.position.z <= -1.4 &&
            this.el.object3D.position.z >= -1.78
        ) {
            this.el.object3D.position.set(-0.082, nextSliceHeight.value, -1.615);
            sandwich.value.push(this.data.modelName);
            this.el.object3D.rotation.set(0, 0, 0);
            this.el.removeAttribute("grabbable");
            this.el.setAttribute("class", "sandwich");
        } else {
            this.el.remove();
        }
    },
    tick: function () {
        if (this.target === null) return;
        // console.log(this.data.target.object3D.position)
        // console.log(this.data.target.object3D)
        this.el.object3D.position.copy(this.data.target.object3D.position);
        this.el.object3D.rotation.copy(this.data.target.object3D.rotation);
        if (this.data.target === "#hand-right") {
            this.el.object3D.rotation.z += 1.5708;
            this.el.object3D.position.y += 0.03;
        }
    },
});
