import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCDrawer} from "@material/drawer";

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const drawerElement = document.querySelector('.mdc-drawer');

const initDismissibleDrawer = () => {
  drawerElement.classList.add("mdc-drawer--dismissible");
  const drawer = MDCDrawer.attachTo(drawerElement);
  drawer.open = false;
  topAppBar.setScrollTarget(document.getElementById('main-content'));
  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });
}
if (window.matchMedia("(max-width: 900px)").matches) {
  initDismissibleDrawer();
}

const resizeHandler = () => {
  if (window.matchMedia("(max-width: 900px)").matches) {
    initDismissibleDrawer();
  } else {
    drawerElement.classList.remove("mdc-drawer--dismissible");
    drawer.open = true;
    !!drawer && drawer.destroy();
  }
}
window.addEventListener('resize', resizeHandler);
