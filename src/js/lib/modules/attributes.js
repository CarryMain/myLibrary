import $ from "../core";

$.prototype.addAttr = function (typeName, name) {
    for(let i = 0; i < this.length; i++) {
        this[i].setAttribute(typeName, name);
    }
    return this;
}

$.prototype.removeAttr = function (typeName) {
    for(let i = 0; i < this.length; i++) {
        this[i].removeAttribute(typeName);
    }
    return this;
}

$.prototype.getAttr = function (typeName) {
    for(let i = 0; i < this.length; i++) {
        this[i].getAttribute(typeName);
    }
    return this;
}

