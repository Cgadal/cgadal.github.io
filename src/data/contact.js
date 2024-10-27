import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faOrcid, faResearchgate } from '@fortawesome/free-brands-svg-icons';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/Cgadal',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'cyril.gadal@manchester.ac.uk',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://orcid.org/0000-0002-2173-5837',
    label: 'orcid',
    icon: faOrcid,
  },
  {
    link: 'https://www.researchgate.net/profile/Cyril-Gadal',
    label: 'ResearchGate',
    icon: faResearchgate,
  },
  {
    link: 'https://www.linkedin.com/in/cyril-gadal-39037a214/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
];

export default data;
