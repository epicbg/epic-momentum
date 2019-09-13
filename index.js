import animations from './src/helpers/all_animations'
import { getElementsFor } from './src/helpers/functions'

import ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
 
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'


// If you need to create animation runtime for element, you can import it and run like so
// ---code--- import parallax from 'gia/src/animations/parallax/class'
// ---code--- new parallax(element, {setting})

const gia = {

    animations,

    animate(){
        for(let type in this.animations){
            let elements = getElementsFor(type)

            // All elements will animate instantly
            elements.forEach(el => {
                this.animations[type].init(el)
            })
        }

        return this
    }
}

window.gia = gia.animate()

export default gia
