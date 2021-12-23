import { useContext } from 'react';
import { ValidatePermissions } from '../utils/ValidatePermissions';
import { AuthContext } from './AuthContext';

type useCanProps = {
  permissions?: string[]
  roles?: string[]
}

export function useCan({permissions, roles}: useCanProps) {
  const {user, isAuthenticated} = useContext(AuthContext)

  if(!isAuthenticated) {
    return false
  }

  const userHasValidPermission = ValidatePermissions({user, permissions, roles})

  return userHasValidPermission
}