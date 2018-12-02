import { set } from '../../../utils/store/actions';
import { history, compileHash } from '../../../utils/RouterUtils';

export const setRoute = set('environment', 'route');

// routes
const pushState = (route: any) => {
  const fullPath = compileHash(route);
  history.push(fullPath);
}
export const navigateTo = (route: any, shouldPushState = true) => (dispatch: any) => {
  dispatch(setRoute(route));

  if (shouldPushState) {
    pushState(route);
  }
};
