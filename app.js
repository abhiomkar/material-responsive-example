import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCDrawer} from "@material/drawer";
import {MDCList} from "@material/list";

// Select DOM elements

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const drawerElement = document.querySelector('.mdc-drawer');
const mainContentEl = document.querySelector('.main-content');

// Initialize top app bar

const topAppBar = new MDCTopAppBar(topAppBarElement);

// Initialize drawer

const initModalDrawer = () => {
  drawerElement.classList.add("mdc-drawer--modal");
  const drawer = MDCDrawer.attachTo(drawerElement);
  drawer.open = false;
  topAppBar.setScrollTarget(mainContentEl);
  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });

  listEl.addEventListener('click', (event) => {
    drawer.open = false;
  });
}

if (window.matchMedia("(max-width: 900px)").matches) {
  initModalDrawer();
} else {
  const list = new MDCList(listEl);
  list.wrapFocus = true;
}

// Toggle between permanent drawer and modal drawer at breakpoint 900px

const resizeHandler = () => {
  if (window.matchMedia("(max-width: 900px)").matches) {
    initModalDrawer();
  } else {
    drawerElement.classList.remove("mdc-drawer--modal");
  }
}
window.addEventListener('resize', resizeHandler);
