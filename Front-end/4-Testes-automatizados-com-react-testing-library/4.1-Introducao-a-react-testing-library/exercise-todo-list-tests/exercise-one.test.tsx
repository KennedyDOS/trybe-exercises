import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const TASK_DESCRIPTION = 'Beber água!';

describe('Testando a aplicação, testando o botão e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);

    const buttonAdd: HTMLButtonElement = screen.getByRole('button', { name: /adicionar/i });
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd.type).toBe('button');
  });

  test('Ao clicar no botão "Adicionar" a task deve ser adicionada na tela', async () => {
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    const buttonAdd = screen.getByRole('button', { name: /adicionar/i });
    
    await userEvent.type(inputTask, TASK_DESCRIPTION);
    expect(screen.queryByText(TASK_DESCRIPTION)).not.toBeInTheDocument();
    await userEvent.click(buttonAdd);
    expect(screen.getByText(TASK_DESCRIPTION)).toBeInTheDocument();
    expect(inputTask).toHaveValue('');
  });
});