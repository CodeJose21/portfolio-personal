import { useEffect } from 'react';
import { navigationFromLocation, restoreNavigation, store, useAppDispatch } from '../store';

export function useLocationNavigation() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const restore = () => {
      // The skip link targets the document main, not a cube face.
      if (window.location.hash === '#main') return;
      dispatch(restoreNavigation(navigationFromLocation(store.getState().ui.locale)));
    };
    window.addEventListener('popstate', restore);
    window.addEventListener('hashchange', restore);
    return () => {
      window.removeEventListener('popstate', restore);
      window.removeEventListener('hashchange', restore);
    };
  }, [dispatch]);
}
