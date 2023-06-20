import React from 'react';
import { SpeedLimitsTableProps } from '../utils/types';

export const SpeedLimitsTable: React.FC<SpeedLimitsTableProps> = React.memo( (
  {
    selectedTrain,
    onSpeedLimitChange,
    speedLimits,
  }) => {
  return (
    <table className="speed-limits-table">
      <caption>Ограничения скорости</caption>
      <caption>{selectedTrain.name}</caption>
      <thead>
      <tr>
        <th>Скорость</th>
        <th>Ограничение скорости</th>
      </tr>
      </thead>
      <tbody>
      {selectedTrain.speedLimits.map((limit, index) => (
        <tr key={limit.name}>
          <td>
            {limit.name}
          </td>
          <td>
            <input
              type="number"
              min={1}
              value={speedLimits[index]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onSpeedLimitChange(index, e.target.value)}
            />
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
});
