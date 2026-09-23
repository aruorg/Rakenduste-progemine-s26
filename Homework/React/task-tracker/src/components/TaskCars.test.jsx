import '@testing-library/jest-dom/vitest';

import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, expect, it, vi, afterEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import TaskCard from './TaskCard';

afterEach(() => {
  cleanup();
});

describe('TaskCard', () => {
  const task = {
    id: 1,
    title: 'Do homework',
    description: 'Math, Biology notes',
    completed: false,
  };

  it('displays task title', () => {
    render(
      <MemoryRouter>
        <TaskCard
          task={task}
          onToggle={vi.fn()}
          onDelete={vi.fn()}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Do homework')).toBeInTheDocument();
  });

  it('call on Toggle when button clicked', () => {
    const onToggle = vi.fn();

    render(
      <MemoryRouter>
        <TaskCard
          task={task}
          onToggle={onToggle}
          onDelete={vi.fn()}
        />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Change task state',
      })
    );

    expect(onToggle).toHaveBeenCalledWith(1);
  });
});