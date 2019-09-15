# GSAP inline animations (gia)
Create website animations using attributes inside html

# Installation
* CDN 
`<script src="https://cdn.jsdelivr.net/gh/epicbg/gsap-inline-animations@master/dist/animations.min.js"></script>`
* NPM 
`npm install gsap-inline-animations`

# Usage

HTML
```html
<div id="parallax_container" parallax duration="1000" animate_class="parallax" y="200"></div>
    <p class="parallax">Parallax</p>
    <p class="parallax" style="margin-top: 200px">Parallax</p>
    <p class="parallax">Parallax</p>
</div>
```

#### NPM usage


```javascript
import gia from 'gsap-inline-animations'
```

To detect all attributes and animate them on page load use
```javascript
gia.animate()
```

If you want to create animations run time

```javascript
import { animations } from 'gsap-inline-animations'

let el = document.getElementById('parallax_wrapper')

animations.parallax.init(el)
```

#### CDN usage
```javascript
gia.animate()
```

# Examples
To see all animations and examples, open 'exmaples' folder inside project root directory, where you can see demos of all available animations. All the examples are just preview what you can do with GIA. For custom animations and more info visit the docs


