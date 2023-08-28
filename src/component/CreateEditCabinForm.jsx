import { isEqual, uniq } from 'lodash';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Form from '../ui/Form';
import Button from '../ui/Button';
import Textarea from '../ui/Textarea';
import FormRow from '../ui/FormRow';

import { useEditCabin } from './useEditCabin';

function CreateEditCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { isEditing, editCabin } = useEditCabin();

  const { _id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);

    if (isEditSession) {
      editCabin(editId, data);
      reset();
      onCloseModal?.();
    }
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
      <FormRow label='Cabin name' error={errors?.name?.message}>
        <Input
          type='text'
          id='name'
          disabled={isEditing}
          {...register('name', {
            required: 'This field is required',
          })}
        />
      </FormRow>
      <FormRow label='Maximum capacity' error={errors?.capacity?.message}>
        <Input
          type='number'
          id='capacity'
          disabled={isEditing}
          {...register('capacity', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow label='Regular Price' error={errors?.price?.message}>
        <Input
          type='number'
          id='price'
          disabled={isEditing}
          {...register('price', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Price should be at least 1',
            },
          })}
        />
      </FormRow>
      <FormRow label='Discount' error={errors?.discount?.message}>
        <Input
          type='number'
          id='discount'
          disabled={isEditing}
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) =>
              value <= getValues().price ||
              'Discount should be less than regular price',
          })}
        />
      </FormRow>
      <FormRow
        label='Description for website'
        error={errors?.description?.message}
      >
        <Textarea
          type='number'
          id='description'
          defaultValue=''
          disabled={isEditing}
          {...register('description', {
            required: 'This field is required',
          })}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation='secondary'
          type='reset'
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isEditing}>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateEditCabinForm;
