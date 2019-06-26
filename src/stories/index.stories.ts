import { storiesOf } from '@storybook/angular';
import { Welcome } from '@storybook/angular/demo';

import { AutocompleteComponent } from 'src/app/autocomplete/autocomplete.component';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('AutoComplte', module).add('default', () => ({
  component: AutocompleteComponent,
}));
