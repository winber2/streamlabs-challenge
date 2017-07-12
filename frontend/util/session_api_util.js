export const login = () => (
  $.ajax({
    method: 'POST',
    url: 'api/sessions'
  })
)

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/sessions'
  })
)
