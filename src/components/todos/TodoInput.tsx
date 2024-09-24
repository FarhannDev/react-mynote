import * as React from 'react';
import { Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';

type IFormInput = { task: string; taskRequired: string };

type IProps = { submitForm: (value: string) => void };

const TodoInput: React.FC<IProps> = ({ submitForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    submitForm(data.task);
    reset();
  };

  return (
    <>
      <div className="todo-input-container">
        <Form onSubmit={handleSubmit(onSubmit)} className="todo-input">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Tambahkan Tugas Baru"
              className="todo-input-control"
              autoComplete="off"
              {...register('task', {
                required: true,
                minLength: 6,
                maxLength: 50,
              })}
            />
            <div className="text-danger">
              {errors.task && errors.task.message}
            </div>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default TodoInput;
