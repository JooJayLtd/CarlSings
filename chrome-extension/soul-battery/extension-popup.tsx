import React, { useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { BatteryDisplay } from '@/components/soul-battery/battery-display';
import { useSoulBattery } from '@/lib/hooks/useSoulBattery';
import { getRandomMessage } from '@/lib/data/soul-battery-messages';

function SoulBatteryPopup() {
  const { percentage, color, mood } = useSoulBattery();
  const message = useMemo(() => getRandomMessage(mood), [mood]);

  // Update message in DOM
  useEffect(() => {
    const messageEl = document.getElementById('message');
    if (messageEl) {
      messageEl.textContent = message;
      messageEl.style.color = color;
    }
  }, [message, color]);

  return <BatteryDisplay percentage={percentage} color={color} mood={mood} />;
}

// Mount the component
const container = document.getElementById('battery-container');
if (container) {
  const root = createRoot(container);
  root.render(<SoulBatteryPopup />);
}
