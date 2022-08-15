import { FormContainer, TaskInput, MinutesAmountInput } from './styles';

import { useContext } from 'react';
import { CyclesContext } from '../..';
import { useFormContext } from 'react-hook-form';

export const NewCycleForm = () => {
  const { activeCycle, activeCycleId } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 1" />
        <option value="Projeto 1" />
        <option value="Projeto 1" />
      </datalist>
      <label htmlFor="minuteAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minuteAmount"
        placeholder="00"
        step={1}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos</span>
    </FormContainer>
  );
};
