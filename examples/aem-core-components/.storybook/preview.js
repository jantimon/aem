import { addParameters, addDecorator } from '@storybook/client-api';
import { withA11y } from '@storybook/addon-a11y';
import { aemMetadata } from '@storybook/aem';
import models from '../models';

addDecorator(withA11y);
addDecorator(aemMetadata({
  components: [
    require('../core/wcm/components/accordion/v1/accordion/.content.xml'),
    require('../core/wcm/components/list/v2/list/.content.xml'),
    require('../core/wcm/components/text/v2/text/.content.xml'),
  ],
  models,
}));

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  options: {
    showRoots: true,
  },
  docs: {
    iframeHeight: '200px',
  },
});
