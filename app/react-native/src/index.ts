import { StoryApi } from '@storybook/addons';
import { ClientApi } from '@storybook/client-api';
import { ReactNode } from 'react';

import { start } from './preview/start';
import type { ReactFramework } from './types-6.0';

// export const preview = new Preview();
const { clientApi, configure, preview } = start();
type C = ClientApi<ReactFramework>;

const rawStoriesOf: C['storiesOf'] = clientApi.storiesOf.bind(clientApi);
export const setAddon: C['setAddon'] = clientApi.setAddon.bind(clientApi);
export const addDecorator: C['addDecorator'] = clientApi.addDecorator.bind(clientApi);
export const addParameters: C['addParameters'] = clientApi.addParameters.bind(clientApi);
export const addArgsEnhancer: C['addArgsEnhancer'] = clientApi.addArgsEnhancer.bind(clientApi);

export const clearDecorators: C['clearDecorators'] = clientApi.clearDecorators.bind(clientApi);
export { configure };
export const getStorybook: C['getStorybook'] = clientApi.getStorybook.bind(clientApi);
export const raw: C['raw'] = clientApi.raw.bind(clientApi);

export const storiesOf = (kind: string, module: NodeModule): StoryApi<ReactNode> =>
  rawStoriesOf(kind, module).addParameters({ framework: 'react-native' });

export const getStorybookUI = preview.getStorybookUI;

export * from './types-6.0';
