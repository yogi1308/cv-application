export default function onLoadSidebarClicks() {
  document.querySelectorAll(".dropdown-svg").forEach((svg) => svg.click());
    console.log('run from onLoad')
}