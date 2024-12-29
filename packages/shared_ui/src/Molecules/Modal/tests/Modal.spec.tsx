import {render, screen} from '@testing-library/react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalFooter,
  ModalAction,
  ModalDescription,
} from '../index';
import '@testing-library/jest-dom';

describe('Modal', () => {
  const renderModal = (args: any) => {
    return (
      <Modal>
        <ModalAction data-testid="modal_action_testid" asChild>
          <button>Open Modal</button>
        </ModalAction>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>
          </ModalHeader>
        </ModalContent>
      </Modal>
    );
  };
  it('should render the modal', () => {
    render(renderModal({}))
    expect(screen.getByTestId('modal_action_testid')).toBeInTheDocument();
  });
});
