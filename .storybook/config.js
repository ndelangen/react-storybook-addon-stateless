import { configure } from '@kadira/storybook';

import './index.css';

const components = require.context('./stories', true, /\.stories\.jsx$/);

function loadStories() {
  components.keys().forEach(filename => components(filename));
}

configure(loadStories, module);
