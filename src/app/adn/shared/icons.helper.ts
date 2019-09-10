import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faEdit,
  faExclamationTriangle,
  faSpinner,
  faUserCircle,
  faFilter,
  faExternalLinkAlt,
  faSync,
  faArrowRight,
  faCheck,
  faCheckSquare,
  faSearch,
  faLock,
  faTimes,
  faBan,
  faChevronLeft,
  faChevronRight,
  faArrowAltCircleRight,
  faRecycle,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFile,
  faSquare,
  faQuestionCircle,
} from '@fortawesome/free-regular-svg-icons';

interface MaterialIcon {
  name: string;
  url: any;
}

@Injectable()
export class IconsHelper {
  private faIcons: IconDefinition[] = [
    faEdit,
    faExclamationTriangle,
    faFile,
    faSpinner,
    faUserCircle,
    faFilter,
    faExternalLinkAlt,
    faSync,
    faArrowRight,
    faCheck,
    faCheckSquare,
    faSearch,
    faSquare,
    faLock,
    faTimes,
    faBan,
    faChevronLeft,
    faChevronRight,
    faArrowAltCircleRight,
    faQuestionCircle,
    faRecycle,
  ];

  private materialIcons: MaterialIcon[] = [
    {
      name: 'arrow-down',
      url: 'assets/images/icons/icon-arrow-down.svg',
    },
    {
      name: 'close',
      url: 'assets/images/icons/icon-close.svg',
    },
    {
      name: 'dropdown',
      url: 'assets/images/icons/icon-dropdown.svg',
    },
    {
      name: 'menu-expansion',
      url: 'assets/images/icons/icon-menu-expansion.svg',
    },
    {
      name: 'submenu-expansion',
      url: 'assets/images/icons/icon-submenu-expansion.svg',
    },
    {
      name: 'menu',
      url: 'assets/images/icons/icon-menu.svg',
    },
    {
      name: 'facebook',
      url: 'assets/images/icons/icon-facebook.svg',
    },
    {
      name: 'twitter',
      url: 'assets/images/icons/icon-twitter.svg',
    },
    {
      name: 'instagram',
      url: 'assets/images/icons/icon-instagram.svg',
    },
    {
      name: 'youtube',
      url: 'assets/images/icons/icon-youtube.svg',
    },
    {
      name: 'linkedin',
      url: 'assets/images/icons/icon-linkedin.svg',
    },
    {
      name: 'adn-locate',
      url: 'assets/images/icons/icon-locate.svg',
    },
    {
      name: 'adn-plus',
      url: 'assets/images/icons/icon-plus.svg',
    },
    {
      name: 'offers',
      url: 'assets/images/icons/icon-offers.svg',
    },
    {
      name: 'adn-arrow-left',
      url: 'assets/images/icons/icon-arrow-left.svg',
    },
    {
      name: 'adn-arrow-right',
      url: 'assets/images/icons/icon-arrow-right.svg',
    },
    {
      name: 'adn-scroll-down',
      url: 'assets/images/icons/icon-scroll-down.svg',
    },
    {
      name: 'adn-play',
      url: 'assets/images/icons/icon-play.svg',
    },
  ];

  constructor(
    private iconReg: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {}

  installIcons(): void {
    library.add(...this.faIcons);

    this.materialIcons.forEach(({ name, url }) => {
      this.iconReg.addSvgIcon(
        name,
        this.sanitizer.bypassSecurityTrustResourceUrl(url),
      );
    });
  }
}
