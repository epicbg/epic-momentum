import {TimelineLite, TweenLite} from 'gsap'
import sm from 'scrollmagic'

export default class Parallax {
    constructor(el, settings){
        this.el = el
        this.settings = settings
    }

    animate(){
        let tween = new TimelineLite();

        let tweens = this.el.getElementsByClassName(this.settings.animate_class)

        tween.add(
            TweenLite.to(tweens, 1, {
                y: this.settings.y
            })
        )

        let controller = new sm.Controller();

        let scene = new sm.Scene({
            triggerElement: this.el,
            duration: this.settings.duration
        }).setTween(tween).addTo(controller)

        if(this.settings.indicators){
            scene.addIndicators()
        }

    }
}