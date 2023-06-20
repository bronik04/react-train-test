import React, { useState, useEffect } from 'react';
import './App.css'
import { TrainTable } from './components/TrainTable';
import { SpeedLimitsTable } from './components/SpeedLimitsTable';
import { Train } from './utils/types';
import { fetchData } from './utils/api';

function App() {
  const [trains, setTrains] = useState<Train[]>([]);
  const [selectedTrain, setSelectedTrain] = useState<Train | null>(null);
  const [speedLimits, setSpeedLimits] = useState<number[]>([]);

  useEffect(() => {
    fetchData().then((data) => {
      setTrains(data);
    });
  }, []);

  const handleTrainClick = (train: Train): void => {
    setSelectedTrain(train);
    setSpeedLimits(train.speedLimits.map((limit) => limit.speedLimit));
  }

  const handleSpeedLimitChange = (index: number, value: string) => {
    const updatedSpeedLimits = [...speedLimits];
    updatedSpeedLimits[index] = parseInt(value, 10);
    setSpeedLimits(updatedSpeedLimits);
  };

  const handleSubmit = () => {
    const sortedSpeedLimits = speedLimits.sort((a, b) => a - b);

    if (sortedSpeedLimits.every((limit) => limit > 0 && Number.isInteger(limit))) {
      console.log('Данные успешно отправлены на сервер:', sortedSpeedLimits);
    } else {
      console.log('Ошибка: данные не соответствуют требованиям');
    }
  };

  return (
    <>
      <h1>Список поездов</h1>
      <div className='app-container'>
        <div className="train-table-container">
          <TrainTable trains={trains} onTrainClick={handleTrainClick} />
        </div>
        {selectedTrain && (
          <div className={"limit-table-container"}>
            <SpeedLimitsTable
              selectedTrain={selectedTrain}
              speedLimits={speedLimits}
              onSpeedLimitChange={handleSpeedLimitChange}
            />
            <button
              className="submit-btn"
              onClick={handleSubmit}
            >
              Отправить
            </button>
          </div>
        )}
      </div>
    </>)
}

export default App
