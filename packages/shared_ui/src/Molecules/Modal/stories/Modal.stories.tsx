import {Meta, StoryObj} from '@storybook/react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalFooter,
  ModalAction,
  ModalDescription,
} from '../index';
import Button from '../../../Atoms/Button/Button';
import {Check, CloudArrowUp} from '@dsc/phosphor_icons';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';

const meta: Meta<typeof Modal> = {
  title: 'Components/Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
};

export default meta;

type Story = StoryObj<typeof Modal>;

const renderModal = (props: any) => {
  return (
    <Modal>
      <ModalAction asChild>
        <Button>Open Modal</Button>
      </ModalAction>
      <ModalContent>
        <ModalHeader className="mb-6 space-y-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
            <CloudArrowUp size={28} />
          </div>
          <div className="space-y-1">
            <ModalTitle>Update Modal Status</ModalTitle>
            <ModalDescription>
              Your document has unsaved changes. Discard or save them as a new page to continue.
            </ModalDescription>
          </div>
        </ModalHeader>
        <ModalFooter>
          <Button variant="border">Cancel</Button>
          <Button>Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const Default: Story = {
  args: {},
  render: renderModal,
};

export const customizedModal: Story = {
  args: {
  },
  render: (args) => {
    return (
      <Modal>
      <ModalAction asChild>
        <Button>Open Modal</Button>
      </ModalAction>
      <ModalContent style={{maxWidth: '20rem'}} className="max-w-[20rem] lg:max-w-[26rem]">
        <ModalHeader style={{marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem'}} className="mb-6 flex flex-col items-center justify-center space-y-3">
          <div style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid #E0E0E0', backgroundColor: 'green', color: 'white'}} className="flex h-20 w-20 items-center justify-center rounded-full border border-metal-100 bg-metal-50 text-metal-600 dark:border-metal-800 dark:bg-metal-800 dark:text-white">
            <Check size={30} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}} className="space-y-1 text-center">
            <ModalTitle>Payment Successful</ModalTitle>
            <ModalDescription>
              Your document has unsaved changes. Discard or save them as a new page to continue.
            </ModalDescription>
          </div>
        </ModalHeader>
        <ModalFooter style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="justify-center">
          <Button>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  },
};

