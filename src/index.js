import * as d3 from "d3";
// import * as d3 from 'https://esm.sh/d3@7';
import {drawVis} from './render.js';
import * as utils from './utils.js';
import * as controls from './controls.js';
import * as barcharts from './barcharts.js';
import * as tables from './tables.js';
// window.BiasAnalyzerVis = BiasAnalyzerVis;  // access globally

// function initialize({ model }) {
//     // Set up shared state or event handlers.
//     return () => {
//       // Optional: Called when the widget is destroyed.
//     }
// } // end initialize

// async function render({ model, el }) {
function render({ model, el }) {
    // for testing
    console.log('hello');

    // Dynamically import the ESM bundle relative to this module’s URL
    // console.log('window.location.href', window.location.href);
    // console.log('window.location.href path', new URL("./js/biasanalyzer_vis.esm.js", window.location.href));
    // console.log('import.meta.url', import.meta.url);
    // const mod = new URL("./biasanalyzer_vis.esm.js", import.meta.url);
    // const mod = "./biasanalyzer_vis.esm.js";
    // const mod = window.location.origin + '/' + "./biasanalyzer_vis.esm.js";
    // const mod = new URL("files/js/biasanalyzer_vis.esm.js", window.location.href).href;
    // console.log('mod = ', mod);
    // const BiasAnalyzerVis = mod.default;
    // console.log('typeof BiasAnalyzerVis (is it a function?) = ', typeof mod);
    // console.log('typeof BiasAnalyzerVis (is it an object?) = ', typeof value === 'object' && value !== null);
    // const mod = await import(new URL("./js/biasanalyzer_vis.esm.js", import.meta.url));
    // const mod = await import(new URL("./js/biasanalyzer_vis.esm.js", window.location.href));

    // const mod = new URL("./js/biasanalyzer_vis.esm.js", window.location.href);
    // console.log('typeof mod = ', typeof mod);
    // const BiasAnalyzerVis = mod.default;
    // console.log('typeof BiasAnalyzerVis = ', typeof BiasAnalyzerVis);
    //
    // <editor-fold desc="PREPARE DATA">
    const concepts1 = model.get('_concepts1');
    const race_stats1 = model.get('_race_stats1');
    const gender_dist1 = model.get('_gender_dist1');
    const age_dist1 = model.get('_age_dist1');

    const concepts2 = model.get('_concepts2');
    const race_stats2 = model.get('_race_stats2');
    const gender_dist2 = model.get('_gender_dist2');
    const age_dist2 = model.get('_age_dist2');
    // </editor-fold>

    el.appendChild(drawVis(concepts1, race_stats1, gender_dist1, age_dist1,
                             concepts2, race_stats2, gender_dist2, age_dist2));

    // Dynamically import your bundled ESM module
    // import(new URL("./biasanalyzer_vis.esm.js", import.meta.url))
    // import(window.location.origin + "/files/biasanalyzer_vis_esm.js")
    //     .then(({ default: BiasAnalyzerVis }) => {
    //         const visEl = BiasAnalyzerVis(
    //             model.get("_concepts1"),
    //             model.get("_race_stats1"),
    //             model.get("_gender_dist1"),
    //             model.get("_age_dist1"),
    //             model.get("_concepts2"),
    //             model.get("_race_stats2"),
    //             model.get("_gender_dist2"),
    //             model.get("_age_dist2")
    //         );
    //         el.appendChild(visEl);
    //     })
    //     .catch(err => {
    //         console.error("Failed to load BiasAnalyzerVis module:", err);
    //     });

    // return () => {
    //   // Optional: Called when the view is destroyed.
    // }

} // end render

// export default async () => {
//   let extraState = {};
//   return {
//     initialize({ model }) { /* ... */ },
//     render({ model, el }) { /* ... */ },
//   }
// }


export {drawVis} from './render.js';
export * as utils from './utils.js';
export * as controls from './controls.js';
export * as barcharts from './barcharts.js';
export * as tables from './tables.js';

export default { render };
