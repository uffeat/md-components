//This works:
//import * as components from 'https://cdn.jsdelivr.net/gh/uffeat/md-components@v0.0.1/components.js';

//This works:
//import * as components from 'https://uffeat.github.io/md-components/components.js';

//This works:
//import * as components from 'https://uffeat.github.io/md-components-pkg/components.js';
//... but does not work from Parcel!!!

//TODO: Manage release versions.

//TODO: Check that components.js actually works (all options above).



//import * as components from '../components.js';
import * as components from 'https://uffeat.github.io/md-components/components.js';

const dot1 = new components.Dot()

document.body.appendChild(dot1)