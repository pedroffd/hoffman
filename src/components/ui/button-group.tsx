import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleClick = (button: string) => {
    setSelectedButton(button);
  };

  return (
    <div className="flex gap-4 w-full mx-auto text-white items-center justify-center">
      <Button
        className={`text-white w-44 relative ${
          selectedButton === 'DOCTOR' ? 'bg-secondary' : 'bg-accent'
        }`}
        variant="secondary"
        onClick={() => handleClick('DOCTOR')}
      >
        <span className="mr-2">DOCTOR</span>
        {selectedButton === 'DOCTOR' && (
          <Check className="h-5 w-5 absolute top-1/2 right-2 transform -translate-y-1/2 text-green-500" />
        )}
      </Button>
      <Button
        className={`text-white w-44 relative ${
          selectedButton === 'STAFF' ? 'bg-secondary' : 'bg-accent'
        }`}
        variant="secondary"
        onClick={() => handleClick('STAFF')}
      >
        <span className="mr-2">STAFF</span>
        {selectedButton === 'STAFF' && (
          <Check className="h-5 w-5 absolute top-1/2 right-2 transform -translate-y-1/2 text-green-500" />
        )}
      </Button>
    </div>
  );
};

export default ButtonGroup;
