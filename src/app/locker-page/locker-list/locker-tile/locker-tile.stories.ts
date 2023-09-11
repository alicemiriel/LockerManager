import type { Meta } from '@storybook/angular';
import { moduleMetadata, StoryObj } from '@storybook/angular';
import { LockerTileComponent } from './locker-tile.component';
import { LockerStatus } from '../../../locker.type';
import { LockerNumberPipe } from './locker-number/locker-number.pipe';
import { LockerStatusPipe } from './locker-status/locker-status.pipe';

const meta: Meta<{ number: number; status: LockerStatus }> = {
  title: 'Locker Tile',
  component: LockerTileComponent,
  decorators: [
    moduleMetadata({
      declarations: [LockerTileComponent, LockerNumberPipe, LockerStatusPipe],
    }),
  ],
  render: (args: { number: number; status: LockerStatus }) => ({
    props: {
      locker: {
        ...args,
      },
    },
  }),
  argTypes: {
    number: { control: 'number' },
    status: {
      control: 'select',
      options: [LockerStatus.FREE, LockerStatus.BUSY, LockerStatus.RESERVED],
    },
  },
};

export default meta;
type Story = StoryObj<{ number: number; status: LockerStatus }>;

export const Primary: Story = {
  name: 'Reserved',
  args: {
    number: 123,
    status: LockerStatus.RESERVED,
  },
};

export const Free: Story = {
  args: {
    number: 123,
    status: LockerStatus.FREE,
  },
};

export const Busy: Story = {
  args: {
    number: 123,
    status: LockerStatus.BUSY,
  },
};
