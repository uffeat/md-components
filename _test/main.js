//This works:
//import * as components from 'https://cdn.jsdelivr.net/gh/uffeat/md-components@v0.0.1/components.js';

//This works:
//import * as components from 'https://uffeat.github.io/md-components/components.js';

//This works:
//import * as components from 'https://uffeat.github.io/md-components-pkg/components.js';
//... but does not work from Parcel!!!

//TODO: Manage release versions.

//TODO: Check that components.js actually works (all options above).



import * as components from '../components.js';
//import * as components from 'https://uffeat.github.io/md-components/components.js';  // Always latest release (requires release).
//import * as components from 'https://cdn.jsdelivr.net/gh/uffeat/md-components@v1-alpha/components.js';


const index1 = new components.Index1({closeOnClick: true})
index1.logo = './_test/logo.svg'
index1.title = "MD Components Test"
document.body.appendChild(index1)

const dot1 = new components.Dot()
index1.addComponent(dot1, 'main')

dot1.addEventListener('click', event => index1.togglePanel())


