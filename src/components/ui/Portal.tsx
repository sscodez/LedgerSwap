import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

// Create a dedicated portal container for dropdowns
let portalRoot: HTMLElement | null = null;

export default function Portal({ children }: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!portalRoot) {
      // Create the portal container if it doesn't exist
      portalRoot = document.createElement('div');
      portalRoot.id = 'dropdown-portal-root';
      portalRoot.style.position = 'fixed';
      portalRoot.style.zIndex = '999999';
      portalRoot.style.top = '0';
      portalRoot.style.left = '0';
      portalRoot.style.width = '100%';
      portalRoot.style.height = '100%';
      portalRoot.style.pointerEvents = 'none';
      document.body.appendChild(portalRoot);
    }
    
    setMounted(true);
    
    return () => {
      setMounted(false);
    };
  }, []);

  return mounted && portalRoot
    ? createPortal(
        <div style={{ pointerEvents: 'auto' }}>{children}</div>,
        portalRoot
      )
    : null;
}
