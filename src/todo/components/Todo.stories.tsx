import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Todo from './Todo';

const meta = {
  args: {
    completed: false,
    id: '1',
    title: 'title',
  },
  component: Todo,
} satisfies Meta<typeof Todo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Parent(args) {
    const [title, setTitle] = useState(args.title);
    const [completed, setCompleted] = useState(args.completed);

    return (
      <Todo
        completed={completed}
        id={args.id}
        onCompleteChange={setCompleted}
        onDelete={(id) => console.log(id)}
        onTitleChange={setTitle}
        title={title}
      />
    );
  },
};
