// import * as d3 from "d3";
import * as d3 from 'https://esm.sh/d3@7';
import {drawVis} from './render.js';

// function initialize({ model }) {
//     // Set up shared state or event handlers.
//     return () => {
//       // Optional: Called when the widget is destroyed.
//     }
// } // end initialize

// async function render({ model, el }) {
function render({ model, el }) {
    // for testing
    // console.log('hello');

    const concepts1 = model.get('_concepts1');
    const race_stats1 = model.get('_race_stats1');
    const gender_dist1 = model.get('_gender_dist1');
    const age_dist1 = model.get('_age_dist1');

    const concepts2 = model.get('_concepts2');
    const race_stats2 = model.get('_race_stats2');
    const gender_dist2 = model.get('_gender_dist2');
    const age_dist2 = model.get('_age_dist2');

    el.appendChild(drawVis(concepts1, race_stats1, gender_dist1, age_dist1,
                             concepts2, race_stats2, gender_dist2, age_dist2));

    // return () => {
    //   // Optional: Called when the view is destroyed.
    // }

} // end render

export default { render };
