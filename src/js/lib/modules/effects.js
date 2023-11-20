import $ from "../core";

$.prototype.animateOverTime = function(dur, cb, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if(!timeStart) {
            timeStart = time;
        };

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / dur, 1);
        
        cb(complection);

        if(timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if(typeof fin === 'function') {
                fin();
            };
        };
    };
    return _animateOverTime;
};

$.prototype.fade = function(dur, display, fin, fadingIn) {
    for (let i = 0; i < this.length; i++) {
        
        const fadeFunc = (complection) => {
            const opacity = fadingIn ? complection : 1 - complection;
            this[i].style.opacity = opacity;
            if (!fadingIn && complection === 1) {
                this[i].style.display = 'none';
            }
        };

        this[i].style.display = (window.getComputedStyle(this[i]).display === 'none' || fadingIn) ? display || 'block' : this[i].style.display;
        
        const ani = this.animateOverTime(dur, fadeFunc, fin);
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeIn = function(dur, display, fin) {
    return this.fade(dur, display, fin, true);
};

$.prototype.fadeOut = function(dur, fin) {
    return this.fade(dur, null, fin, false);
};

$.prototype.fadeToggle = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        const fadingIn = window.getComputedStyle(this[i]).display === 'none';
        this.fade(dur, display, fin, fadingIn);
    }
    return this;
};