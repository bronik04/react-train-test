import React from 'react';
import { TrainTableProps } from '../utils/types';

export const TrainTable: React.FC<TrainTableProps> = React.memo(({ trains, onTrainClick }) => {
  return (
    <table className="train-table">
      <caption className="train-caption">Поезда</caption>
      <thead>
      <tr>
        <th>Название</th>
        <th>Описание</th>
      </tr>
      </thead>
      <tbody>
      {trains.map((train) => (
        <tr key={train.name} onClick={() => onTrainClick(train)}>
          <td>{train.name}</td>
          <td>{train.description || "Описание поезда"}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
});
