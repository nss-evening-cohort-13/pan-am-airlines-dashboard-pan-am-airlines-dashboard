import home from '../components/views/homeView';
import plane from '../components/views/addPlaneView';

const viewHelper = (id) => {
  switch (id) {
    case '#':
      return home.showHomepage();
    case 'planes-link':
      return plane.showPlane();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
