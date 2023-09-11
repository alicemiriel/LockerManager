import type { Meta } from '@storybook/angular';
import { moduleMetadata, StoryObj } from '@storybook/angular';
import { LockerListComponent } from './locker-list.component';
import { LockerStatus } from '../../locker.type';
import { LockerTileComponent } from './locker-tile/locker-tile.component';
import { LockerNumberPipe } from './locker-tile/locker-number/locker-number.pipe';
import { LockerStatusPipe } from './locker-tile/locker-status/locker-status.pipe';

interface StoryProps {
  lockers: { number: number; status: LockerStatus }[];
}

const meta: Meta<StoryProps> = {
  title: 'Locker List',
  component: LockerListComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        LockerListComponent,
        LockerTileComponent,
        LockerNumberPipe,
        LockerStatusPipe,
      ],
    }),
  ],
  render: (args: StoryProps) => ({
    props: {
      lockers: [...args.lockers],
    },
  }),
  args: {
    lockers: [],
  },
  argTypes: {
    lockers: {
      control: 'array',
      table: {
        type: {
          number: 'number',
          status: 'text',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    lockers: [
      { number: 1, status: LockerStatus.BUSY },
      { number: 2, status: LockerStatus.FREE },
      { number: 3, status: LockerStatus.RESERVED },
    ],
  },
};
