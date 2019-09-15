import parallax from './class'

export default {
    init(el){
        let settings = this.parseAttributes(el)
        let pllx = new parallax(el, settings)
        pllx.animate()
        return pllx
    },

    parseAttributes(el){
        let settings = {}


        settings.duration = el.getAttribute('duration')
        settings.animate_class = el.getAttribute('animate_class')
        settings.indicators = el.getAttribute('indicators')
        settings.y = el.getAttribute('y')

        return settings
    }
}