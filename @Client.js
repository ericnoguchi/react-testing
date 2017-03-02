import ReactDOM from 'react-dom';
import routes from './routes/routes.jsx'
import es6Promisepolyfill from 'es6-promise';
es6Promisepolyfill.polyfill();


//

// setTimeout(() => {
//     require.ensure(['./Common/js/es6-dynamic-chunk'], (require) => {
//         console.log(require('./Common/js/es6-dynamic-chunk'));
//     })
// }, 1000);
// let a = 1;
// async function getEs6DynamicChunk() {
//     console.log(await
//         import ('./e2'));

// }

// setTimeout(getEs6DynamicChunk, 5000);

// async function getCommonsJsDynamicChunk() {
//     let module = await
//     import ('./Common/js/commonjs-dynamic-chunk');
//     console.log(module);
//     //module.default('async function import');
// }

// setTimeout(getCommonsJsDynamicChunk, 1000);




ReactDOM.render(routes, document);