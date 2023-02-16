import { container } from 'tsyringe';

import { IDateProvider } from './DateProvider/IDateProvider';
import { DaysjsDateProvider } from './DateProvider/implementations/DaysjsDateProvider';

container.registerSingleton<IDateProvider>(
  'DaysjsDateProvider',
  DaysjsDateProvider,
);
