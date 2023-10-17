import { UrlQueryMap } from '@grafana/data';
import { config } from 'app/core/config';

import { KioskMode } from '../../types';

// TODO Remove after topnav feature toggle is permanent and old NavBar is removed
export function getKioskMode(queryParams: UrlQueryMap): KioskMode | null {
  if (config.bootData.settings.kioskMode === 'full') {
    return KioskMode.Full;
  }
  if (config.bootData.settings.kioskMode === 'tv') {
    return KioskMode.TV;
  }

  switch (queryParams.kiosk) {
    case 'tv':
      return KioskMode.TV;
    //  legacy support
    case '1':
    case true:
      return KioskMode.Full;
    default:
      return null;
  }
}
