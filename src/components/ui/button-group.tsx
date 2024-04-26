import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

type ButtonGroupProps = {
  selectedType: string;
  onChange: (type: string) => void;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  selectedType,
  onChange,
}) => {
  const handleClick = (type: string) => {
    onChange(type);
  };

  return (
    <div className="flex gap-4 w-80 sm:w-full mx-auto text-white items-center justify-center">
      <Button
        type="button"
        className={`text-white w-44 relative ${
          selectedType === 'doctor' ? 'bg-secondary' : 'bg-accent'
        }`}
        variant="secondary"
        onClick={() => handleClick('doctor')}
      >
        <span className="mr-2">DOCTOR</span>
        {selectedType === 'doctor' && (
          <Check className="h-5 w-5 absolute top-1/2 right-2 transform -translate-y-1/2 text-green-500" />
        )}
      </Button>
      <Button
        type="button"
        className={`text-white w-44 relative ${
          selectedType === 'staff' ? 'bg-secondary' : 'bg-accent'
        }`}
        variant="secondary"
        onClick={() => handleClick('staff')}
      >
        <span className="mr-2">STAFF</span>
        {selectedType === 'staff' && (
          <Check className="h-5 w-5 absolute top-1/2 right-2 transform -translate-y-1/2 text-green-500" />
        )}
      </Button>
    </div>
  );
};

export default ButtonGroup;
