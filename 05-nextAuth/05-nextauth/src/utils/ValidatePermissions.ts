type ValidatePermissionsProps = {
  user: {
    permissions?: string[]
    roles?: string[]
  }
  permissions?: string[]
  roles?: string[]
}

export function ValidatePermissions({user, permissions, roles}: ValidatePermissionsProps) {
  if (permissions?.length > 0) {
    // Iŕa retornar true caso o usuário tenha todas as permissoes.
    const hasAllPermissions = permissions.every(permission =>  {
      return user.permissions.includes(permission)
    })

    if (!hasAllPermissions) {
      return false
    }
  }

  if (roles?.length > 0) {
    // Iŕa retornar true caso o usuário tenha pelo menos uma das permissões.
    const hasAllRoles = roles.some(role =>  {
      return user.roles.includes(role)
    })

    if (!hasAllRoles) {
      return false
    }
  }
  // Caso o usuário tenha passado em todas as condições.
  return true
}