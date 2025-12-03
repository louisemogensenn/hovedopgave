
export default function Inputfelt() {
    const [isAktiv, setIsAktiv] = useState(false); /* isAktiv kan være true eller false og er altså først false. Denne værdi ændres ved funktionen setIsAktiv, der opdateres */

    

    return (
        <>
        
        </>
    )
}

/*_________________________________ */

import { useState } from 'react';

export default function InputFelt({ label, type = "text" }) {
  const [isActive, setIsActive] = useState(false);

  const handleBlur = (e) => {
    setIsActive(e.target.value !== '');
  };

  return (
    <div style={styles.wrapper}>
      <input
        type={type}
        onFocus={() => setIsActive(true)}
        onBlur={handleBlur}
        style={styles.input}
      />
      <label style={{...styles.label, ...(isActive && styles.labelActive)}}>
        {label}
      </label>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    outline: 'none',
  },
  label: {
    position: 'absolute',
    left: '1rem',
    top: '1rem',
    padding: '0 0.25rem',
    backgroundColor: 'white',
    color: '#666',
    pointerEvents: 'none',
    transition: 'all 0.2s',
  },
  labelActive: {
    top: '-0.75rem',
    fontSize: '0.875rem',
    color: '#3b82f6',
  },
};