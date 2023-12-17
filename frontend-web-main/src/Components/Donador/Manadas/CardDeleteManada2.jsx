import React, { useEffect, useState } from 'react';
import { deleteManada } from '../../../Service/Manada';
export const CardDeleteManada2 = ({ 
  onClose, 
  selectedManada, 
  }) => {
    const [isDeleted, setDeleted] = useState(false);
    const handleDeleteManada = async () => {
      try {
        // Ejecutar la función deleteManada con los dos argumentos
        await deleteManada(selectedManada, {
          apiUrl: window?.userSigned?.apiUrl,
          token: window?.userSigned?.token,
        });
        await setDeleted(true);
        console.log(isDeleted)
        // Cerrar el diálogo/modal después de eliminar la manada
        onClose();
        await setDeleted(false);
      } catch (error) {
        // Manejar errores, puedes mostrar un mensaje o realizar acciones específicas
        console.error('Error al eliminar la manada:', error);
        setError(error.message || 'Error al eliminar la manada.');
      }
    };

  return (
    <div className="fund-don-dialog">
      <div className="fund-don-dialog-content fund-card">
        <div className="fund-flx-column">
          <div className="fund-txt-24">
            <b>Manada</b>
          </div>
          <div className="fund-txt-14 fund-mt-16">
            {`¿Esta seguro de eliminar a la manada "${selectedManada.nombre}?"`}
          </div>
        </div>
        <div className="form-buttons-2option">
          <div>
          <button className="fund-btn" onClick={onClose}>
            No
          </button>
          </div>
          <div className='form-buttons-2option-cancelar'>
          <button
            className="fund-btn"
            onClick={handleDeleteManada}
          >
            Si
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};