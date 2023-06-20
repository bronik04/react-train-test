export interface SpeedLimit {
  name: string;
  speedLimit: number;
}

export interface Train {
  name: string;
  description: string;
  speedLimits: SpeedLimit[];
}

export interface TrainTableProps {
  trains: Train[];
  onTrainClick: (train: Train) => void;
}

export interface SpeedLimitsTableProps {
  selectedTrain: Train;
  speedLimits: number[];
  onSpeedLimitChange: (index: number, value: string) => void;
}
