import React from 'react';

export function RoleDisplay(props) {
  switch (props.role) {
    case 'STUDENT':
      return <div className='role'> Connecté en tant qu'étudiant </div>;
    case 'TEACHER':
      return <div className='role'> Connecté en tant qu'enseignant </div>;
    case 'ADMIN':
      return <div className='role'> Connecté en tant qu'administrateur </div>;
  }
}
