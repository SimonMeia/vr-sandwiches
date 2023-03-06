import { nextSliceHeight, slices } from "../stores/slices.js";

AFRAME.registerComponent("grabbable", {
    schema: {
        target: { type: "selector", default: "#camera-rig" },
        modelName: { type: "string" },
    },
    init: function () {
        this.initialPos = { ...this.el.object3D.position };
        this.initialRot = this.el.getAttribute('rotation');
        this.targetPos = new THREE.Vector3();
        this.targetRot = new THREE.Quaternion();
        this.pos = new THREE.Vector3();
        this.rot = new THREE.Quaternion();
        this.target = null;
        this.el.addEventListener("click", (evt) => this.grab(evt));
    },
    grab: function (evt) {
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
            this.target = this.data.target;
        } else {
            this.target = null;
            if (
                this.el.object3D.position.x >= -0.24 &&
                this.el.object3D.position.x <= 0.9 &&
                this.el.object3D.position.z <= -1.4 &&
                this.el.object3D.position.z >= -1.78
            ) {
                this.el.object3D.position.set(-0.082, nextSliceHeight.value, -1.615);
                slices.value++;
                this.el.object3D.rotation.set(0, 0, 0);
                this.el.removeAttribute("grabbable");
                this.el.removeAttribute("clickable");
            } else {
                this.el.remove();
            }
        }
    },
    reset: function () {
        this.el.object3D.position.set(this.initialPos.x, this.initialPos.y, this.initialPos.z);
    },
    tick: function () {
        if (this.target === null) return;
        this.el.object3D.position.copy(this.data.target.object3D.position);
        this.el.object3D.rotation.copy(this.data.target.object3D.rotation);
    },
});
