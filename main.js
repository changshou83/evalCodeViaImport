import './style.css';

document.querySelector('#app').innerHTML = `
  <a href="https://2ality.com/2019/10/eval-via-import.html" target="_blank">eval Simple Code Via import()</a>
`;

const esm = ({ raw }, ...vals) =>
  URL.createObjectURL(
    new Blob([String.raw({ raw }, ...vals)], { type: 'text/javascript' })
  );
import(esm`export default 'Hello Vite!'`).then(ns => {
  console.log(ns.default);
});
